import { ListItem, ListItemText } from '@mui/material';
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