import React from 'react';

import StorageIcon from '@material-ui/icons/Storage';
import WarningIcon from '@material-ui/icons/Warning';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

import HelpIcon from '@material-ui/icons/Help';
import { Box } from '@material-ui/core';
import Link from 'components/Link.js';
import { Grid, Typography,  Table, TableBody, TableCell, TableContainer,  TableRow } from '@material-ui/core';
import Blockquote from 'components/Blockquote.js';


export default function Home() {    
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h2" gutterBottom>
                        <Box fontWeight="fontWeightMedium">
                           Welcome here.
                        </Box>
                    </Typography>
               
                    <Typography variant="h5" component="h3" gutterBottom>
                        <StorageIcon fontSize="small" /> A storage of Excigma's class notes and some other small projects.
                    </Typography>
                     
                    <Typography>
                        It's most likely you wanna <Link href="/notes">go to my notes</Link>
                    </Typography>
                </Grid>
                    
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">
                        <HelpIcon fontSize="small" /> About
                    </Typography>

                    <Typography>
                            This is a website where I will write my notes and put other thingos that I will make here.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">
                        <FormatListBulletedIcon fontSize="small" /> Subjects with Notes
                    </Typography>

                    <Typography>
                            I'm too lazy for now. :@:@:@:@!
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">
                        <HelpIcon fontSize="small" /> When + Why
                    </Typography>

                    <Typography>
                            Whilst this really did start as a coding challenge, and also a project in the holidays of 2021 before the mid year exams which then became the group project for Computer Science, it become clear that this could be useful as a study tool when exams started.
                    </Typography>

                    <Typography>
                            I decided to continue to project and expand it to also include notes, which I usually lack motivation to write. This site will force me to write notes to a standard that I am willing to share with others
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">
                        <ChatBubbleIcon fontSize="small" /> Unless statistics no one cares about
                    </Typography>

                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Time spent writing and running the code</TableCell>
                                    <TableCell>Over 250 hours</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Number of GOTOs in the code</TableCell>
                                    <TableCell>Absolutely zero.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Brain-cells lost making this</TableCell>
                                    <TableCell>A lot</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                    
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">
                        <ChatBubbleIcon fontSize="small" /> "Testimonials" (Maybe)
                    </Typography>

                    <Blockquote>
                            You're gonna waste 100 hours to write a stupid script instead of doing it yourself in less time
                    </Blockquote>

                    <Blockquote>
                            Get a life lol
                    </Blockquote>

                    <Blockquote>
                            Have a sleep and get back to it somewhat not dead in the morning
                    </Blockquote>
                        
                    <Blockquote>
                            You aren't making yourself look less insane btw
                    </Blockquote>
                </Grid>

                <Grid item xs={12}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell><Link href="https://vercel.com">Vercel</Link> and <Link href="https://github.com">Github</Link></TableCell>
                                    <TableCell>Used to host this website in 2 minutes or less - as easy as <code>git push origin master</code></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://nodejs.org">Node.js</Link></TableCell>
                                    <TableCell>Used to write all the scripts that powers this site and more. Both of the former have simple syntax and allowed me to <strike>waste my holidays</strike> write this page in little time. The latter was a pain, and still is a pain.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://nextjs.com">Next.js</Link>, and <Link href="https://reactjs.com">React</Link></TableCell>
                                    <TableCell>Speedy NodeJS server backend and hybrid static and server side rendering engine, used to host this website</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://material-ui.com">Material-UI</Link></TableCell>
                                    <TableCell>All of the eye candy on this website is thanks to them</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://code.visualstudio.com">Visual Studio Code</Link></TableCell>
                                    <TableCell>IDE and Code editor used to program the Backend and Frontend of the website</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://www.figma.com">Figma</Link></TableCell>
                                    <TableCell>Used by <Link src="https://github.com/Diced">@dicedtomato</Link> to recreate my profile picture as a SVG</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
}
