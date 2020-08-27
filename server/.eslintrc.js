module.exports = {
    env: {
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'node',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
        project: 'server/tsconfig.eslint.json'
    },
    rules: {
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',
    },
};
