import { Typography } from '@mui/material';
import Li from 'components/Li';
import Subheading from 'components/Subheading';
import Ul from 'components/Ul';
import * as React from 'react';

export default function PageContent() {
    return (
        <>
            <Subheading showJump>
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

            <Subheading showJump>
                Customer
            </Subheading>

            <Typography>
                The product and advertising of the product needs to be targeted towards a group of people
            </Typography>

            <Subheading showJump>
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

            <Subheading showJump>
                Product
            </Subheading>

            <Typography>
                The product needs to be good and have unique selling points that other brands or products do not have. Tangible and Intangible attributes of brands and products. Position of the product should be suitable (region or suburb, which type of shop it's sold at, and where it is placed on shelves)
            </Typography>
        </>
    );
}
