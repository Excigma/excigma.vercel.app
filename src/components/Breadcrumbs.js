import React from 'react';

import { useRouter } from 'next/router';
import { Breadcrumbs } from '@material-ui/core';

import Link from './Link';

export default function Crumbs () {
    const router = useRouter();

    const linkPath = router.asPath.split('/');
    linkPath.shift();

    const paths = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
    });

    return (
        <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link key={1} color="inherit" href="/">/</Link>
            
            {paths.map((path, index) => (
                <Link key={index + 1} color="inherit" href={path.href}>
                    {path.breadcrumb ? path.breadcrumb.replaceAll('_', ' ') : 'home'}
                </Link>
            ))}
        </Breadcrumbs>
    );
}