const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    poweredByHeader: false,
    reactStrictMode: true,
    future: {
        webpack5: true,
    },
    pwa: {
        disable: process.env.NODE_ENV !== 'production',
        dest: 'public',
        dynamicStartUrl: false,
        cacheOnFrontEndNav: true,
        runtimeCaching,
        publicExcludes: ['!icons/icon-*.png'],
        buildExcludes: [/media\/KaTeX_(?!.*(woff2$))/],
        register: false,
        skipWaiting: false
    },
    redirects: () => {
        return [
            {
                source: '/notes/:year',
                destination: '/notes',
                permanent: true,
            },
            {
                source: '/notes/:year/:subject/:paper',
                destination: '/notes/:year/:subject',
                permanent: true,
            }
        ];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) config.resolve.fallback = {
            fs: false,
            path: false
        };

        return config;
    }
});
