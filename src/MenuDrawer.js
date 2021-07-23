
import React from 'react';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import { Info } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import GhostLogo from './GhostLogo';


function MenuDrawer () {

  return ( 
    
    <List>
      
      <Container maxWidth="xs">
        <Grid container justifyContent="center">
          <GhostLogo height={75} width={75} color={"black"}/>
        </Grid>
      
        <Link style={{textDecoration: 'none'}} to="/">
          <Typography  variant="h4" color="secondary">Job Ghost</Typography>
        </Link>
      </Container>

      <ListItem component={Link} to="/" button>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
      </ListItem>
      <ListItem component={Link} to="/jobs" button>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText>Job Applications</ListItemText>
    </ListItem>

    <ListItem component={Link} to="/about" button>
      <ListItemIcon>
        <Info />
      </ListItemIcon>
      <ListItemText >About</ListItemText>
    </ListItem>
  </List>
  )
}

export default MenuDrawer;
