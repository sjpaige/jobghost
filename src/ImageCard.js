import React from 'react';
import { makeStyles } from '@material-ui/core';
import organizedImage from './static/about/organized.jpg'


const useStyles = makeStyles((theme) => ({

    organized:{
        maxWidth: '300px',
        backgroundImage: `url(${organizedImage})`,
        borderRadius: '5px',
    }
}))

function ImageCard() {
    
    const classes = useStyles();
    return(
        <img className={classes.organized} src={organizedImage} alt="organized using computer."/>
    )
}