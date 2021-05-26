import { Typography } from '@material-ui/core';
import Codeblock from 'components/Codeblock';
import Heading from 'components/Heading';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function Page() {
    return (
        <>
            <Heading>
                User-defined data types
            </Heading>

            <Subheading>
                3.1.1 User-defined data types
            </Subheading>

            <Typography>
                You can able to define your own datatypes inside VB and Pseudocode
            </Typography>

            <Typography>
                In VB, they are called <code>Structure</code>s
            </Typography>
            <Codeblock language="visual-basic">
                {`
' Defining your own datatype
Structure Cat
    Dim Name As String
	Dim Birthdate As Date
	Dim Breed As String
End Structure

' You can use the student structure here
' You the syntax for declaration is just like any other datatype
Dim MyCat As Cat
MyCat.Name = "Lorem Ipsum"

' You can additionally also have an array of a structure type
Dim Cats(99) As Cat
Cats(1).Name = "abcd"
                `}
            </Codeblock>

            <Typography>
                In Psuedocode, they are called <code>Record</code>s
            </Typography>

            <Codeblock language="psuedocode">
                {`
TYPE Cat
	DECLARE Name : STRING
	DECLARE Birthdate : DATE
	DECLARE Breed : STRING
ENDTYPE

DECLARE MyCat : Cat
MyCat.name <- "Lorem Ipsum"

DECLARE Cats : ARRAY[1 : 100] OF Cat
Cats[1].Name <- "abcd"
                `}
            </Codeblock>

            <Subheading>
                3.1.2 File organisation and access
            </Subheading>

            <Subheading>
                3.1.3 Real numbers and normalised floating-point representation
            </Subheading>
        </>
    );
}
