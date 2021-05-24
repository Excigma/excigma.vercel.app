import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'components/Link';
import { useRouter } from 'next/router';
import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Crumbs() {
    const { pathname } = useRouter();
    const { breakpoints } = useTheme();
    
    const linkPath = pathname === '/' ? [] : pathname.split('/');

    if (linkPath.length) linkPath.shift();
    
    const paths = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
    });

    return (
        <Breadcrumbs maxItems={useMediaQuery(breakpoints.up('md')) ? 8 : 3} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link href="/">
                Home
            </Link>

            {paths.map((path, index) => (
                <Link key={index + 1} href={path.href}>
                    {path.breadcrumb.replace(/_/g, ' ')}
                </Link>
            ))}
        </Breadcrumbs>
    );
}