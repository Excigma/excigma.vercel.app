const withPWA = require('next-pwa');

const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    poweredByHeader: false,
    pwa: {
        dest: 'public',
        runtimeCaching,
        disable: process.env.NODE_ENV !== 'PRODUCTION'
    },
    future: {
        webpack5: true,
    },
    reactStrictMode: true,
    rewrites: () => {
        return [{
            source: '/notes/:year',
            destination: '/notes'
        },
        {
            source: '/notes/:year/:subject/:paper',
            destination: '/notes/:year/:subject'
        }];
    },
    redirects: () => {
        return [{
            source: '/notes/:year',
            destination: '/notes',
            permanent: true,
        },
        {
            source: '/notes/:year/:subject/:paper',
            destination: '/notes/:year/:subject',
            permanent: true,
        }];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                path: false
            };
        }

        return config;
    }
});