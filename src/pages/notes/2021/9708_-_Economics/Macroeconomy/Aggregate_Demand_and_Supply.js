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

            <Typography>
                Investment is the spending of money by firms to buy capital goods. This is also an important factor as not only does this increase the AD in the short run, it can help increase production of goods in the long run - if say new machinery is brought. Firms are influenced by their projection of future demand, an forecast increase in demand will cause them to buy new machinery to meet it.
            </Typography>

            <Typography>
                Government expenditure or government spending is the money the government spends on goods and services to better the country by trying to provide improved infrastructure to promote growth and also by helping those in need.
            </Typography>

            <Typography>
                Imports and exports are the goods and services we provide or purchase from other countries. Firms may buy goods and services from outside the country, leading to money leaving the country. On the contrary, goods can be exported internationally, causing firms to receive a profit from international firms or consumers.
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

            <Typography>
                TODO: Add details
            </Typography>
        </>
    );
}
