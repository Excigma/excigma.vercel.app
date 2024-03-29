import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/styles';
import Link from 'components/Link';
import { useRouter } from 'next/router';
import * as React from 'react';
import LazyHydrate from 'react-lazy-hydration';

export default function Crumbs() {
    const { pathname } = useRouter();
    const { breakpoints } = useTheme();

    const linkPath = pathname === '/' ? [] : pathname.split('/');

    if (linkPath.length) linkPath.shift();

    const paths = linkPath.map((path, i) => {
        path = path.replace(/_/g, ' ');

        return {
            breadcrumb: path.charAt(0).toUpperCase().concat(path.slice(1)),
            href: '/' + linkPath.slice(0, i + 1).join('/')
        };
    });

    return (
        <LazyHydrate whenIdle>
            <Breadcrumbs maxItems={useMediaQuery(breakpoints.up('md')) ? 8 : 3} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link href="/">
                    Home
                </Link>

                {paths.map((path, index) => (
                    <Link key={index + 1} href={path.href}>
                        {path.breadcrumb}
                    </Link>
                ))}
            </Breadcrumbs>
        </LazyHydrate>
    );
}