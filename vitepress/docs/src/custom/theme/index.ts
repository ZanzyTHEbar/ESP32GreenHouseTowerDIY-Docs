//https://vitepress.vuejs.org/config/theme-configs
//https://vitepress.vuejs.org/guide/theme-nav#navigation-links

//import MyLayout from '../../vue/MyLayout.vue'

const theme = {
    logo: {
        light: '/logo_light.png', dark: '/logo.svg', alt: 'Logo'
    },
    siteTitle: 'ESP32GreenhouseTowerDIY Docs',
    /* Note the footer will not show when sidebar is active */
    footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2022-present ZanzyTHEbar",
    },
    nav: [
        {
            text: 'About',
            items: [
                { text: 'About Us', link: '/about' },
                { text: 'Development Road Map', link: '/dev_roadmap' },
            ]
        },
        { text: "Contact", link: "/contact" },
    ],
    sidebar: [
        {
            text: "Getting Started",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/getting_started/intro" },
                { text: "Things to know before you start", link: "/getting_started/things_to_know" },
            ],
        },
        {
            text: "How to Build",
            collapsible: true,
            items: [
                { text: "Full Build Guide", link: "/how_to_build/full_build" },
                { text: "Part List", link: "/how_to_build/parts_list" },
                { text: "How to Create your own Camera Mount", link: "/how_to_build/creating_your_own_mount" },
            ],
        },
        {
            text: "Firmware Guide",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/firmware_guide/firmware" },
                { text: "Setup Visual Studio Code environment", link: "/firmware_guide/setup_vscode" },
                { text: "Configuring Firmware", link: "/firmware_guide/configure_firmware" },
                { text: "Getting Started", link: "/firmware_guide/upload_firmware" },
            ],
        },
        {
            text: "Software Guide",
            collapsible: true,
            items: [
                { text: "Installing and setting up the ETVR App", link: "/software_guide/eyetrackvr_app_guide" },
                { text: "Building the app from source", link: "/software_guide/build_software" },
            ],
        },
        {
            text: "Miscellaneous",
            collapsible: true,
            items: [
                { text: "VR Chat Avatar Setup", link: "/misc/vrc_avatar_setup" },
                { text: "FAQ", link: "/misc/faq" },
            ],
        },
        {
            text: "Development",
            collapsible: true,
            items: [
                { text: "Docs", link: "/development/docs/dev_docs" },
            ],
        },
    ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/ZanzyTHEbar/ESP32GreenHouseTowerDIY' },
        { icon: 'discord', link: 'https://discord.gg/kkXYbVykZX' }
    ]
}

const ThemeSettings = {}

export { theme, ThemeSettings }