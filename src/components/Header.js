import { AppBar, Button, CssBaseline, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import Link from './Link';


const useStyles = makeStyles({
    title: { flexGrow: 1 }
});

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header(props) {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
               
                <AppBar position="sticky">
                    <Toolbar>
                        <Link href="/" color="inherit">
                            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                                <Image src="/icons/icon-48x48.png" alt="Product icon" width="30" height="30" />
                            </IconButton>
                        </Link>

                        <Typography variant="h6" className={classes.title}>
                            <Link href="/" style={{ color: 'white' }}>PastpaperArmyKnife</Link>
                        </Typography>

                        <Button>Subjects</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </Fragment>
    );
}