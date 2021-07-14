module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'next'
    ],
    'parserOptions': {
        'ecmaFeatures': { 'jsx': true },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': ['react', 'mui-unused-classes', '@next/eslint-plugin-next'],
    'rules': {
        'react/no-unescaped-entities': 'off',
        'react/prop-types': 'off',
        'linebreak-style': 'off',
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always']
    }
};