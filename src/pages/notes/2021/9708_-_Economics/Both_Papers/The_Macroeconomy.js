import Info from 'components/Info';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function Page() {
    return (
        <>
            <Subheading>
                Aggregate Demand and Aggregate
                Supply analysis
            </Subheading>

            <Info>
                Aggregate demand: Total demand for an economy at a given price level over time
                AD = C + I + G
                C: Consumption
                I: Investment (Firms purchasing capital goods)
                G: Government spending (Roads, Housing etc)
            </Info>
        </>
    );
}
