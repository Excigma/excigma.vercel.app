import React from 'react';
import { AppBar, Avatar, Button, Checkbox, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import Image from 'next/image';
import Link from './Link';
import DarkMode from '@material-ui/icons/DarkMode';
import LightMode from '@material-ui/icons/LightMode';
import Stack from '@material-ui/core/Stack';
import { useTheme } from 'components/ThemeProvider';

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
    const themeState = useTheme();
    
    return (
        <>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Link href="/" color="inherit">
                            <IconButton edge="start">
                                <Avatar src="/icon.svg" alt="Excigma" sx={{ width: 30, height: 30 }} />
                            </IconButton>
                        </Link>

                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            <Link href="/" style={{ color: 'white' }} display={{ xs: 'none', md: 'block' }}>Excigma's Notes</Link>
                        </Typography>

                        <Stack spacing={1} direction="row">
                            <Button href="/notes" component={Link} style={{ color: 'white' }}>Notes</Button>

                            <Checkbox style={{ color: 'white' }} icon={<DarkMode />} checkedIcon={<LightMode />} onChange={() => themeState.toggle()} checked={themeState.dark}/>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
}