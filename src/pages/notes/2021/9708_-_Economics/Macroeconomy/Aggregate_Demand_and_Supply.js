import { Typography } from '@material-ui/core';
import Information from 'components/Information';
import Li from 'components/Li';
import Subheading from 'components/Subheading';
import Ul from 'components/Ul';
import * as React from 'react';

export default function Page() {
    return (
        <>
            <Subheading>
                Aggregate Demand and Aggregate
                Supply analysis
            </Subheading>

            <Information>
                Aggregate demand: Total demand for an economy at a given price level over time
                AD = C + I + G + X - M
                C: Consumption
                I: Investment (Firms purchasing capital goods)
                G: Government spending (Roads, Housing etc)
                X: Exports (exports to elsewhere, tourism)
                M: Imports
            </Information>

            <Typography>
                There are two types of modulation:
            </Typography>

            <Ul>
                <Li>
                    A.M: Amplitude  modulation
                </Li>
                <Li>
                    F.M: Frequency  modulation
                </Li>
            </Ul>


            <Typography>
                C + I = Private sector
                G = Public sector
                X + M = Foreign / International sector
            </Typography>

            <Typography>
                Why is the AD curve downward sloping?
                Price level increase
                - Real income decrease
                - Wealth effect, inflation
                - Substitution of domestic goods away from international goods
            </Typography>
        </>
    );
}
