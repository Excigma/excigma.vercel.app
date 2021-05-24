import { Button, List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core';
import Link from 'components/Link';
import { useRouter } from 'next/router';
import React from 'react';

export default function DirectoryList({ directoryTree }) {
    const { pathname } = useRouter();
    return (
        <>
            {Object.entries(directoryTree).map(([directoryName, directoryFiles], i) => (
                <List
                    key={i}
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <Typography variant="h4" id="nested-list-subheader" gutterBottom>
                            {directoryName.replace(/_/g, ' ')}
                        </Typography>
                    }>

                    {directoryFiles.map((page, j) => (
                        <ListItem
                            key={j}
                            button
                            component={Link}
                            style={{ color: 'white' }}
                            href={`${pathname}/${directoryName}/${page}`}
                        >
                            <ListItemText primary={page.replace(/_/g, ' ')} />

                            <Button variant="contained" color="primary">Notes</Button>
                        </ListItem>
                    ))}
                </List>
            ))}
        </>
    );
}