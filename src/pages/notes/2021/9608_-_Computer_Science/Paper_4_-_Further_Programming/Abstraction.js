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
                Syllabus: Show understanding of how to model a complex system by only including essential details, using
            </Heading>

            <Ul>
                <Li>
                    Functions and procedures with suitable parameters
                </Li>
                <Li>
                    Abstract datatypes (ADTs) (Stacks, queues, linked-lists binary trees, hash tables, dictionaries)
                </Li>
                <Li>
                    Classes (OOP aka Object-oriented programming paradigm)
                </Li>
                <Li>
                    Facts, rules (Declarative programming paradigm)
                </Li>
            </Ul>

            <Typography>
                Abstraction involves removing details that are not needed to solve a problem; only essential information is kept. Abstraction allows programmers to deal with complex problems.
            </Typography>

            <Subheading showJump>
                Ways to abstract programs
            </Subheading>

            <Ul>
                <Li>
                    Use datastructures
                </Li>
                <Li>
                    Program development
                </Li>
            </Ul>

            <Subheading showJump>
                Use datastructures
            </Subheading>

            <Typography>
                Use the best data structure for the given problem, for example one of: array, list or binary tree may be the best solution to solve your problem and should be used.
            </Typography>

            <Typography>
                If none of them suit your needs you can use an another abstract datatype, for example stacks or queues which can be implemented on top of another already existing abstract datatype, for example an array. (Layers of abstraction)
            </Typography>

            <Subheading showJump>
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
