import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import Heading from 'components/Heading';
import Info from 'components/Info';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function ComputerScience() {
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

            <Typography>
                Todo
            </Typography>
        </>
    );
}
