import { Alert, AlertTitle, Button, Typography } from '@material-ui/core';
import Codeblock from 'components/Codeblock';
import DirectoryList from 'components/DirectoryList';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import * as React from 'react';
import getChildren from 'utils/getChildren';



export default function Page({ directoryTree }) {
    return (
        <>
            <Subheading>
                oMG pleASE Fix my prInter i know you've goto school to leanrt dis
            </Subheading>

            <Alert severity="error">
                <AlertTitle>Warning</AlertTitle>
                This is pretty much me testing stuff. Just pushed early while things are not done to show people
            </Alert>

            <Typography>
                bruh what is this button
            </Typography>

            <Button variant="contained" href="https://www.cambridgeinternational.org/Images/502960-2021-syllabus.pdf" component={Link} style={{ color: 'white' }}>Syllabus</Button>

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

Function lorem_ipsum(ByVal sit_amet As Integer) As String
    Dim Test = {}
    ' :@:@:@:
    Call Other_function()
    Return bruh ' Not even defined ¯\\_(ツ)_/¯
End Function
                `}
            </Codeblock>

            <DirectoryList directoryTree={directoryTree} />
        </>
    );
}


export async function getStaticProps() {
    const directoryTree = await getChildren(__filename);

    return { props: { directoryTree } };
}