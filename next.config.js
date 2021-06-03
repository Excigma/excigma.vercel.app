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
        publicExcludes: ['!icons/icon-*.png', '!js/umami.js'],
        buildExcludes: [/media\/KaTeX_(?!.*(woff2$))/],
        runtimeCaching
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
        if (!isServer) config.resolve.fallback = { fs: false, path: false };

        config.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

        return config;
    }
});
