import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

    organized:{
        maxWidth: '100%',
        borderRadius: '5px',
    }
}))

export default function ImageCard(props) {

    const image = props.image;
    
    const classes = useStyles();

    return(
        <img className={classes.organized} src={image} alt="organized using computer."/>
    )
}