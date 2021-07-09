import React from 'react';
import { Typography, Container,  } from '@material-ui/core';

function Error(){

    return(
        <Container maxWidth="xs" style={{marginTop:'20vh'}}>
            <Typography variant="h4" align="center"> Something went wrong!</Typography>
            <Typography variant="body1" align="center"> Please refresh the page.</Typography>
        </Container>
    )
}

export default Error;