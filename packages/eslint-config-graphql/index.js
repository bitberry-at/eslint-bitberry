module.exports = {
    extends: [
        'plugin:@graphql-eslint/schema-recommended',
        'plugin:@graphql-eslint/operations-recommended'
    ],
    rules: {
        '@graphql-eslint/known-type-names': 'error'
    },
    overrides: [
        {
            files: ["*.graphql"],
            parser: "@graphql-eslint/eslint-plugin"
        }
    ]
};
