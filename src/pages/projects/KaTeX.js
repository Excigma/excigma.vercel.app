import { TextField, Typography } from '@material-ui/core';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import TeX from 'components/TeX';
import * as React from 'react';

export default function PageContent() {
    const [expression, setExpression] = React.useState('\\KaTeX \\text{ is cool}');
    const handleChange = React.useCallback((event) => setExpression(event.target.value), [setExpression]);

    return (
        <>
            <Subheading>
                Testing KaTeX expressions in real time or something, idk
            </Subheading>

            <Typography>
                Mainly for my own use while I was writing physics notes lol
            </Typography>

            <Typography>
                Powered by <Link href="https://katex.org/" rel="noreferrer" target="_blank">KaTeX</Link>, <Link href="https://katex.org/docs/supported.html" rel="noreferrer" target="_blank">Supported syntax here</Link>
            </Typography>

            <TextField
                id="katex-expression"
                color="secondary"
                onChange={handleChange}
                label="KaTeX Expression"
                variant="outlined" />

            <br />

            <TeX math={expression} />
        </>
    );
}
