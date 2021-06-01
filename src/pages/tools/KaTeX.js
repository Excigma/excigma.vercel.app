import { TextField } from '@material-ui/core';
import Maths from 'components/Maths';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function Page() {
    const [expression, setExpression] = React.useState('y = mx + c');
    const [error, setError] = React.useState(false);

    return (
        <>
            <Subheading>
                Testing KaTeX expressions in real time or something, idk
            </Subheading>

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
