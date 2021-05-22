import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

import getTheme from 'utils/theme.js';
import { Button } from '@material-ui/core';

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
    const { as, href, ...other } = props;

    return (
        <NextLink href={href} as={as}>
            <a ref={ref} {...other} />
        </NextLink>
    );
});

function Link(props) {
    const {
        href,
        activeClassName = 'active',
        className: classNameProps,
        innerRef,
        naked,
        ...other
    } = props;

    if (!href) {
        return (
            <MuiLink ref={innerRef} className={classNameProps} component="button" variant="body2" style={{ color: getTheme().palette.secondary.main }}  {...other} />
        );
    }

    const router = useRouter();
    const pathname = typeof href === 'string' ? href : href.pathname;
    const className = clsx(classNameProps, {
        [activeClassName]: router.pathname === pathname && activeClassName,
    });

    if (naked) {
        return (
            <NextComposed className={className} ref={innerRef} href={href} style={{ color: getTheme().palette.secondary.main }} {...other} />
        );
    }

    return (
        <MuiLink component={NextComposed} className={className} ref={innerRef} href={href} style={{ color: getTheme().palette.secondary.main }} {...other} />
    );
}

Link.propTypes = {
    activeClassName: PropTypes.string,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    naked: PropTypes.bool,
    onClick: PropTypes.func,
    prefetch: PropTypes.bool,
};

// eslint-disable-next-line react/display-name
export default React.forwardRef((props, ref) => <Link {...props} innerRef={ref} />);