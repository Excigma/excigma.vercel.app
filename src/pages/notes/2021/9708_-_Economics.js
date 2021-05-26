import DirectoryList from 'components/DirectoryList';
import Heading from 'components/Heading';
import * as React from 'react';
import getChildren from 'utils/getChildren';



export default function Page({ directoryTree }) {
    return (
        <>
            <Heading>
                ecnomicks
            </Heading>

            <DirectoryList directoryTree={directoryTree} />
        </>
    );
}


export async function getStaticProps() {
    const directoryTree = await getChildren(__filename);

    return { props: { directoryTree } };
}