import { Grid, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import Blockquote from 'components/Blockquote.js';
import Link from 'components/Link.js';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function PageContent() {
    return (
        <Stack>
            <Subheading>
                Welcome here.
            </Subheading>

            <Subheading>
                A gallery of Excigma's projects, notes and other things he tinkers with.
            </Subheading>

            <Typography>
                It's most likely you wanna <Link href="/notes">go to my notes</Link>
            </Typography>

            <Grid container>
                <Grid item xs={12} md={6}>
                    <Subheading>
                        About
                    </Subheading>

                    <Typography>
                        This is a webpage where I will write my notes and put other thingos that I make here. I need a rounded favicon bruh.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Subheading>
                        When + Why
                    </Subheading>

                    <Typography>
                        Whilst this really did start as a coding challenge, and also a project in the holidays of 2021 before the mid year exams which then became the group project for Computer Science, it become clear that this could be useful as a study tool when exams started.
                    </Typography>

                    <Typography>
                        I decided to continue to project and expand it to also include notes, which I usually lack motivation to write. This site will force me to write notes to a standard that I am willing to share with others
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Subheading>
                        Unless statistics no one cares about
                    </Subheading>

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
                    <Subheading>
                        What other people have said to/about me
                    </Subheading>

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

                    <Blockquote>
                        es--tma using the Facebook theme
                    </Blockquote>
                </Grid>
            </Grid>

            <Subheading>
                Cool programs, libraries and services used to make this website
            </Subheading>

            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell><Link href="https://vercel.com">Vercel</Link> + <Link href="https://github.com">Github</Link></TableCell>
                            <TableCell>Used to host this webpage in 2 minutes or less - as easy as <code>git push origin master</code></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Link href="https://nodejs.org">Node.js</Link></TableCell>
                            <TableCell>Used to write all the scripts that powers this site and more. Both of the former have simple syntax and allowed me to <strike>waste my holidays</strike> write this page in little time. The latter was a pain, and still is a pain.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Link href="https://nextjs.com">Next.js</Link> + <Link href="https://reactjs.com">React</Link></TableCell>
                            <TableCell>Speedy NodeJS server backend and hybrid static and server side rendering engine, used to host this webpage</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Link href="https://material-ui.com">Material-UI</Link></TableCell>
                            <TableCell>All of the eye candy on this webpage is thanks to them</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Link href="https://code.visualstudio.com">Visual Studio Code</Link></TableCell>
                            <TableCell>IDE and Code editor used to program the Backend and Frontend of the webpage</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><Link href="https://www.figma.com">Figma</Link></TableCell>
                            <TableCell>Used by <Link href="https://github.com/diced">@dicedtomato</Link> to recreate my profile picture as a SVG</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
}
