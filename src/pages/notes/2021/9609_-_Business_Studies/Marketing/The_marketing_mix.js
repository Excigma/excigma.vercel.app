import Li from 'components/Li';
import Subheading from 'components/Subheading';
import Ul from 'components/Ul';
import * as React from 'react';

export default function Page() {
    return (
        <>
            <Subheading>
                The four C's
            </Subheading>

            <Ul>
                <Li>
                    Customer
                </Li>
                <Li>
                    Cost
                </Li>
                <Li>
                    Communication
                </Li>
                <Li>
                    Convenience
                </Li>
            </Ul>

            <Subheading>
                The four P's
            </Subheading>

            <Ul>
                <Li>
                    Product
                </Li>
                <Li>
                    Price
                </Li>
                <Li>
                    Promotion
                </Li>
                <Li>
                    Place
                </Li>
            </Ul>
        </>
    );
}
