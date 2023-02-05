// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { theme } from '../src/custom/theme'

export default defineConfig({
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tag.startsWith('esp-web-')
            }
        }
    },
    outDir: './.vitepress/dist',
    srcDir: './src/pages',
    cleanUrls: 'with-subfolders',
    base: '/ESP32GreenHouseTowerDIY-Docs/',
    ignoreDeadLinks: true,
    /* head: [
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
        ]
        // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ], */
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    lastUpdated: true,
    title: 'ESP32 GreenHouse Tower DIY Docs',
    description: 'The official documentation for the ESP32 GreenHouse Tower DIY project',
    themeConfig: theme,
})