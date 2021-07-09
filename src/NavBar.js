import React, { useState } from 'react';
import {AppBar, Toolbar, Button, Avatar, makeStyles} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import MenuDrawer from './MenuDrawer.js'

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

function NavBar (props) {
    
    const classes = useStyles();
    const currentUser = props.auth.currentUser;
    const [menuState, setMenuState] = useState(false)

    const handleDrawerState = () => setMenuState(!menuState)

    const SignOut = () => (
        props.auth.currentUser && <Button variant="outlined" color="secondary" onClick={() => props.auth.signOut()}>Sign Out</Button>
    );

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
                    <div className={classes.title}/>
                    
                    {currentUser && <Avatar className={classes.avatar} src={currentUser.photoURL}/>}
                    <SignOut />

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;