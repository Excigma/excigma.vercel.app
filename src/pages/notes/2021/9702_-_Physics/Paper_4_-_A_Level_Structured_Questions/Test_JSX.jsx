import * as React from 'react';
import { Line, LineChart } from 'recharts';

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
        </>
    );
}