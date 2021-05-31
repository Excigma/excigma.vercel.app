import { ListItem, ListItemText } from '@material-ui/core';
import * as React from 'react';

export default function Li({ children, ...props }) {
    return (
        <ListItem {...props}>
            <ListItemText>
                •  {children}
            </ListItemText>
        </ListItem>
    );
}