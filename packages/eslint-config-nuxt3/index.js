module.exports = {
    extends: [
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        'vue/attributes-order': 'warn',
        'vue/order-in-components': 'warn',
        'vue/html-indent': ['warn', 4]
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser'
        }
    ]
};
