const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const { subjects } = require('./src/config');

module.exports = withPWA({
    poweredByHeader: false,
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    future: {
        webpack5: true,
    },
    reactStrictMode: true,
});