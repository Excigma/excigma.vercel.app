import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Blockquote from 'components/Blockquote';
import Codeblock from 'components/Codeblock';
import Heading from 'components/Heading';
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
    table: (() => {
        const Table = props => <MuiTable {...props} />;
        return memo(Table);
    })(),
    tr: (() => {
        const Tr = props => <TableRow {...props} />;
        return memo(Tr);
    })(),
    td: (() => {
        const Td = ({ align, ...props }) => (
            <TableCell align={align || undefined} {...props} />
        );
        return memo(Td);
    })(),
    tbody: (() => {
        const TBody = props => <TableBody {...props} />;
        return memo(TBody);
    })(),
    th: (() => {
        const Th = ({ align, ...props }) => (
            <TableCell align={align || undefined} {...props} />
        );
        return memo(Th);
    })(),
    thead: (() => {
        const THead = props => <TableHead {...props} />;
        return memo(THead);
    })(),
    code: (() => {
        const CB = props => <Codeblock {...props} />;
        return memo(CB);
    })(),
    hr: Divider,
    input: (() => {
        const Input = props => {
            const { type } = props;
            if (type === 'checkbox') {
                return <Checkbox {...props} disabled={false} readOnly={true} />;
            }
            return <input {...props} />;
        };
        return memo(Input);
    })(),
    wrapper: (() => {
        const Wrapper = props => <div {...props} className="markdown-body" />;
        return memo(Wrapper);
    })(),
    a: (() => {
        const a = props => <Link {...props} />;
        return memo(a);
    })(),
};

export default components;