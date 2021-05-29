import { Typography } from '@material-ui/core';
import DirectoryList from 'components/DirectoryList';
import Heading from 'components/Heading';
import Link from 'components/Link';
import * as React from 'react';
import getChildren from 'utils/getChildren';



export default function Page({ directoryTree }) {
    return (
        <>
            <Heading>
                Bus studies
            </Heading>

            <Typography>
                Open the <Link href="https://www.cambridgeinternational.org/Images/329500-2019-2021-syllabus.pdf" rel="noreferrer" target="_blank">Syllabus</Link>
            </Typography>

            <DirectoryList directoryTree={directoryTree} />
        </>
    );
}


export async function getStaticProps() {
    const directoryTree = await getChildren(__filename);

    return { props: { directoryTree } };
}