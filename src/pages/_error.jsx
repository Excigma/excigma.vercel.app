import Typography from '@mui/material/Typography';
import Link from 'components/Link';
import Subheading from 'components/Subheading';
import * as React from 'react';

export default function ErrorPageContent() {
    return (
        <>
            <Subheading>
                An unknown error has occurred
            </Subheading>

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
        </>
    );
}
