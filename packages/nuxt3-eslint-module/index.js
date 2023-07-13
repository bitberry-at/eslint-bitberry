import { addTemplate, defineNuxtModule } from '@nuxt/kit';

const padding = ' '.repeat(4);
const autoImportEslint = defineNuxtModule({
    meta: {
        name: "Bitberry ESLint Module"
    },
    setup(_, nuxt) {
        const autoImports = {
            // global imports
            global: [
                '$fetch',
                'useCloneDeep',
                'defineNuxtConfig',
                'definePageMeta',
                'defineI18nConfig'
            ]
        };

        nuxt.hook('imports:context', async(context) => {
            const imports = await context.getImports();
            for (const autoImport of imports) {
                const list = autoImports[autoImport.from] || [];
                const name = autoImport.as ? autoImport.as.toString() : autoImport.name.toString();
                autoImports[autoImport.from] = list.concat([name]);
            }
        });

        nuxt.hook('imports:extend', (composableImport) => {
            autoImports.composables = composableImport.map((autoImport) => {
                if (autoImport.as) return autoImport.as.toString();
                return autoImport.name.toString();
            });
        });

        nuxt.hook('modules:done', () => {
            const filename = '.eslintrc.js';

            const getContents = () => {
                let contents = 'module.exports = {\n  globals: {';
                for (const autoImport in autoImports) {
                    if (Object.hasOwn(autoImports, autoImport)) {
                        contents += `\n${padding}// ${autoImport}`;
                        for (const imp of autoImports[autoImport]) {
                            contents += `\n${padding}'${imp}': 'readonly',`;
                        }
                    }
                }
                return `${contents.slice(0, -1)}\n  }\n}\n`;
            };

            addTemplate({
                filename,
                getContents,
                write: true
            });
        });
    }
});

module.exports = function (...args) {
    return autoImportEslint(...args);
}
module.exports.meta = require('./package.json')
