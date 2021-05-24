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

                    {directoryFiles.map((page, i) => (
                        <ListItem key={i} button  href={`${pathname}/${directoryName}/${page}`} component={Link} >
                            <ListItemText primary={page.replace(/_/g, ' ')} />

                            <Button variant="contained" color="primary" style={{ color: 'white' }}>Notes</Button>
                        </ListItem>
                    ))}
                </List>
            ))}
        </>
    );
}