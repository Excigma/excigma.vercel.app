import { Avatar, Breadcrumbs } from '@material-ui/core';
import Link from 'components/Link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Crumbs() {
    const { pathname } = useRouter();

    const linkPath = pathname === '/' ? [] : pathname.split('/');

    if (linkPath.length) linkPath.shift();
    
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
                    {path.breadcrumb.replace(/_/g, ' ')}
                </Link>
            ))}
        </Breadcrumbs>
    );
}