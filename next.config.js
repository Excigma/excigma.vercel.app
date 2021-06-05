const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: false });

const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

const withMDX = require('@next/mdx')({
    extension: /\.mdx$/,
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
    }
});

module.exports = withBundleAnalyzer(withMDX({
    pageExtensions: ['jsx', 'mdx'],
    poweredByHeader: false,
    reactStrictMode: true,
    future: {
        webpack5: true,
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
}));
