module.exports = {
    extends: [
        'airbnb-base'
    ],
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'max-len': ['error', {
            code: 200,
            ignorePattern: 'd="([\\s\\S]*?)"',
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
        }],
        'comma-dangle': ['error', 'never'],
        // Semicolon should only throw a warning instead of an error
        semi: [1, 'always'],
        'array-element-newline': [
            'error',
            {
                ArrayExpression: 'consistent',
                ArrayPattern: { minItems: 3 }
            }
        ],
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'keyword-spacing': 'error',
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 'off',
        'vue/no-lone-template': 'off',
        'vue/no-mutating-props': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'arrow-body-style': 'off',
        'no-restricted-syntax': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'prefer-destructuring': 'off'
    }
};
