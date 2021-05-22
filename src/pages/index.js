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
                        <StorageIcon fontSize="small" /> A storage of Excigma's class notes and some past paper questions - by topic.
                    </Typography>
                     
                    <Typography>
                        Most likely you wanna <Link href="/subjects">go to the subjects page</Link>
                    </Typography>
                </Grid>
                    
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">
                        <HelpIcon fontSize="small" /> About
                    </Typography>

                    <Typography>
                            This is a website where I will write my notes, and also an automated tool will sort past paper questions by topic to allow you to simply search by topic and get the mark scheme
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">
                        <FormatListBulletedIcon fontSize="small" /> Subjects
                    </Typography>

                    <Typography>
                            I'm too lazy for now. :@:@:@:@!
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">
                        <HourglassFullIcon fontSize="small" /> How it works
                    </Typography>

                    <Typography>
                           A <Link href="https://nodejs.org/en/">Node.js</Link> is used to scrap papers from <Link href="https://papacambridge.com/home/index.html">PapaCambridge</Link>, and downloaded
                    </Typography>

                    <Typography>
                        <Link href="https://github.com/microsoft/playwright">Playwright</Link> is then used to automate multiple <Link href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</Link> instances in parallel to render and parse the PDFs using  <Link href="https://github.com/mozilla/pdf.js">PDF.js</Link>
                    </Typography>

                    <Typography>
                            Javascript is injected into <Link href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</Link> instances to determine the position of text on the PDF, which is used to:                          
                    </Typography>
                    <ol>
                        <li>Locate the location of questions on the page</li>
                        <li>Using the above, to extract the text between two questions to guess the topic it is from</li>
                    </ol>
                        
                    <Typography>
                            The screenshots were cropped and saved according to the values returned from <Link href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</Link>, and as so may be inaccurate, but generally it has turned out well
                    </Typography>

                    <Typography>
                            Screenshots are grouped by topics, which is written into a database to be read from later (jk, it's just a JSON)
                    </Typography>

                    <Typography>
                            A <Link href="https://www.python.org/">Python</Link> script using <Link href="https://github.com/opencv/opencv-python">OpenCV</Link> is then used to remove unnecessary whitespace in between pages and working space in questions to make the image smaller
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h4">
                        <HelpIcon fontSize="small" /> When + Why
                    </Typography>

                    <Typography>
                            Whilst this really did start as a challenge, and also a project in the holidays of 2021 before the mid year exams which then became the group project for Computer Science, it become clear that this could be useful as a study tool when exams started.
                    </Typography>

                    <Typography>
                            I decided to continue to project and expand it to also include notes, which I usually lack motivation to write.
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
                                    <TableCell>Over 200 hours</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Images saved in total</TableCell>
                                    <TableCell>Around 1440</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Time spent screenshotting</TableCell>
                                    <TableCell>35 minutes 24 seconds</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Size of entire project on disk</TableCell>
                                    <TableCell>1.3 GiB</TableCell>
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
                            You're gonna waste 100 hours to write a stupid script to screenshot it instead of doing it yourself in less time
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
                                    <TableCell><Link href="https://papacambridge.com/home/index.html">PapaCambridge</Link> and <Link href="https://xtremepape.rs">XtremePapers</Link></TableCell>
                                    <TableCell>Providing CAIE past papers</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://railway.app">Railway</Link>, <Link href="https://vercel.com">Vercel</Link>, <Link href="https://github.com">Github</Link> and <Link href="https://www.docker.com">Docker</Link></TableCell>
                                    <TableCell>Used to host this website in 2 minutes or less - as easy as <code>git push origin master</code></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://nodejs.org">Node.js</Link>, <Link href="https://golang.org">Golang</Link>, <Link href="https://www.python.org">Python</Link> and <Link href="https://docs.microsoft.com/en-us/dotnet/visual-basic"><strike>Visual Basic</strike></Link></TableCell>
                                    <TableCell>Used to write all the scripts that powers this site and more. Both of the former have simple syntax and allowed me to <strike>waste my holidays</strike> write this page in little time. The latter was a pain, and still is a pain.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://github.com/microsoft/playwright">Playwright</Link>, <Link href="https://www.mozilla.org/en-US/firefox">Mozilla Firefox</Link> and <Link href="https://github.com/mozilla/pdf.js">PDF.js</Link></TableCell>
                                    <TableCell>Used to automate Firefox to render PDFs and detect location of text to guess the topic of questions and crop screenshots relatively decently</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://www.fastify.io">Fastify</Link>, <Link href="https://ejs.co/">EJS</Link>, <Link href="https://nextjs.com">Next.js</Link>, and <Link href="https://reactjs.com">React</Link></TableCell>
                                    <TableCell>Speedy NodeJS server backend and templating engine, used to host this website, serve the images and the PDFs</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell><Link href="https://github.com/opencv/opencv-python">OpenCV Python</Link></TableCell>
                                    <TableCell>Used to remove empty horizontal rows of white-spaces in screenshots, and compress the PNGs to reduce the file sizes massively</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://github.com/helperdiscord/petitio">Petitio</Link> and <Link href="https://github.com/cheeriojs/cheerio">Cheerio</Link></TableCell>
                                    <TableCell>Extremely fast HTTP library and a simple HTML querying library, used in NodeJS script to download and parse pages, and also to download PDFs</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://github.com/Dogfalo/materialize">Materialize.css</Link>, <Link href="https://material-ui.com">Material-UI</Link> and <Link href="https://github.com/feathericons/feather">Feather Icons</Link></TableCell>
                                    <TableCell>All of the eye candy on this website is thanks to them</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://visualstudio.microsoft.com">Visual Studio</Link> and <Link href="https://code.visualstudio.com">Visual Studio Code</Link></TableCell>
                                    <TableCell>IDE and Code editor used to program the Backend, Frontend of the website, and the Visual Basic.NET client.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Link href="https://www.figma.com">Figma</Link></TableCell>
                                    <TableCell>Used to design the icon of this website in 5 minutes or less</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
}
