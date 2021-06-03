import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import Heading from 'components/Heading';
import Information from 'components/Information';
import Li from 'components/Li';
import Subheading from 'components/Subheading';
import TeX from 'components/TeX';
import Ul from 'components/Ul';
import * as React from 'react';
import { Legend, Line, LineChart } from 'recharts';

export default function Page() {
    return (
        <>
            <Heading>
                Most modern communication techniques use waves
            </Heading>

            <Subheading showJump>
                Modulation
            </Subheading>

            <Ul subheader={<Typography>
                There are two types of modulation:
            </Typography>}>
                <Li>
                    A.M: Amplitude  modulation
                </Li>
                <Li>
                    F.M: Frequency  modulation
                </Li>
            </Ul>

            <Typography>
                Both types of modulation uses a "Carrier Wave"
            </Typography>

            <Information title="Definition">
                Carrier wave is a high frequency Electromagnetic wave modulated in either frequency or amplitude to transfer a signal
            </Information>

            <Subheading showJump>
                Amplitude Modulation
            </Subheading>

            <Typography>
                In amplitude modulation the frequency of the modulated wave is constant, and the amplitude of the modulated wave varies proportionally to and in phase with the signal
            </Typography>

            <Typography>
                Carrier Wave
            </Typography>

            <LineChart width={350} height={100} data={[
                { 'Carrier wave': 0 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 0 },
            ]}>
                <Line type="monotone" dataKey="Carrier wave" isAnimationActive={false} stroke="#ff0066" strokeWidth={3} dot={null} />
            </LineChart>

            <Typography>
                + Signal wave
            </Typography>

            <LineChart width={350} height={100} data={[
                { 'Signal wave': -1 },
                { 'Signal wave': null },
                { 'Signal wave': null },
                { 'Signal wave': 1 },
                { 'Signal wave': null },
                { 'Signal wave': null },
                { 'Signal wave': -1 },
                { 'Signal wave': null },
                { 'Signal wave': null },
                { 'Signal wave': 1 },
                { 'Signal wave': null },
                { 'Signal wave': null },
                { 'Signal wave': -1 },
            ]}>
                <Line connectNulls type="monotone" dataKey="Signal wave" isAnimationActive={false} strokeWidth={3} stroke="#d0b9e9" dot={null} />
            </LineChart>

            <Typography>
                = Amplitude modulated wave
            </Typography>

            <LineChart width={350} height={200} data={[
                { 'Amplitude modulated wave': 0, 'Signal wave': 0, 'Inverted signal wave': 0 },
                { 'Amplitude modulated wave': 0.25, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': -0.5, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': 0.75, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': -1, 'Signal wave': 1, 'Inverted signal wave': -1 },
                { 'Amplitude modulated wave': 0.75, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': -0.5, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': 0.25, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': 0, 'Signal wave': 0, 'Inverted signal wave': 0 },
                { 'Amplitude modulated wave': -0.25, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': 0.5, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': -0.75, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': 1, 'Signal wave': 1, 'Inverted signal wave': -1 },
                { 'Amplitude modulated wave': -0.75, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': 0.5, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': -0.25, 'Signal wave': null, 'Inverted signal wave': null },
                { 'Amplitude modulated wave': 0, 'Signal wave': 0, 'Inverted signal wave': 0 },
            ]}>
                <Legend />
                <Line type="monotone" dataKey="Amplitude modulated wave" isAnimationActive={false} stroke="#ff0066" strokeWidth={3} dot={null} />
                <Line connectNulls type="monotone" dataKey="Signal wave" isAnimationActive={false} stroke="#d0b9e9" strokeWidth={3} strokeDasharray="2 20" dot={null} />
                <Line connectNulls type="monotone" dataKey="Inverted signal wave" isAnimationActive={false} stroke="#d0b9e9" strokeWidth={3} strokeDasharray="2 20" dot={null} />
            </LineChart>

            <Subheading showJump>
                Frequency Modulation
            </Subheading>

            <Typography title="Definition">
                In frequency modulation (FM), the amplitude of the carrier wave remains constant. The frequency of the carrier wave is made to vary in sync with the displacement of this information signal
            </Typography>


            <Typography>
                Carrier Wave
            </Typography>

            <LineChart width={350} height={100} data={[
                { 'Carrier wave': 0 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 1 },
                { 'Carrier wave': -1 },
                { 'Carrier wave': 0 },
            ]}>
                <Line type="monotone" dataKey="Carrier wave" isAnimationActive={false} stroke="#ff0066" strokeWidth={3} dot={null} />
            </LineChart>

            <Typography>
                + Signal wave
            </Typography>

            <LineChart width={350} height={100} data={[
                { 'Signal wave': -1 },
                { 'Signal wave': null },
                { 'Signal wave': null },
                { 'Signal wave': 1 },
                { 'Signal wave': null },
                { 'Signal wave': null },
                { 'Signal wave': -1 },
                { 'Signal wave': null },
                { 'Signal wave': null },
                { 'Signal wave': 1 },
                { 'Signal wave': null },
                { 'Signal wave': null },
                { 'Signal wave': -1 },
            ]}>
                <Line connectNulls type="monotone" dataKey="Signal wave" isAnimationActive={false} strokeWidth={3} stroke="#d0b9e9" dot={null} />
            </LineChart>


            <Typography>
                = Frequency modulated wave
            </Typography>

            <LineChart width={350} height={150} data={[
                { 'Frequency modulated wave': 0 },
                { 'Frequency modulated wave': 1 },
                { 'Frequency modulated wave': null },
                { 'Frequency modulated wave': null },
                { 'Frequency modulated wave': -1 },
                { 'Frequency modulated wave': 1 },
                { 'Frequency modulated wave': -1 },
                { 'Frequency modulated wave': 1 },
                { 'Frequency modulated wave': -1 },
                { 'Frequency modulated wave': 1 },
                { 'Frequency modulated wave': -1 },
                { 'Frequency modulated wave': 1 },
                { 'Frequency modulated wave': null },
                { 'Frequency modulated wave': null },
                { 'Frequency modulated wave': -1 },
                { 'Frequency modulated wave': 1 },
                { 'Frequency modulated wave': -1 },
                { 'Frequency modulated wave': 1 },
                { 'Frequency modulated wave': -1 },
                { 'Frequency modulated wave': 1 },
                { 'Frequency modulated wave': -1 },
                { 'Frequency modulated wave': 1 },
                { 'Frequency modulated wave': null },
                { 'Frequency modulated wave': null },
                { 'Frequency modulated wave': -1 },
                { 'Frequency modulated wave': 0 },
            ]}>
                <Legend />
                <Line connectNulls type="monotone" dataKey="Frequency modulated wave" stroke="#ff0066" isAnimationActive={false} strokeWidth={3} dot={null} />
            </LineChart>

            <Subheading showJump>
                Sidebands and bandwidth
            </Subheading>

            <Typography>
                TODO
            </Typography>

            <Subheading showJump>
                TODO: Advantages and disadvantages to AM and FM
            </Subheading>

            <Information title="Definition">
                The bandwidth is the range of frequency occupied amplitude modulated waveform
            </Information>

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
                            <TableCell>Low frequency (LF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>MW Radio</TableCell>
                            <TableCell>300KHz - 3 MHz</TableCell>
                            <TableCell>1km - 100m</TableCell>
                            <TableCell>Medium frequency (MF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Short-Wave (SW) radio</TableCell>
                            <TableCell>3 MHz - 30MHz</TableCell>
                            <TableCell>100m - 1m</TableCell>
                            <TableCell>High frequency (HF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>FM Radio</TableCell>
                            <TableCell>30 MHz - 300 MHz</TableCell>
                            <TableCell>10m - 1m</TableCell>
                            <TableCell>Very high frequency (VHF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>TV Broadcasting and Phones</TableCell>
                            <TableCell>300MHz - 3GHz</TableCell>
                            <TableCell>1m - 10cm</TableCell>
                            <TableCell>Ultra-high frequency (UHF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Microwave link</TableCell>
                            <TableCell>3 GHz - 30 GHz</TableCell>
                            <TableCell>10cm - 1cm</TableCell>
                            <TableCell>Super-high frequency (SHF)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Satellite link</TableCell>
                            <TableCell>30 GHz - 300 GHz</TableCell>
                            <TableCell>1cm - 1mm</TableCell>
                            <TableCell>Extra-high frequency (EHF)</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Information title="Definition">
                Noise is random unwanted signal that interferes with and distorts a transmitted signal
            </Information>

            <Information title="Definition">
                Attenuation (dB) is the progressive loss in power of the signal with time as it travels along a transmission path
            </Information>

            <Subheading showJump>
                Analog Signals
            </Subheading>

            <Typography>
                Signal has same variation as the data and is continuously variable. When an analog signal is transmitted over a long distance it will be attenuated and pickup background noise.
            </Typography>

            <Typography>
                For the signal to continue to travel, it must be periodically amplified by a repeater, however this also amplifies any distortion/noise, negatively affecting the signal
            </Typography>

            <Subheading showJump>
                Digital Signals
            </Subheading>

            <LineChart width={350} height={100} data={[
                { 'Signal wave': 0 }, { 'Signal wave': 1 },
                { 'Signal wave': 1 }, { 'Signal wave': 0 },
                { 'Signal wave': 1 }, { 'Signal wave': 0 },
                { 'Signal wave': 1 }, { 'Signal wave': 0 },
                { 'Signal wave': 0 }, { 'Signal wave': 1 },
                { 'Signal wave': 0 }, { 'Signal wave': 1 },
                { 'Signal wave': 0 }, { 'Signal wave': 0 },
                { 'Signal wave': 1 }, { 'Signal wave': 0 },
                { 'Signal wave': 0 }, { 'Signal wave': 1 },
                { 'Signal wave': 0 }, { 'Signal wave': 1 },
                { 'Signal wave': 0 }, { 'Signal wave': 0 },
            ]}>
                <Line connectNulls type="step" dataKey="Signal wave" isAnimationActive={false} strokeWidth={3} stroke="#d0b9e9" dot={null} />
            </LineChart>


            <Typography>
                Digital Signals consist of highs and lows (1's and 0's - discrete) with no intermediate value.
                Because of this, even if the signal becomes noisy during transit, amplifiers in the middle are able to recreate the exact original waveform and remove the data
            </Typography>

            <Typography>
                Advantages of digital signals
            </Typography>

            <Ul>
                <Li>
                    Signal can be regenerated and noise eliminated
                </Li>
                <Li>
                    Extra data can be added to check for errors
                </Li>
                <Li>
                    Multiplexing: Digital from a large number of different sources can share the same path
                </Li>
                <Li>
                    Digital circuit are more reliable/cheaper to produce
                </Li>
                <Li>
                    Data can be encrypted for security
                </Li>
            </Ul>

            <Subheading showJump>
                Binary number representation
            </Subheading>

            <Typography>
                Binary is a base-2 scale
            </Typography>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Denary (Base 10)</TableCell>
                            <TableCell>Binary (Base 2)</TableCell>
                            <TableCell>Hexadecimal (Base 16)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>0001</TableCell>
                            <TableCell>01</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>0010</TableCell>
                            <TableCell>02</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>0011</TableCell>
                            <TableCell>03</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>4</TableCell>
                            <TableCell>0100</TableCell>
                            <TableCell>04</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Subheading showJump>
                Converting Analogue to digital
            </Subheading>

            <Typography>
                In digital transmission, the analog signal (e.g voice) is converted to digital using an ADC (Analog to digital converter).
                When received, the signal can be regenerated into it's analog form using an DAC (Digital to analog converter)
            </Typography>

            <Information title="Definition">
                Sampling - Take analogue signal and "sample" it's voltage at regular intervals called "sampling rate"
            </Information>

            <Typography>
                e.g. if sampling rate is 10 Hz, then 10 samples per second are taken and interval between samples is 0.1s
            </Typography>

            <Typography>
                The maximum sampling rate required is only twice the highest frequency present in the signal.
            </Typography>

            <Typography>
                The human ear can detect 20Hz - 20KHz. Max sampling required for ADC (Analog to digital convert) is 40KHz (<TeX inline>20,000 * 2 = 40,000</TeX>)
            </Typography>

            <Typography>
                These sample (instantaneous voltages) are converted into a binary number representing their value. How accurate this depends on depends on the number of bits.
            </Typography>

            <Information severity="error" title="ADCs can ONLY 'round' down">
                Just drop the decimal completely. ADCs DO <b>NOT</b> ROUND UP.
            </Information>


            <Typography>
                Parallel to serial converter can be used to transmit bits one after another through a single wire, rather than having 8 wires to transmit 8 bits.
            </Typography>

            <Typography>
                When received, a serial to parallel converter can be used to convert the signal back to it's original form.
            </Typography>

            <Subheading showJump>
                Improving reproduction of the input signal
            </Subheading>

            <Typography>
                Increase sampling frequency to reduce the width of each step (space between samples)
            </Typography>

            <Typography>
                Increase number of bits per sample to allow for a more precise binary representation of the analog signal's initial voltage
            </Typography>

            <Subheading showJump>
                Channels of communications
            </Subheading>

            <Ul>
                <Li>Wire pairs</Li>
                <Li>Wire pairs</Li>
            </Ul>

            <Typography>
                Wire pairs are normally used for phone lines, the potential difference between the wires is the signal. Each wire acts as an aerial and picks up unwanted noise. attenuation is high since energy is lost as heat due to the high resistance.
            </Typography>

            <Heading>
                I need to do this later lol
            </Heading>

            <Subheading showJump>
                Attenuation
            </Subheading>

            <Typography>
                Gradual decrease in power of signal over distance
            </Typography>

            <Typography>
                Measured in decibels, value is negative as it is a loss of power
            </Typography>

            <TeX>
                {String.raw`dB = 10 * log(\frac{P_{out}}{P_{in}})`}
            </TeX>

            <TeX>
                {String.raw`dB = \text{Attenuation per unit length} * Length`}
            </TeX>

            <Subheading>
                Signal-to-noise ratio (SNR)
            </Subheading>

            <TeX>
                {String.raw`dB = 10 * log(\frac{P_{signal}}{P_{noise}})`}
            </TeX>
        </>
    );
}