import { Stack, Typography } from '@material-ui/core';
import React from 'react';
import Codeblock from 'components/Codeblock';
// thisis so bad
// ehlp
export default function ComputerScience() {
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

            <Codeblock language="visual-basic">
                {OJYJYOJYO}
            </Codeblock>
        </Stack>
    );
}
