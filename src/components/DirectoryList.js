import { Divider, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import Link from 'components/Link';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function DirectoryList({ directoryTree }) {
    const { pathname } = useRouter();

    return <>
        <Divider />

        {/* Possibly use <accordion> for this */}
        {Object.entries(directoryTree).map(([directoryName, directoryFiles], i) => (
            <React.Fragment key={i}>
                <Typography variant="h4" id={`nested-list-subheader-${i}`} gutterBottom>
                    {directoryName.replace(/_/g, ' ')}
                </Typography>

                <List component={Paper} aria-labelledby={`nested-list-subheader-${i}`}>
                    {directoryFiles.map((page, j) => (
                        <ListItem
                            key={j}
                            button
                            component={Link}
                            href={`${pathname}/${directoryName}/${page}`}>
                            <ListItemText primary={page.replace(/_/g, ' ')} />
                        </ListItem>
                    ))}
                </List>
            </React.Fragment>
        ))}
    </>;
}