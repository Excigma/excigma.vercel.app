
import { Fab, Slide, useScrollTrigger, Zoom } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ExpandLess';
import * as React from 'react';

function scrollToTop() {
    if (document.documentElement) document.documentElement.scrollIntoView({ behavior: 'smooth' });
}

export default function ScrollToTop(props) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200
    });

    return (
        <Zoom in={trigger}>
            <Slide direction="left" in={trigger}>
                <Fab aria-label="Scroll to top" onClick={scrollToTop} {...props} >
                    <ArrowUpwardIcon color='white' />
                </Fab>
            </Slide>
        </Zoom>
    );
}