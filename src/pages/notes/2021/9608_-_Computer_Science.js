import { Typography } from '@material-ui/core';
import DirectoryList from 'components/DirectoryList';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import * as React from 'react';
import scanDirectory from 'utils/scanDirectory';



export default function Page({ directoryTree }) {
    return (
        <>
            <Subheading>
                oMG pleASE Fix my prInter i know you've goto'd school to learnt dis
            </Subheading>

            <Typography>
                Open the <Link href="https://www.cambridgeinternational.org/Images/502960-2021-syllabus.pdf" rel="noreferrer" target="_blank">Syllabus</Link>
            </Typography>

            <DirectoryList directoryTree={directoryTree} />
        </>
    );
}

export async function getStaticProps() {
    const directoryTree = await scanDirectory(__filename);

    return { props: { directoryTree } };
}