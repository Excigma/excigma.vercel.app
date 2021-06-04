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
`} />);