import { Typography } from '@material-ui/core';
import Codeblock from 'components/Codeblock';
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
                    Show understanding of why user-defined types are necessary
                </UnorderedListItem>
                <UnorderedListItem>
                    Define and use non-composite types: enumerated, pointer
                </UnorderedListItem>
                <UnorderedListItem>
                    Define and use composite data types: set, record and class/object
                </UnorderedListItem>
                <UnorderedListItem>
                    Choose and design an appropriate user-defined data type for a given problem
                </UnorderedListItem>
            </UnorderedList>

            <Subheading>
                Show understanding of why user-defined types are necessary
            </Subheading>

            <Typography>
                (This needs confirming)
                Programmers can choose to use an integer datatype for example, which will be the same for ever program, however user-defined data types are needed when the programmer uses a record, as they are not the same for all programs.
            </Typography>

            <Subheading>
                Define and use <b>non-composite</b> types: Enumerated, Pointer
            </Subheading>

            <Subheading>
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

            <Subheading>
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

            <Subheading>
                Define and use <b>composite</b> data types: Set, Record and Class/Object
            </Subheading>

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

            <Subheading>
                Class/Object
            </Subheading>

            <Typography>
                TODO. Maybe check it out in paper 4 i think later im not even done yet AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </Typography>

        </>
    );
}
