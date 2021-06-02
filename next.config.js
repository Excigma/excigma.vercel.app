const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { ProvidePlugin } = require('webpack');

function useEsbuildMinify(config, options) {
    const terserIndex = config.optimization.minimizer.findIndex(minimizer => (minimizer.constructor.name === 'TerserPlugin'));
    if (terserIndex > -1) {
        config.optimization.minimizer.splice(
            terserIndex,
            1,
            new ESBuildMinifyPlugin(options),
        );
    }
}

function useEsbuildLoader(config, options) {
    const jsLoader = config.module.rules.find(rule => rule.test && rule.test.test('.js'));

    if (jsLoader) {
        if (!jsLoader.use) jsLoader.use = {};
        jsLoader.use.loader = 'esbuild-loader';
        jsLoader.use.options = options;
    }
}

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
    webpack: (config, { isServer, webpack }) => {
        if (!isServer) config.resolve.fallback = { fs: false, path: false };

        config.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

        config.plugins.push(
            new webpack.ProvidePlugin({
                React: 'react',
            }),
        );

        useEsbuildMinify(config);

        useEsbuildLoader(config, {
            // Specify `tsx` if you're using TypeSCript
            loader: 'jsx',
            target: 'es2017',
        });

        return config;
    }
});
