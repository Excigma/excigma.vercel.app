import { AppBar, Avatar, Box, Button, IconButton, List, ListItem, Slide, Stack, SwipeableDrawer, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import LightModeIcon from '@material-ui/icons/LightMode';
import MenuIcon from '@material-ui/icons/Menu';
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

    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <>
            <HideOnScroll direction="down" {...props}>
                <AppBar>
                    <Toolbar>
                        <Box display={{ xs: 'block', md: 'none' }}>
                            <IconButton
                                aria-label="menu"
                                onClick={toggleDrawer('left', true)}
                                style={{ color: 'white' }}
                                hidden={{ xs: 'block', md: 'none' }}>
                                <MenuIcon />
                            </IconButton>

                        </Box>

                        <Link href="/">
                            <IconButton  >
                                <Avatar src="/icons/icon.svg" alt="Excigma" sx={{ width: 30, height: 30 }} />
                            </IconButton>
                        </Link>

                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            <Link href="/" style={{ color: 'white' }}>
                                Excigma
                            </Link>
                        </Typography>

                        <Stack
                            spacing={1}
                            direction="row"
                            color="white"
                            display={{ xs: 'none', md: 'block' }}>
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

            <SwipeableDrawer
                anchor="left"
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
                disableBackdropTransition={true}
                sx={{ width: '10em' }}
            >
                <List onClick={toggleDrawer('left', false)} style={{ width: 250 }}>
                    <Link href="/" color="inherit">
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar src="/icons/icon.svg" alt="Excigma" sx={{ width: 30, height: 30 }} />
                            </ListItemIcon>
                            <ListItemText primary="Excigma" />
                        </ListItem>
                    </Link>
                </List>

                <Divider />

                <List onClick={toggleDrawer('left', false)}>
                    <Link href="/social" color="inherit">
                        <ListItem button>
                            <ListItemText primary="Social" />
                        </ListItem>
                    </Link>

                    <Link href="/projects" color="inherit">
                        <ListItem button>
                            <ListItemText primary="Projects" />
                        </ListItem>
                    </Link>

                    <Link href="/notes" color="inherit">
                        <ListItem button>
                            <ListItemText primary="Notes" />
                        </ListItem>
                    </Link>
                </List>

                <Divider />

                <List>
                    <ListItem button onClick={toggle}>
                        <ListItemIcon>
                            <IconButton aria-label="Toggle theme" color="inherit" size="small">
                                {dark ? <LightModeIcon /> : <BrightnessLowIcon />}
                            </IconButton>
                        </ListItemIcon>
                        <ListItemText primary="Toggle Theme" />
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </>
    );
}