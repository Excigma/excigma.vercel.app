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
                    Show understanding of why a protocol is essential for communication between computers
                </Li>
                <Li>
                    Show understanding of how protocol implementation can be viewed as a stack, where each layer
                    has its own functionality
                </Li>
                <Li>
                    Show understanding of the function of each layer of the TCP/IP protocol suite
                </Li>
                <Li>
                    Show understanding of the application of the TCP/IP protocol suite when a message is sent from
                    one host to another on the Internet
                </Li>
                <Li>
                    Show understanding of how the BitTorrent protocol provides peer-to-peer file sharing
                </Li>
                <Li>
                    Show an awareness of other protocols (HTTP, FTP, POP3, SMTP) and their purposes
                </Li>
            </Ul>

            <Subheading showJump>
                Protocol
            </Subheading>
        </>
    );
}
