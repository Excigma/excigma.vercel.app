
import ArrowUpwardIcon from '@mui/icons-material/ExpandLess';
import { Fab, Slide, useScrollTrigger, Zoom } from '@mui/material';
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