module.exports = {
    extends: [
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue']
    },
    rules: {
        'vue/attributes-order': 'warn',
        'vue/order-in-components': 'warn',
        'vue/html-indent': ['warn', 4],
        'vue/max-attributes-per-line': ['warn', {
            singleline: { max: 3 },
            multiline: { max: 1 }
        }],
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true }
        ]
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser'
        },
        {
            files: [
                // These pages are not used directly by users, so they can have one-word names.
                '**/pages/**/*.{js,ts,jsx,tsx,vue}',
                '**/layouts/**/*.{js,ts,jsx,tsx,vue}',
                '**/app.{js,ts,jsx,tsx,vue}',
                '**/error.{js,ts,jsx,tsx,vue}'
            ],
            rules: { 'vue/multi-word-component-names': 'off' }
        },
        {
            // Pages and layouts are required to have a single root element if transitions are enabled.
            files: ['**/pages/**/*.{js,ts,jsx,tsx,vue}', '**/layouts/**/*.{js,ts,jsx,tsx,vue}'],
            rules: { 'vue/no-multiple-template-root': 'error' }
        }
    ]
};
