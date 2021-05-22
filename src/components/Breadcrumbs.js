import React from 'react';

import { useRouter } from 'next/router';
import { Avatar, Breadcrumbs } from '@material-ui/core';

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
            <Link href="/">
                <Avatar src="/icon.svg" alt="Excigma" sx={{ width: '1em', height: '1em' }} />
            </Link>
            
            <Link href="/">
                root
            </Link>
            
            {paths.map((path, index) => (
                <Link key={index + 1} href={path.href}>
                    {path.breadcrumb ? path.breadcrumb.replace(/_/g, ' ') : 'home'}
                </Link>
            ))}
        </Breadcrumbs>
    );
}