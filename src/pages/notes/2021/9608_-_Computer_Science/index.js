import { Stack, Typography } from '@material-ui/core';
import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import vb from 'react-syntax-highlighter/dist/cjs/languages/prism/visual-basic';
import codeDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import codeLight from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';

SyntaxHighlighter.registerLanguage('visual-basic', vb);

// thisis so bad
// ehlp
export default function ErrorPage() {
    const OJYJYOJYO = `
Function Main()
    Console.Writeline("L@:@:@:@::@") 'bruh'
End Function

Function JYJOYJY(ByVal dskhjfkjdsafi As Integer) As String
    Dim sdkflasdf = {}
    ' :@:@:@:
    Call bruh()
    return bruh ' not even valid joy
End Function
    `.trim();
    return (
        <Stack spacing={3}>
            <Typography variant="h2" fontWeight="fontWeightMedium">
                oMG pleASE Fix my printer i know you've leanrt dis
            </Typography>

            <Typography fontWeight="fontWeightMedium">
                test test test
            </Typography>


            <SyntaxHighlighter language="visual-basic" style={codeDark}>
                {OJYJYOJYO}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="visual-basic" style={codeLight}>
                {OJYJYOJYO}
            </SyntaxHighlighter>
        </Stack>
    );
}
