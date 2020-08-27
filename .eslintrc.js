module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    overrides: [
        {
            files: './server/*.ts',
            extends: './server/.eslintrc.js',
        }
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'dot-notation': 'error',
    },
};
