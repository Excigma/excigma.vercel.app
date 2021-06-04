import { Stack, Typography } from '@material-ui/core';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function PageContent() {
    return (
        <Stack>
            <Subheading>
                (╯°□°）╯︵ ┻━┻. Well uhh you broke the server. Or maybe I did. We don't know how you got here.
            </Subheading>

            <Typography>
                Nevertheless, right now probably want to <Link href="/"><b>Goto</b> home</Link>
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
