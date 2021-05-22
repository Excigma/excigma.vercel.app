import { AppBar, Button, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import Link from './Link';

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

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Link href="/" color="inherit">
                            <IconButton edge="start">
                                <Image src="/icons/icon-48x48.png" alt="Product icon" width="30" height="30" />
                            </IconButton>
                        </Link>

                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            <Link href="/" style={{ color: 'white' }}>PastpaperArmyKnife</Link>
                        </Typography>

                        <Button href="/subjects" component={Link} style={{ color: 'white' }}>Subjects</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
}