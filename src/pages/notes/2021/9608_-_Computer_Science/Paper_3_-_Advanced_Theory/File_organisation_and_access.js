import { Typography } from '@material-ui/core';
import Heading from 'components/Heading';
import Li from 'components/Li';
import Subheading from 'components/Subheading';
import Ul from 'components/Ul';
import * as React from 'react';


export default function PageContent() {
    return (
        <>
            <Heading>
                Syllabus:
            </Heading>

            <Ul>
                <Li>
                    Show understanding of methods of file organisation: serial, sequential (using a key field) and
                    random (using a record key)
                </Li>
                <Li>
                    Show understanding of methods of file access:
                </Li>
                <Li>
                    -- Sequential access for serial and sequential file
                </Li>
                <Li>
                    -- Direct access for sequential and random files
                </Li>
                <Li>
                    Select an appropriate method of file organisation and file access for a given problem
                </Li>
            </Ul>

            <Subheading showJump>
                Methods of file organisation
            </Subheading>

            <Ul>
                <Li>
                    Serial: Stored in chronological order. New records are just appended onto the end of the file.Always the suitable method for data with timestamps, logs.
                </Li>
                <Li>
                    Sequential: Stored in key field order, adding new records is difficult, and requires you to move locations of existing records. Used in tapes. Many disadvantages.
                </Li>
                <Li>
                    Random: Stored in place of a record key. Good for very large files, records are not stored sequentially, key field is inputted into a hashing function (usually using modulo division). Collisions in the data may occur.
                </Li>
            </Ul>

            <Subheading showJump>
                Sequential access for Serial and sequential files
            </Subheading>

            <Typography>
                Accessing the file in order, from start to finish
            </Typography>

            <Subheading showJump>
                Direct access for Sequential and random files
            </Subheading>

            <Typography>
                A hash function is used to calculate the position of the data in memory
            </Typography>


            <Subheading>
                TODO: Add link to programming
            </Subheading>
        </>
    );
}
