import { Typography } from '@material-ui/core';
import Information from 'components/Information';
import Li from 'components/Li';
import Subheading from 'components/Subheading';
import Ul from 'components/Ul';
import * as React from 'react';

export default function Page() {
    return (
        <>
            <Subheading showJump>
                Aggregate Demand
            </Subheading>

            <Information title="Aggregate demand">
                Total demand for an economy at a given price level over time
            </Information>

            <Typography>
                AD = C + I + G + X - M
            </Typography>

            <Ul>
                <Li>C: Consumption</Li>
                <Li>I: Investment (Firms purchasing capital goods)</Li>
                <Li>G: Government spending (Roads, Housing etc)</Li>
                <Li>X: Exports (exports to elsewhere, tourism)</Li>
                <Li>M: Imports</Li>
            </Ul>

            <Typography>
                The largest component of aggregate demand is the spending of money on goods and services, also known as consumption. The most influential factor that may cause a change in consumer expenditure is probably a change in income.
            </Typography>
            <Ul>
                <Li>C + I = Private sector</Li>
                <Li>G = Public sector</Li>
                <Li>X + M = Foreign / International sector</Li>
            </Ul>

            <Subheading showJump>
                Why is the AD curve downward sloping?
            </Subheading>

            <Typography>
                as  Price level increases...
            </Typography>

            <Ul>
                <Li>Real income decrease</Li>
                <Li>Wealth effect, inflation</Li>
                <Li>Substitution of domestic goods away from international goods</Li>
            </Ul>

            <Typography>
                TODO: Add graph
            </Typography>

            <Subheading showJump>
                Aggregate Supply analysis
            </Subheading>


        </>
    );
}
