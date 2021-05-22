import { Breadcrumbs } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from './Link';

export default function Crumbs () {
    const router = useRouter();

    const linkPath = router.asPath.split('/');
    linkPath.shift();

    const paths = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
    });

    console.log(paths);

    return (
        <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/">/</Link>
            
            {paths.map((path, index) => (
                <Link key={index} color="inherit" href={path.href}>
                    {path.breadcrumb.replaceAll('_', ' ')}
                </Link>
            ))}
        </Breadcrumbs>
    );
}