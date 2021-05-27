import { List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import Heading from 'components/Heading';
import Info from 'components/Info';
import Subheading from 'components/Subheading';
import * as React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

export default function Page() {
    const data = [
        { uv: 1, amt: 0 },
        { uv: 3, amt: 25 },
        { uv: 1, amt: 50 },
        { uv: 3, amt: 75 },
        { uv: 1, amt: 100 },
        { uv: 3, amt: 125 }
    ];

    return (
        <>
            <Heading>
                Most modern communication techniques use waves
            </Heading>

            <Subheading>
                Modulation
            </Subheading>

            <Typography>
                There are two types of modulation:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText>
                        A.M: Amplitude  modulation
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText>
                        F.M: Frequency  modulation
                    </ListItemText>
                </ListItem>
            </List>

            <Typography>
                Both types of modulation uses a "Carrier Wave"
            </Typography>

            <Info title="Definition">
                Carrier wave is a high frequency Electromagnetic wave modulated in either frequency or amplitude to transfer a signal
            </Info>

            <Subheading>
                Amplitude Modulation
            </Subheading>

            <Typography>
                Todo
            </Typography>

            <Subheading>
                Frequency Modulation
            </Subheading>

            <LineChart width={350} height={400} data={data}>
                <XAxis />
                <YAxis />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>

            <Typography>
                Todo
            </Typography>

            <Info title="Definition">
                In amplitude modulation (AM), the carrier wave has constant frequency. The amplitude of the carrier wave is made to vary. These variations are in sync with the displacement of the information signal
            </Info>

            <Info title="Definition">
                In frequency modulation (FM), the amplitude of the carrier wave remains constant. The frequency of the carrier wave is made to very in sync with the displacement of this information signal
            </Info>

            <Info title="Definition">
                The bandwidth is the range of frequency occupied amplitude modulated waveform
            </Info>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Communication Type</TableCell>
                            <TableCell>Frequency Range</TableCell>
                            <TableCell>Wavelength in air</TableCell>
                            <TableCell>Frequency Band</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>LW Radio</TableCell>
                            <TableCell>30 KHz - 300 Khz</TableCell>
                            <TableCell>10km - 1km</TableCell>
                            <TableCell>Low freq (LF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>MW Radio</TableCell>
                            <TableCell>300KHz - 3 MHz</TableCell>
                            <TableCell>1km - 100m</TableCell>
                            <TableCell>Medium freq (MF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Short-Wave (SW) radio</TableCell>
                            <TableCell>3 MHz - 30MHz</TableCell>
                            <TableCell>100m - 1m</TableCell>
                            <TableCell>High freq (HF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>FM Radio</TableCell>
                            <TableCell>30 MHz - 300 MHz</TableCell>
                            <TableCell>10m - 1m</TableCell>
                            <TableCell>Very high freq (VHF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>TV Broadcasting and Phones</TableCell>
                            <TableCell>300MHz - 3GHz</TableCell>
                            <TableCell>1m - 10cm</TableCell>
                            <TableCell>Ultra-high Freq (UHF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Microwave link</TableCell>
                            <TableCell>3 GHz - 30 GHz</TableCell>
                            <TableCell>10cm - 1cm</TableCell>
                            <TableCell>Super-high freq (SHF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Satellite link</TableCell>
                            <TableCell>30 GHz - 300 GHz</TableCell>
                            <TableCell>1cm - 1mm</TableCell>
                            <TableCell>Extra-high freq (EHF)</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>


            <Subheading>
                Frequency Modulation
            </Subheading>

            <Typography>
                Signal has same variation as the data and is continuously variable. When an analog signal is transmitted over a long distance it will be attenuated and pickup background noise.
            </Typography>

            <Typography>
                For the signal to continue to travel, it must be periodically amplified by a repeater, however this also amplifies any distortion/noise, negatively affecting the signal
            </Typography>

            <Subheading>
                Frequency Modulation
            </Subheading>

            <Typography>
                Digital Signals consist of highs and lows with no intermediate value.
                Because of this, even if the signal becomes noisy during transit, amplifiers in the middle are able to recreate the exact waveform and remove the data

            </Typography>

        </>
    );
}
