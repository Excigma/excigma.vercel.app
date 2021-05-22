import { AppBar, Button, Divider, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import Link from './Link';
import { useRouter } from 'next/router';
import Breadcrumbs from './Breadcrumbs';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Stack from '@material-ui/core/Stack';

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

                        <Stack spacing={1} direction="row">
                            <Button href="/404" component={Link} style={{ color: 'white' }}>404</Button>

                            <Button href="/subjects" component={Link} style={{ color: 'white' }}>Subjects</Button>

                            <Button href="/subjects" component={Link} variant="contained" style={{ color: 'white' }}>
                                <Brightness4Icon />
                            </Button>
                        </Stack>
                        
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
}