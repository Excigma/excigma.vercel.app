module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,md,jsx,mdx}', './components/**/*.{js,md,jsx,mdx}'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'.split(' ')
            },
        },
    },
    plugins: []
};