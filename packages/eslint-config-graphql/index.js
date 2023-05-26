module.exports = {
    extends: [
        'plugin:graphql/'
    ],
    rules: {
        'vue/attributes-order': 'warn',
        'vue/order-in-components': 'warn',
        'vue/html-indent': ['warn', 4]
    },
    overrides: [
        {
            files: ["*.graphql"],
            extends: [
                "plugin:@graphql-eslint/schema-recommended",
                "plugin:@graphql-eslint/operations-recommended"
            ],
            rules: {
                "@graphql-eslint/known-type-names": "error"
            }
        }
    ]
};
