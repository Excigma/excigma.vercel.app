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
                    <Link href="/" color="white">
                        <IconButton edge="start">
                            <Avatar src="/icon.svg" alt="Excigma" sx={{ width: 30, height: 30 }} />
                        </IconButton>
                    </Link>

                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        <Link href="/" style={{ color: 'white' }} display={{ xs: 'none', md: 'block' }}>Excigma</Link>
                    </Typography>

                    <Stack spacing={1} direction="row">
                        <Button variant="outline" href="/social" component={Link} color="white">
                            Social
                        </Button>
                        <Button variant="outline" href="/projects" component={Link} color="white">
                            Projects
                        </Button>
                        <Button variant="outline" href="/notes" component={Link} color="white">
                            Notes
                        </Button>

                        <IconButton onClick={toggle} style={{ color: 'white' }}>
                            {dark ? <LightModeIcon /> : <BrightnessLowIcon />}
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}