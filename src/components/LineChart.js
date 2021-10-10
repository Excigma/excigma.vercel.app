import { useTheme } from '@mui/styles';
import * as React from 'react';
import { Legend, Line, LineChart as ReLineChart } from 'recharts';

export default function LineChart({ data, lineProps, ...props }) {
    const { palette } = useTheme();
    const lineColors = [palette.secondary.light, palette.primary.light];
    const lines = [...new Set([].concat.apply([], data.map(point => Object.keys(point))))];

    return (
        <ReLineChart
            width={350}
            height={150}
            data={data} {...props}>

            {lines.map((dataKey, index) => {
                return <Line
                    key={index}
                    connectNulls
                    type="monotone"
                    dataKey={dataKey}
                    isAnimationActive={false}
                    strokeWidth={3}
                    stroke={lineColors[index % lineColors.length]}
                    dot={null}
                    {...lineProps}
                />;
            })}

            <Legend />
        </ReLineChart>
    );
}