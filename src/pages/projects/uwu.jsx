/* eslint-disable semi */
import { TextField, Typography } from '@material-ui/core';
import Subheading from 'components/Subheading';
import * as React from 'react';
const owofy = require('owoify-js').default;

export default function PageContent() {
    const [expression, setExpression] = React.useState(uwu('what\'s this'));
    const handleChange = React.useCallback((event) => setExpression(uwu(event.target.value)), [setExpression]);

    return (
        <>
            <Subheading>
                {uwu('the forbidden text')}
            </Subheading>

            <Typography>
                {uwu('i blame u for this, why did you have to do this to me')}
            </Typography>

            <Typography>
                {uwu('btw you should try refreshing a few times')}
            </Typography>

            <TextField
                id="uwu-expression"
                color="secondary"
                onChange={handleChange}
                label={uwu('I regret this')}
                variant="outlined" />

            <Typography >
                {expression}
            </Typography>
        </>
    );

    function uwu(text) {
        text = owofy(text, 'uvu')
        text = text
            .replace(/ t/g, ' tw')
            .split(' ')

        // s-stammaerr
        for (const pos in text) {
            if (text[pos].length >= 2) {
                if (Math.random() > 0.5) text[pos] = text[pos].charAt(0) + '-' + text[pos]
                if (Math.random() > 0.5) text[pos] = text[pos].charAt(0) + '-' + text[pos]
            }
        }

        text = text.join(' ')

        if (Math.random() > 0.6) text += '~'
        if (Math.random() > 0.7) text += '!'

        if (Math.random() > 0.9) text += ' owo'
        // eslint-disable-next-line no-dupe-else-if
        else if (Math.random() > 0.95) text += ' uwu'
        return text
    }
}