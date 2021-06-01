import { TextField, Typography } from '@material-ui/core';
import Link from 'components/Link';
import Maths from 'components/Maths';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function Page() {
    const [expression, setExpression] = React.useState('\\KaTeX \\text{ is cool}');
    const [error, setError] = React.useState(false);

    return (
        <>
            <Subheading>
                Testing KaTeX expressions in real time or something, idk
            </Subheading>

            <Typography>
                Mainly for my own use while I was writing physics notes lol
            </Typography>

            <Typography>
                Powered by <Link href="https://katex.org/" rel="noreferrer" target="_blank">KaTeX</Link>, the syntax for that is <Link href="https://katex.org/docs/supported.html" rel="noreferrer" target="_blank">here</Link>
            </Typography>

            <TextField
                color="secondary"
                onChange={(event) => setExpression(event.target.value)}
                label="KaTeX Expression"
                variant="outlined"
                error={error} />

            <Maths onEvaluate={(isError) => setError(isError)}>
                {expression}
            </Maths>
        </>
    );
}
