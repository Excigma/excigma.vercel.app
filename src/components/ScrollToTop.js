
import { Fab, Slide, useScrollTrigger, Zoom } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ExpandLess';
import React from 'react';

function scrollToTop() {
    if (document.body) document.body.scrollIntoView({ behavior: 'smooth' });
}

export default function ScrollToTop(props) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200
    });

    return (
        <Zoom in={trigger}>
            <Slide direction="left" in={trigger}>
                <Fab style={{
                    position: 'fixed',
                    bottom: '25px',
                    right: '25px',
                }} color='primary' {...props} onClick={scrollToTop}>
                    <ArrowUpwardIcon color='white' />
                </Fab>
            </Slide>
        </Zoom>
    );
}