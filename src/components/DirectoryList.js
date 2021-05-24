import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import Link from 'components/Link';
import { useTheme } from 'components/ThemeProvider';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function DirectoryList({ directoryTree }) {
    const { pathname } = useRouter();
    const { dark } = useTheme();

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
                            style={{ color: dark ? 'white' : 'black' }}
                            href={`${pathname}/${directoryName}/${page}`}
                        >
                            <ListItemText primary={page.replace(/_/g, ' ')} />
                        </ListItem>
                    ))}
                </List>
            ))}
        </>
    );
}