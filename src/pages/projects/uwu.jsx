/* eslint-disable semi */
import { Alert, AlertTitle, TextField, Typography } from '@material-ui/core';
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

            <Alert severity="error">
                <AlertTitle>{uwu('WARNING')} </AlertTitle>
                {uwu('Disclaimer: any loss of braincells is not my problem, please leave the page now if you will lose braincells to this')}

                <Typography variant="subtitle2">
                    Disclaimer: Any loss of braincells is not my problem, please leave the page now if you will lose braincells to this
                </Typography>
            </Alert>

            <TextField
                id="uwu-expression"
                color="secondary"
                onChange={handleChange}
                label={uwu('I regret this')}
                variant="outlined" />

            <Typography>
                {expression}
            </Typography>
        </>
    );

    // please save me
    function uwu(text) {
        if (typeof window === 'undefined') return text
        const letters = "abcdefghijklmnopqrstuvwxyz";

        text = text.split(' ')
        // s-s-stammaeww~
        for (const pos in text) {
            if (text[pos].length >= 2) {
                const firstChar = text[pos].charAt(0);
                if (letters.includes(firstChar.toLowerCase()) && Math.random() > 0.9) text[pos] = firstChar.charAt(0) + '-' + text[pos]
            }
        }
        text = text.join(' ')

        text = text.replace(". ", () => {
            let ending = ""

            if (Math.random() > 0.9) ending += ' owo'
            else if (Math.random() > 0.5) ending += ' uwu'

            if (Math.random() > 0.7) ending += '~'
            if (Math.random() > 0.9) ending += '!'
            else ending += "."

            return ending + " "
        })

        text = owofy(text, owofy(text, owofy(text, 'owo'), 'uwu'), 'ovo')
        text = text.replace(/ t/g, ' tw')

        return text
    }
}