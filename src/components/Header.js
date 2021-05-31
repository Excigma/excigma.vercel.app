import { AppBar, Avatar, Box, Button, IconButton, List, ListItem, NoSsr, Slide, Stack, SwipeableDrawer, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'components/Link';
import React from 'react';


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
                        <NoSsr>
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
                                    <Avatar src="/icons/icon.svg" alt="Excigma" sx={{ width: 30, height: 30 }} >
                                        E
                                    </Avatar>
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
                            </Stack>
                        </NoSsr>
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
            </SwipeableDrawer>
        </>
    );
}