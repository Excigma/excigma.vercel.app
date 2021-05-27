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
TYPE <Typename>
	DECLARE <Identifier> : <Datatype>
	DECLARE <Identifier> : <Datatype>
	// <etc>...
ENDTYPE

' Example

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
                Sets
            </Subheading>

            <Codeblock language="psuedocode">
                {`
TYPE <CustomTypeName> = SET OF <Basetype>
DEFINE <Identifier>(<Value1>, <Value2>, <Value3>, <etc ...>) : <CustomTypeName>

// Example

TYPE Letters = SET OF CHAR
DEFINE Vowels("a", "e", "i", "o", "u") : <CustomTypeName>
                `}
            </Codeblock>


            <Subheading>
                Enums
            </Subheading>

            <Codeblock language="psuedocode">
                {`
TYPE
	<CustomTypeName> = (<Value1>, <Value2>, <Value3>, <etc ...>)
	// <etc>...
ENDTYPE

// Example

TYPE
	TDaysOfWeek = (Monday, Tuesday, Wednesday, Thursday, Friday)
	TCompassPoints = (North, East, South, West)
ENDTYPE

DECLARE Direction : TCompassPoints
DECLARE DayOfWeek : TDaysOfWeek

Direction <- East
            `}
            </Codeblock>
        </>
    );
}
