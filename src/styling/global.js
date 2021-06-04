import { css, Global } from '@emotion/react';
import * as React from 'react';

export const globalStyles = (<Global styles={css`
html, body {
  overflow-x: hidden !important;
}

body {
  line-height: 1.5em;
}

.MuiTypography-root > .MuiSvgIcon-root {
  transform: translateY(0.15em);
}

/* Prevent CSS layout shifting...? Emotion isn't inlining for some reason */
.css-nu13me-Stack-root  > *,
.css-m72s89-Stack-root > * {
    margin: 0;
    margin-top: 24px !important;
}
`} />);