import { Stack, Typography } from '@material-ui/core';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function PageContent() {
    return (
        <Stack>
            <Subheading showJump>
                Fiscal policy
            </Subheading>

            <Typography>
                This involves government expectation, raising taxation, revenue, and managing national debt for the purpose of improving economic performance
            </Typography>

            <Typography>
                Fiscal policy is announced once a year in the "budget"
            </Typography>

            <Typography>
                Budget deficit: this occurs when government expenditure is greater than government taxation revenue in the budget year
            </Typography>

            <Typography>
                Fiscal policy will cause the money invested to multiply. "One person's expenditure is another person's income"
            </Typography>

            <Typography>
                Multiplier is the change in reap GDP when there is a change in an injection
            </Typography>
        </Stack>
    );
}
