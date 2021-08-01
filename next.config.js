const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: false });
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [require('@mapbox/rehype-prism'), require('rehype-katex')]
    }
});

module.exports = withBundleAnalyzer(withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    poweredByHeader: false,
    reactStrictMode: true,
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
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
        }
        ];
    },
    headers: () => {
        return [{
            source: '/*',
            headers: [{
                key: 'Cross-Origin-Opener-Policy',
                value: 'same-origin'
            },
            {
                key: 'Cross-Origin-Embedder-Policy',
                value: 'require-corp'
            }]
        }];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) config.resolve.fallback = { fs: false, path: false, crypto: false };
        config.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
        return config;
    }
}));