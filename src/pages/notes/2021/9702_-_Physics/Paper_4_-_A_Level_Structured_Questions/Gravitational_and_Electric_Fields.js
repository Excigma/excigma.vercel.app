import { Typography } from '@material-ui/core';
import Heading from 'components/Heading';
import Li from 'components/Li';
import Subheading from 'components/Subheading';
import TeX from 'components/TeX';
import Ul from 'components/Ul';
import * as React from 'react';

export default function Page() {
    return (
        <>
            <Heading>
                cool stuff i can walk on ground ojy!
            </Heading>

            <Subheading>
                Newton's lawn of gravitation
            </Subheading>

            <Typography>
                Force between two point masses is proportional to the product of their masses and inversely proportional to the square of their separation
            </Typography>

            <TeX>
                {String.raw`F_g = \frac{GMm}{r ^ 2}`}
            </TeX>

            <Ul>
                <Li><TeX inline>F_g</TeX> Force due to gravitation (N) </Li>
                <Li><TeX inline>G</TeX> Gravitational constant <TeX inline>{String.raw`6.67*10^{-11}`}</TeX></Li>
                <Li><TeX inline>{String.raw`M\text{ and } n`}</TeX> Two pointer masses</Li>
                <Li><TeX inline>r^2</TeX> Separation of C.O.Ms</Li>
            </Ul>

            <Typography>
                <TeX inline>{String.raw`F_g = mg`}</TeX> is related to this formula: <TeX inline>{String.raw`g = \frac{GM}{r^2}`}</TeX>
            </Typography>

            <Subheading>
                Gravitational field strength
            </Subheading>

            <Typography>
                The gravitational force exerted at a point per unit mass on a small test mass at that point
            </Typography>

            <TeX>
                {String.raw`g = \frac{GM}{r ^ 2}`}
            </TeX>

            <Subheading>
                Gravitational potential energy
            </Subheading>

            <Typography>
                Recall <TeX inline>{String.raw`\Delta{E_p} = mg\Delta{h}`}</TeX> but now it's <TeX inline>{String.raw`g = \frac{GM}{r^2}`}</TeX>
            </Typography>

            <TeX inline>{String.raw`h = r`}</TeX>

            <TeX>
                {String.raw`E_p = \frac{-GMm*h}{r^2} = \frac{-GMn}{r}`}
            </TeX>

            <Typography>
                Where did the negative come from?
            </Typography>

            <Typography>
                Gravitational potential energy is defined as the work done in bringing a small test mass from infinity to that point
            </Typography>

            <Typography>
                Maximum <TeX inline>E_p</TeX> is at <TeX inline>r = \infty</TeX> so at any <TeX inline>r</TeX> less than <TeX inline>\infty</TeX> there must be a smaller <TeX inline>E_p</TeX>. Since at <TeX inline>r = \infty</TeX>, <TeX inline>E_p = 0</TeX>, any smaller value must be negative
            </Typography>

        </>
    );
}