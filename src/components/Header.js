import { AppBar, Avatar, Box, Button, Drawer, IconButton, List, ListItem, Slide, Stack, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'components/Link';
import * as React from 'react';
import LazyHydrate from 'react-lazy-hydration';

export default function Header(props) {
    const trigger = useScrollTrigger();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => React.useCallback((event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    });

    return (
        <>
            <Slide appear={false} in={!trigger} direction="down"{...props}>
                <AppBar>
                    <LazyHydrate on="mouseenter" >
                        <Toolbar>
                            <Box display={{ xs: 'block', md: 'none' }}>
                                <IconButton
                                    aria-label="menu"
                                    onClick={toggleDrawer(true)}
                                    sx={{ color: 'white' }}
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

                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                <Link href="/" sx={{ color: 'white' }}>
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
                        </Toolbar>
                    </LazyHydrate>
                </AppBar>
            </Slide>

            <Drawer
                anchor="left"
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                sx={{ width: '10em' }}
            >
                <List onClick={toggleDrawer(false)} sx={{ width: 250 }}>
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

                <List onClick={toggleDrawer(false)}>
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
            </Drawer>
        </>
    );
}