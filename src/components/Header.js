import { AppBar, Button, Checkbox, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import React from 'react';
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


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
                            <Button href="/404" component={Link} display={{ xs: 'none', md: 'block' }} style={{ color: 'white' }}>404</Button>

                            <Button href="/subjects" component={Link} style={{ color: 'white' }}>Subjects</Button>

                            <Checkbox {...label} style={{ color: 'white' }} icon={<DarkMode />} checkedIcon={<LightMode />} onClick={() => themeState.toggle()} defaultChecked={themeState.dark}/>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </>
    );
}