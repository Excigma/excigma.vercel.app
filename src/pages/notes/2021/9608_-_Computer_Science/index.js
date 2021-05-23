import { Stack, Typography } from '@material-ui/core';
import React from 'react';
import Codeblock from 'components/Codeblock';
// thisis so bad
// ehlp
export default function ComputerScience() {

    
    return (
        <Stack spacing={3}>
            <Typography variant="h2" fontWeight="fontWeightMedium">
                oMG pleASE Fix my printer i know you've leanrt dis
            </Typography>

            <Typography fontWeight="fontWeightMedium">
                This page exists to test components that will be used frequently in this subject
            </Typography>

            <Typography>
                lol why are you even here test test test.
            </Typography>

            <Codeblock language="visual-basic">
                {`
Function Main()
    Console.Writeline("L@:@:@:@::@") 'bruh
End Function

Function JYJOYJY(ByVal dskhjfkjdsafi As Integer) As String
    Dim sdkflasdf = {}
    ' :@:@:@:
    Call bruh()
    return bruh ' not even valid joy
End Function
                `}
            </Codeblock>
        </Stack>
    );
}
