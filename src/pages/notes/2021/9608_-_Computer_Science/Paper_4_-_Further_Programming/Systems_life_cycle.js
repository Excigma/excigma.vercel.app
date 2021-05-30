import { Typography } from '@material-ui/core';
import Heading from 'components/Heading';
import Li from 'components/Li';
import Subheading from 'components/Subheading';
import Ul from 'components/Ul';
import * as React from 'react';


export default function Page() {
    return (
        <>
            <Heading>
                Syllabus:
            </Heading>

            <Ul>
                <Li>
                    idk, I need to do this
                </Li>
            </Ul>

            <Subheading showJump>
                TODO.
            </Subheading>

            <Typography>
                I need to do this.
            </Typography>
        </>
    );
}
