import * as React from 'react';
import { Line, LineChart } from 'recharts';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

export default function PageContent() {
    return (
        <>
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


            <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryLine
                    style={{
                        data: { stroke: '#c43a31' },
                        parent: { border: '1px solid #ccc' }
                    }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                />
            </VictoryChart>
        </>
    );
}