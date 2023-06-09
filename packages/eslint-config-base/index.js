module.exports = {
    extends: [
        'airbnb-base'
    ],
    rules: {
        'max-len': ['error', {
            code: 200,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
        }],
        'func-names': ['error', 'as-needed'],

        'keyword-spacing': 'warn',
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1
            }
        ],
        'array-element-newline': [
            'warn',
            {
                ArrayExpression: 'consistent',
                ArrayPattern: { minItems: 3 }
            }
        ],
        'sort-imports': ['warn', {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            allowSeparatedGroups: true
        }],
        'no-multi-spaces': ['warn', {
            ignoreEOLComments: false,
        }],
        'no-trailing-spaces': ['warn', {
            skipBlankLines: false,
            ignoreComments: false,
        }],
        'object-curly-spacing': ['warn', 'always'],
        'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
        'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
        'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: false }],
        'array-bracket-spacing': ['warn', 'never'],
        'arrow-parens': ['warn', 'always'],
        'arrow-spacing': ['warn', { before: true, after: true }],
        'block-spacing': ['warn', 'always'],
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': ['warn', { before: false, after: true }],
        'computed-property-spacing': ['warn', 'never'],
        semi: ['warn', 'always'],
        'semi-spacing': ['warn', { before: false, after: true }],
        'func-call-spacing': ['warn', 'never'],
        'function-call-argument-newline': ['warn', 'consistent'],
        'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': ['warn', 'always'],
        'operator-assignment': ['warn', 'always'],
        'prefer-const': ['warn', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],
        curly: ['warn', 'multi-line'],
        'no-extra-semi': 'warn',
        'no-regex-spaces': 'warn',
        'dot-notation': ['warn', { allowKeywords: true }],
        'space-before-function-paren': ['warn', 'never'],
        'space-before-blocks': ['warn', 'always'],
        'arrow-body-style': ['warn', 'as-needed'],
        'no-console': ['warn', { allow: ['warn', 'error'] }],

        'func-style': 'off',
        yoda: 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': 'off',
        'prefer-destructuring': 'off'
    }
};
