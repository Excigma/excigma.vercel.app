import { Avatar, Breadcrumbs, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import Link from 'components/Link';
import { useRouter } from 'next/router';
import React from 'react';

function TopicsList({ topics }) {
    const { pathname } = useRouter();
        
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Topics
                </ListSubheader>
            }
        >
            {topics.map((file, i) => (
                <ListItem key={i} button component={Link} href={pathname + '/' + file}>
                    <ListItemText primary={file} />
                </ListItem>
            ))}
        </List>
    );
}


export default TopicsList;