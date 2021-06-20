import React from 'react';
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from './spooky.svg'


function NavBar({user}) {
    return(
        <div>
            <AppBar position='relative'>
            
                <Toolbar>
                    <Grid container>
                        <Grid><Logo fill="white" height="67px" width="67px"/>   </Grid>
                        <Grid item md>
                            
                            <Typography variant="h2" color="inherit">job ghost</Typography>      
                        </Grid>
                        {/* <Grid item md><p>{user.email}</p></Grid>
                        <Grid item md><img src={user.photoURL} alt="The current users profile picture from google."/></Grid> */}

                    </Grid>
      
                     
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;