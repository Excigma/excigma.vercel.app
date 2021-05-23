import { Stack, Typography } from '@material-ui/core';
import Link from 'components/Link';
import React from 'react';

export default function ErrorPage() {
    return (
        <Stack spacing={3}>
            <Typography variant="h2" fontWeight="fontWeightMedium">
                500 - Internal Server Error
            </Typography>

            <Typography fontWeight="fontWeightMedium">
                (╯°□°）╯︵ ┻━┻. Well uhh you broke the server. Or maybe I did. We don't know how you got here. Nevertheless, right now probably want to <Link href="/"><b>Goto</b> home</Link>
            </Typography>

            <Typography>
                WHY CAN I NOT WRITE GOOD CODE WITH ROBUST ERROR CHECKING REEEEEEEEEEEE
                <br />
                (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻ (╯°□°）╯︵ ┻━┻
            </Typography>

            <Typography>
                Thank you for coming to my TED talk.
            </Typography>
        </Stack>
    );
}
