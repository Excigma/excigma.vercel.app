import { css, Global } from '@emotion/react';
import * as React from 'React';

export const globalStyles = (
    <Global
        styles={css`
html, body {
  overflow-x: hidden !important;
}

body {
  line-height: 1.5em;
}

.MuiSvgIcon-fontSizeSmall {
  transform: translateY(2px);
}

pre {
  padding: 1em;
}
`}
    />
);