import React from 'react';
import { AppBar, Button, Checkbox, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
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
                                <Image src="/icons/icon-48x48.png" alt="Product icon" width="30" height="30" />
                            </IconButton>
                        </Link>

                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            <Link href="/" style={{ color: 'white' }} display={{ xs: 'none', md: 'block' }}>PastpaperArmyKnife</Link>
                        </Typography>

                        <Stack spacing={1} direction="row">
                            <Button href="/subjects" component={Link} style={{ color: 'white' }}>Subjects</Button>

                            <Checkbox style={{ color: 'white' }} icon={<DarkMode />} checkedIcon={<LightMode />} onChange={() => themeState.toggle()} checked={themeState.dark}/>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
}