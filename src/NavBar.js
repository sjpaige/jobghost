import React, { useState } from 'react';
import {AppBar, Toolbar, Button, Avatar, makeStyles} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import MenuDrawer from './MenuDrawer.js'





function NavBar(props) {

    const auth = props.auth;
    const currentUser = auth.currentUser;
    const [menuState, setMenuState] = useState(false)


    function SignOut(){ 
        return auth.currentUser && (
            <Button variant="outlined" color="secondary" onClick={() => auth.signOut()}>Sign Out</Button>
        )
      }

      const handleDrawerState = () => {
    
        setMenuState(!menuState)
    }



    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        avatar: {
            margin: theme.spacing(3),
        }
    }))

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <AppBar position='relative'>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerState}>
                        <MenuIcon />
                    </IconButton> 
                    <Drawer anchor="left" open={menuState} onClick={handleDrawerState}>
                        <MenuDrawer />
                    </Drawer>
                    {/* <Logo height="50px" width="50px" fill="white" margin="0"/>
                    <Typography className={classes.title} variant="h5" color="inherit">JobGhost</Typography> */}
                    <div className={classes.title}/>
                    
                    {currentUser && <Avatar className={classes.avatar} src={currentUser.photoURL}/>}
                    <SignOut />

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;