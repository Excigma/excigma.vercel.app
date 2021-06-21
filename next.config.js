const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: false });
const withMDX = require('@next/mdx')({
    extension: /\.mdx$/,
    options: {
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [require('@mapbox/rehype-prism'), require('rehype-katex')]
    }
});

module.exports = withBundleAnalyzer(withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
    poweredByHeader: false,
    reactStrictMode: true,
    webpack5: true,
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
        if (!isServer) config.resolve.fallback = { fs: false, path: false, crypto: false };
        config.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
        return config;
    }
}));
