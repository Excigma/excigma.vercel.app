import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Blockquote from 'components/Blockquote';
import Heading from 'components/Heading';
import LineChart from 'components/LineChart';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import React, { memo } from 'react';

const components = {
    p: Typography,
    h1: Heading,
    h2: (() => {
        const H2 = props => <Subheading showJump {...props} />;
        return memo(H2);
    })(),
    h3: (() => {
        const H3 = props => <Typography {...props} component="p" variant="h3" />;
        return memo(H3);
    })(),
    h4: (() => {
        const H4 = props => <Typography {...props} component="p" variant="h4" />;
        return memo(H4);
    })(),
    h5: (() => {
        const H5 = props => <Typography {...props} component="p" variant="h5" />;
        return memo(H5);
    })(),
    h6: (() => {
        const H6 = props => <Typography {...props} component="p" variant="h6" />;
        return memo(H6);
    })(),
    blockquote: (() => {
        return memo(Blockquote);
    })(),
    ul: (() => {
        const Ul = props => <Typography {...props} component="ul" />;
        return memo(Ul);
    })(),
    ol: (() => {
        const Ol = props => <Typography {...props} component="ol" />;
        return memo(Ol);
    })(),
    li: (() => {
        const Li = props => <Typography {...props} component="li" />;
        return memo(Li);
    })(),
    // table: (() => {
    //     const Table = props => <MuiTable {...props} />;
    //     return memo(Table);
    // })(),
    // tr: (() => {
    //     const Tr = props => <TableRow {...props} />;
    //     return memo(Tr);
    // })(),
    // td: (() => {
    //     const Td = ({ align, ...props }) => (
    //         <TableCell align={align || undefined} {...props} />
    //     );
    //     return memo(Td);
    // })(),
    // tbody: (() => {
    //     const TBody = props => <TableBody {...props} />;
    //     return memo(TBody);
    // })(),
    // th: (() => {
    //     const Th = ({ align, ...props }) => (
    //         <TableCell align={align || undefined} {...props} />
    //     );
    //     return memo(Th);
    // })(),
    // thead: (() => {
    //     const THead = props => <TableHead {...props} />;
    //     return memo(THead);
    // })(),
    hr: Divider,
    a: (() => {
        const a = props => <Link {...props} />;
        return memo(a);
    })(),
    wrapper: (() => {
        const Wrapper = props => <div {...props} className="markdown-body" />;
        return memo(Wrapper);
    })(),
    LineChart: (() => {
        const chart = props => <LineChart {...props} />;
        return memo(chart);
    })(),
};

export default components;