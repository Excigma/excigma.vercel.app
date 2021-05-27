import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import * as React from 'react';

export default function Subheading({ children, ...props }) {
    return (
        <ListItem {...props}>
            <ListItemIcon>
                <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText>
                {children}
            </ListItemText>
        </ListItem>
    );
}