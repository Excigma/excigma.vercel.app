import { AppBar, Avatar, Button, Checkbox, IconButton, Slide, Stack, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import DarkMode from '@material-ui/icons/DarkModeOutlined';
import LightMode from '@material-ui/icons/LightModeOutlined';
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
                        <Button variant="outline" href="/social" component={Link} style={{ color: 'white' }}>Social</Button>
                        <Button variant="outline" href="/projects" component={Link} style={{ color: 'white' }}>Projects</Button>
                        <Button variant="outline" href="/notes" component={Link} style={{ color: 'white' }}>Notes</Button>

                        <Checkbox style={{ color: 'white' }} icon={<DarkMode />} checkedIcon={<LightMode />} onChange={() => toggle()} checked={dark} inputProps={{ 'aria-label': 'Toggle dark mode' }} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}