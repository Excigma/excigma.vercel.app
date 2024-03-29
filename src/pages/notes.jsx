import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import DirectoryList from 'components/DirectoryList';
import Subheading from 'components/Subheading';
import * as React from 'react';
import scanDirectory from 'utils/scanDirectory';


export default function PageContent({ directoryTree }) {
    return (
        <>
            <Subheading>
                This is where you'd choose a subject and get more things like notes and past papers.
            </Subheading>

            <Alert severity="warning">
                <AlertTitle>Disclaimer</AlertTitle>
                These notes are all written by myself or quoted from teachers. Whilst I am trying to keep a high standard and a certain level of accuracy as I will be using these notes to study myself, but note I do not have proofreaders - there may be mistakes. If in doubt PLEASE go ask someone more qualified than me. I am not a teacher.
            </Alert>

            <Alert severity="info">
                <AlertTitle>Work in progress</AlertTitle>
                Many notes are not up to date with the things we have been taught
            </Alert>

            <Alert severity="info">
                <AlertTitle>Warning</AlertTitle>
                Notes from previous years are typically not updated and will become outdated as the syllabus changes.
            </Alert>

            <DirectoryList directoryTree={directoryTree} />
        </>
    );
}

export async function getStaticProps() {
    const directoryTree = await scanDirectory(__filename);

    return { props: { directoryTree } };
}