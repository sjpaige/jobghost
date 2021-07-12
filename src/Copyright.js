import React from 'react';
import { Link, Typography } from '@material-ui/core';


export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://jobghost-48ac7.web.app/">
          Job Ghost
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }