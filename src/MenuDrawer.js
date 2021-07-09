
import React from 'react';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import { Info } from '@material-ui/icons';
import { Link } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';


function MenuDrawer () {

  return ( 
    <List>
      <Container maxWidth="xs">
        <Link href="/">
          <Typography variant="h4" color="secondary">Job Ghost</Typography>
        </Link>
      </Container>

      <ListItem component="a" href="/" button>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
      </ListItem>
      <ListItem component="a" href="/jobs" button>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText>Job Applications</ListItemText>
    </ListItem>

    <ListItem component="a" href="/about" button>
      <ListItemIcon>
        <Info />
      </ListItemIcon>
      <ListItemText >About</ListItemText>
    </ListItem>
  </List>
  )
}

export default MenuDrawer;
