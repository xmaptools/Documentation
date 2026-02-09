import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XMapTools Documentation",
  description: "Free and versatile software solution for chemical maps analysis",
  base: "/Documentation/",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://raw.githubusercontent.com/xmaptools/Documentation_Images/main/Logo/Logo_square_512.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', items: [
          { text: 'Introduction', link: '/getting-started' },
          { text: 'Installation', link: '/installation_guide' },
          { text: 'Starting XMapTools', link: '/getting-started-2' },
        ]
      },
      { text: 'EPMA', items: [
          { text: 'EPMA', link: '/doc-epma' },
          { text: 'Data compatibility', link: '/doc-epma#data-compatibility-for-epma' },
          { text: 'Data conversion', link: '/doc-epma#data-conversion-for-epma' },
          { text: 'Generation of mosaics', link: '/doc-epma#generation-of-mosaics' },
          { text: 'Importing calibrated data', link: '/doc-epma#importing-calibrated-data-from-epma-and-sem' },
        ]
      },
      { text: 'LA-ICP-MS', items: [
          { text: 'LA-ICP-MS', link: '/doc-laicpms' },
          { text: 'File format LA-ICP-MS', link: '/doc-laicpms#file-format-la-icp-ms' },
          { text: 'Converter for LA-ICP-MS data', link: '/doc-laicpms#converter-for-la-icp-ms-data' },
          { text: 'Log generator module', link: '/doc-laicpms#log-generator-module' },
        ]
      },
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'Videos', link: '/videos' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started' },
          { text: 'Installation', link: '/installation_guide' },
          { text: 'Starting XMapTools', link: '/getting-started-2' }, 
        ]
      },
      {
        text: 'Documentation',
        items: [
          { text: 'EPMA', link: '/doc-epma',
            items: [
              { text: 'Data compatibility', link: '/doc-epma#data-compatibility-for-epma' },
              { text: 'Data conversion', link: '/doc-epma#data-conversion-for-epma' },
              { text: 'Generation of mosaics', link: '/doc-epma#generation-of-mosaics' },
              { text: 'Importing calibrated data', link: '/doc-epma#importing-calibrated-data-from-epma-and-sem' },
            ]
          },
          { text: 'LA-ICP-MS', link: '/doc-laicpms',
            items: [
              { text: 'File format', link: '/doc-laicpms#file-format' },
              { text: 'Converter', link: '/doc-laicpms#converter-for-la-icp-ms-data' },
              { text: 'Log generator module', link: '/doc-laicpms#log-generator-module' },
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xmaptools/XMapTools_Developers' }
    ],

    footer: {
      message: 'XMapTools - Quantitative compositional mapping',
      copyright: 'Copyright © 2025 XMapTools'
    }
  }
})