import React from 'react';

import StorageIcon from '@material-ui/icons/Storage';
import WarningIcon from '@material-ui/icons/Warning';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';


import HelpIcon from '@material-ui/icons/Help';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../components/Link.js';
import { Grid,  Table, TableBody, TableCell, TableContainer,  TableRow } from '@material-ui/core';
import Blockquote from '../components/Blockquote.js';


// const columns = [
//     { field: 'statistic', headerName: 'Statistic', width: 130 },
//     { field: 'data', headerName: 'Data', width: 130 }
// ];

// const rows = [
//     {statistic: 'Time spent writing and running the code', data: 'Over 200 hours'},
//     {statistic: 'Images saved in total', data: 'Around 1440'},
//     {statistic: 'Time spent screenshotting', data: '35 minutes 24 seconds'},
//     {statistic: 'Size of entire project on disk', data: 'Around 1.7 GiB'},
//     {statistic: 'Number of GOTOs in the code', data: 'Absolutely zero.'},
//     {statistic: 'Brain-cells lost making this', data: 'A lot'}
// ];


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Home() {
    return (
        <Container>
            <Box my={10}>
                <Grid container spacing={7}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom>
                            <Box fontWeight="fontWeightMedium">
                        Welcome here.
                            </Box>
                        </Typography>
               
               
                        <Typography variant="h5" gutterBottom>
                            <StorageIcon fontSize="small" /> A storage of Excigma's class notes and some past paper questions - by topic.
                        </Typography>

                        
                        <br />
                        
                        <Typography gutterBottom>
                            <WarningIcon fontSize="small"/> Disclaimer: Some things here possibly work just well enough. Just. Please double check all information on this site is correct - even my notes. I will try to maintain a level of accuracy of the information provided here as I will use it to study myself; however this is NOT guaranteed. Please PLEASE double check.
                        </Typography>

                        <br />
                        
                        <Typography gutterBottom>
                    K, I've now read that and I wanna <Link href="/notes">go to the notes page</Link>
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            <HelpIcon fontSize="small" /> About
                        </Typography>

                        <Typography gutterBottom>
                            This is a website where I will write my notes, and also an automated tool will sort past paper questions by topic to allow you to simply search by topic and get the mark scheme
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            <FormatListBulletedIcon fontSize="small" /> Subjects
                        </Typography>

                        <Typography gutterBottom>
                            I'm too lazy for now. :@:@:@:@!
                        </Typography>
                    </Grid>

                    
                    
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            <HourglassFullIcon fontSize="small" /> How it works
                        </Typography>

                        <Typography gutterBottom>
                           A <Link href="https://nodejs.org/en/">Node.js</Link> is used to scrap papers from <Link href="https://papacambridge.com/home/index.html">PapaCambridge</Link>, and downloaded
                        </Typography>

                        <Typography gutterBottom>
                            <Link href="https://github.com/microsoft/playwright">Playwright</Link> is then used to automate multiple <Link href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</Link> instances in parallel to render and parse the PDFs using  <Link href="https://github.com/mozilla/pdf.js">PDF.js</Link>
                        </Typography>

                        <Typography>
                            Javascript is injected into <Link href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</Link> instances to determine the position of text on the PDF, which is used to:                          
                        </Typography>
                        <ol>
                            <li>Locate the location of questions on the page</li>
                            <li>Using the above, to extract the text between two questions to guess the topic it is from</li>
                        </ol>
                        
                        <Typography gutterBottom>
                            The screenshots were cropped and saved according to the values returned from <Link href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</Link>, and as so may be inaccurate, but generally it has turned out well
                        </Typography>

                        <Typography gutterBottom>
                            Screenshots are grouped by topics, which is written into a database to be read from later (jk, it's just a JSON)
                        </Typography>

                        <Typography gutterBottom>
                            A <Link href="https://www.python.org/">Python</Link> script using <Link href="https://github.com/opencv/opencv-python">OpenCV</Link> is then used to remove unnecessary whitespace in between pages and working space in questions to make the image smaller
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            <HelpIcon fontSize="small" /> When + Why
                        </Typography>

                        <Typography gutterBottom>
                            Whilst this really did start as a challenge, and also a project in the holidays of 2021 before the mid year exams which then became the group project for Computer Science, it become clear that this could be useful as a study tool when exams started.
                        </Typography>

                        <Typography gutterBottom>
                            I decided to continue to project and expand it to also include notes, which I usually lack motivation to write.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TableContainer>
                            <Table aria-label="simple table">
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
                    
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" gutterBottom>
                            <ChatBubbleIcon fontSize="small" /> "Testimonials" (Maybe)
                        </Typography>

                        <Blockquote gutterBottom>
                            You're gonna waste 100 hours to write a stupid script to screenshot it instead of doing it yourself in less time
                        </Blockquote>

                        <Blockquote gutterBottom>
                            Get a life lol
                        </Blockquote>

                        <Blockquote gutterBottom>
                            Have a sleep and get back to it somewhat not dead in the morning
                        </Blockquote>
                        
                        <Blockquote gutterBottom>
                            You aren't making yourself look less insane btw
                        </Blockquote>
                    </Grid>
                </Grid>
                
                
            </Box>
        </Container>
    );
}
