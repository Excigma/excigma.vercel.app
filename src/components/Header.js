import { AppBar, Avatar, Button, IconButton, Slide, Stack, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import LightModeIcon from '@material-ui/icons/LightMode';
import Link from 'components/Link';
import { useTheme } from 'components/ThemeProvider';
import * as React from 'react';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} in={!trigger} {...props}>
            {children}
        </Slide>
    );
}

export default function Header(props) {
    const { toggle, dark } = useTheme();

    return (
        <HideOnScroll direction="down" {...props}>
            <AppBar>
                <Toolbar>
                    <Link href="/">
                        <IconButton edge="start">
                            <Avatar src="/icon.svg" alt="Excigma" sx={{ width: 30, height: 30 }} />
                        </IconButton>
                    </Link>

                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        <Link href="/" style={{ color: 'white' }} display={{ xs: 'none', md: 'block' }}>
                            Excigma
                        </Link>
                    </Typography>

                    <Stack spacing={1} direction="row" color="white">
                        <Button variant="outline" href="/social" component={Link}>
                            Social
                        </Button>
                        <Button variant="outline" href="/projects" component={Link}>
                            Projects
                        </Button>
                        <Button variant="outline" href="/notes" component={Link}>
                            Notes
                        </Button>

                        <IconButton aria-label="Toggle theme" onClick={toggle} style={{ color: 'white' }}>
                            {dark ? <LightModeIcon /> : <BrightnessLowIcon />}
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}