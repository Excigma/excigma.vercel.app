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
                Syllabus: Show understanding of how to model a complex system by only including essential details, using
            </Heading>

            <UnorderedList>
                <UnorderedListItem>
                    Functions and procedures with suitable parameters
                </UnorderedListItem>
                <UnorderedListItem>
                    Abstract datatypes (ADTs) (Stacks, queues, linked-lists binary trees, hash tables, dictionaries)
                </UnorderedListItem>
                <UnorderedListItem>
                    Classes (OOP aka Object-oriented programming paradigm)
                </UnorderedListItem>
                <UnorderedListItem>
                    Facts, rules (Declarative programming paradigm)
                </UnorderedListItem>
            </UnorderedList>

            <Typography>
                Abstraction involves removing details that are not needed to solve a problem; only essential information is kept. Abstraction allows programmers to deal with complex problems.
            </Typography>

            <Subheading>
                Ways to abstract programs
            </Subheading>

            <UnorderedList>
                <UnorderedListItem>
                    Use datastructures
                </UnorderedListItem>
                <UnorderedListItem>
                    Program development
                </UnorderedListItem>
            </UnorderedList>

            <Subheading>
                Use datastructures
            </Subheading>

            <Typography>
                Use the best data structure for the given problem, for example one of: array, list or binary tree may be the best solution to solve your problem and should be used.
            </Typography>

            <Typography>
                If none of them suit your needs you can use an another abstract datatype, for example stacks or queues which can be implemented on top of another already existing abstract datatype, for example an array. (Layers of abstraction)
            </Typography>

            <Subheading>
                Program development
            </Subheading>

            <Typography>
                Focus on the main problem while programming, ignoring other details - leave them for later.
            </Typography>

            <Typography>
                While learning new concepts, only focus on the new concept, and not past concepts you already know - they can be added later
            </Typography>

            <Subheading>
                TODO: Add links to other pages for abstraction
            </Subheading>
        </>
    );
}
