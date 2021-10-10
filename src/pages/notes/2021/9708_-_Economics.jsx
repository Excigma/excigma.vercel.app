import { Typography } from '@mui/material';
import DirectoryList from 'components/DirectoryList';
import Heading from 'components/Heading';
import Link from 'components/Link';
import * as React from 'react';
import scanDirectory from 'utils/scanDirectory';

export default function PageContent({ directoryTree }) {
    return (
        <>
            <Heading>
                Economics
            </Heading>

            <Typography>
                Open the <Link href="https://www.cambridgeinternational.org/Images/329552-2019-2021-syllabus.pdf" rel="noreferrer" target="_blank">Syllabus</Link>
            </Typography>

            <DirectoryList directoryTree={directoryTree} />
        </>
    );
}

export async function getStaticProps() {
    const directoryTree = await scanDirectory(__filename);

    return { props: { directoryTree } };
}