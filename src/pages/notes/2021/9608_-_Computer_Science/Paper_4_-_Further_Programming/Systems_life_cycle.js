import { Typography } from '@material-ui/core';
import Heading from 'components/Heading';
import Subheading from 'components/Subheading';
import UnorderedList from 'components/UnorderedList';
import UnorderedListItem from 'components/UnorderedListItem';
import * as React from 'react';


export default function Page() {
    return (
        <>
            <Heading>
                Syllabus:
            </Heading>

            <UnorderedList>
                <UnorderedListItem>
                    idk, I need to do this
                </UnorderedListItem>
            </UnorderedList>

            <Subheading showJump>
                TODO.
            </Subheading>

            <Typography>
                I need to do this.
            </Typography>
        </>
    );
}
