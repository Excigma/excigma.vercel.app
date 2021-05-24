import { Stack, Typography } from '@material-ui/core';
import Alert from '@material-ui/core/Alert';
import AlertTitle from '@material-ui/core/AlertTitle';
import DirectoryList from 'components/DirectoryList';
import * as React from 'react';
import getChildren from 'utils/getChildren';


export default function Page({ directoryTree }) {
    return (
        <Stack spacing={3}>
            <Typography variant="h2" fontWeight="fontWeightMedium">
                Subjects.
            </Typography>

            <Typography variant="h5" component="h3">
                This is where you'd choose a subject and get more things like notes and past papers.
            </Typography>

            <Alert severity="warning">
                <AlertTitle>Disclaimer</AlertTitle>
                These notes are all written by myself or quoted from teachers. Whilst I am trying to keep a high standard and a certain level of accuracy as I will be using these notes to study myself, but note I do not have proofreaders - there may be mistakes. If in doubt PLEASE go ask someone more qualified than me. I am not a teacher.
            </Alert>

            <Alert severity="info">
                <AlertTitle>Work in progress</AlertTitle>
                Many notes are not up to date with the things we have been taught
            </Alert>

            <DirectoryList directoryTree={directoryTree} />
        </Stack>
    );
}

export async function getStaticProps() {
    const directoryTree = await getChildren(__filename);

    return { props: { directoryTree } };
}