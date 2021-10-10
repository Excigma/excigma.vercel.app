import { Typography } from '@mui/material';
import Codeblock from 'components/Codeblock';
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
                    Show understanding of why user-defined types are necessary
                </Li>
                <Li>
                    Define and use non-composite types: enumerated, pointer
                </Li>
                <Li>
                    Define and use composite data types: set, record and class/object
                </Li>
                <Li>
                    Choose and design an appropriate user-defined data type for a given problem
                </Li>
            </Ul>

            <Subheading>
                Show understanding of why user-defined types are necessary
            </Subheading>

            <Typography>
                (This needs confirming)
                Programmers can choose to use an integer datatype for example, which will be the same for ever program, however user-defined data types are needed when the programmer uses a record, as they are not the same for all programs.
            </Typography>

            <Subheading>
                Define and use non-composite types: Enumerated, Pointer
            </Subheading>

            <Typography>
                <b>NON-</b>composite data type, does not include/compose of other datatypes. Also includes integer, string
            </Typography>

            <Subheading showJump>
                Enums, aka Enumerated
            </Subheading>

            <Typography>
                An <b>Enumerated</b> data type represents a list of possible values. Even though the values inside the enum may look like a string, they are not and <b>should not</b> be enclosed in quote marks. The order of values inside an enum is important and can be used in programs compare values.
            </Typography>

            <Typography>An example would be an enum for days of the week and to compare the day of the week to see if it is greater than the day before.</Typography>

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

IF Day > Friday THEN
    // It is the weekend.
ENDIF
            `}
            </Codeblock>

            <Subheading showJump>
                Pointer
            </Subheading>

            <Typography>
                The pointer datatype is used to reference a location in memory. It can be used to create data structures that are dynamic (can change size)
            </Typography>

            <Codeblock language="psuedocode">
                {`
TYPE <PointerTypeName> = ^<TypeName>

// Example

TYPE TDayOfTheWeek = ^TDaysOfWeek
DECLARE DayPointer : TDayOfTheWeek

// DayPointer will now store the position of DayOfWeek's memory location
DayPointer <- ^DayOfWeek

// If you need to get the contents from the memory location, you will need to "dereference" it.
DECLARE MyDay : TDayOfTheWeek
MyDay <- DayPointer^
// TODO: Check with teacher. The OneNote may be wrong
// MyDay now contains the value from the value stored at DayPointer
            `}
            </Codeblock>

            <Subheading showJump>
                Define and use composite data types: Set, Record and Class/Object
            </Subheading>

            <Typography>
                Composite data type, includes/composes of other datatypes.
            </Typography>

            <Typography>
                You can able to define your own datatypes in Pseudocode (and VB - However this is not needed.)
            </Typography>

            <Typography>
                One of the most useful and used user-defined datatype. It allows the programmer to group together a fixed number of values, of which can be of different datatypes.
            </Typography>

            <Codeblock language="psuedocode">
                {`
TYPE <Typename>
	DECLARE <Identifier> : <Datatype>
	DECLARE <Identifier> : <Datatype>
	// <etc>...
ENDTYPE

// Example

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

            <Subheading showJump>
                Sets
            </Subheading>

            <Typography>
                Sets allow you to store unique values, and allow you to run mathematical operations from set theory, including checking if an element is in the set, adding the element to the set, removing the element from the set, union, difference and intersection.
            </Typography>

            <Codeblock language="psuedocode">
                {`
TYPE <CustomTypeName> = SET OF <Basetype>
DEFINE <Identifier>(<Value1>, <Value2>, <Value3>, <etc ...>) : <CustomTypeName>

// Example

TYPE Letters = SET OF CHAR
DEFINE Vowels("a", "e", "i", "o", "u") : <CustomTypeName>
                `}
            </Codeblock>

            <Subheading showJump>
                Class/Object
            </Subheading>

            <Typography>
                TODO. Maybe check it out in paper 4 i think later im not even done yet AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </Typography>

        </>
    );
}
