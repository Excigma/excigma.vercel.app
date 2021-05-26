const withPWA = require('next-pwa');

const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    poweredByHeader: false,
    pwa: {
        dest: 'public',
        runtimeCaching
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
    exportPathMap: () => {
        return {
            '/notes/:year': { page: '/notes' },
            '/notes/:year/:subject/:paper': { page: '/notes/:year/:subject' }
        };
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