import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XMapTools 4.5 Doc",
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
      { text: 'Workspaces', items: [
          { text: 'Project & Import', link: '/doc-project-import' },
          { text: 'Options', link: '/doc-options' },
          { text: 'Spot Data', link: '/doc-spot-data' },
          { text: 'CT Segmentation', link: '/doc-segment' },
          { text: 'Add-ons', link: '/doc-addons' },
        ]
      },
      { text: 'EPMA', items: [
          { text: 'EPMA', link: '/doc-epma' },
          { text: 'Data compatibility', link: '/doc-epma#data-compatibility-for-epma' },
          { text: 'Data conversion', link: '/doc-epma#data-conversion-for-epma' },
          { text: 'Importing calibrated data', link: '/doc-epma#importing-calibrated-data-from-epma-and-sem' },
          { text: 'Calibration Assistant', link: '/doc-epma#calibration-assistant-epma' },
        ]
      },
      { text: 'LA-ICP-MS', items: [
          { text: 'LA-ICP-MS', link: '/doc-laicpms' },
          { text: 'File format', link: '/doc-laicpms#file-format' },
          { text: 'Converter for LA-ICP-MS data', link: '/doc-laicpms#converter-for-la-icp-ms-data' },
          { text: 'Log generator module', link: '/doc-laicpms#log-generator-module' },
          { text: 'Calibration', link: '/doc-laicpms#calibration' },
          { text: 'Calibration Assistant', link: '/doc-laicpms#calibration-assistant-la-icpms' },
        ]
      },
      { text: 'Tools', items: [
          { text: 'Data Visualization', link: '/doc-visualization' },
          { text: 'Images', link: '/doc-images' },
          { text: 'Sampling Tools', link: '/doc-sampling' },
          { text: 'Spider Module', link: '/doc-spider' },
          { text: 'Import Maps', link: '/doc-import-maps' },
          { text: 'External Functions', link: '/doc-ext-functions' },
        ]
      },
      { text: 'Learn', items: [
          { text: 'Tutorials', link: '/tutorials' },
          { text: 'Videos', link: '/videos' },
        ]
      }
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
        text: 'Workspaces',
        items: [
          { text: 'Project & Import', link: '/doc-project-import' },
          { text: 'Options', link: '/doc-options' },
          { text: 'Spot Data', link: '/doc-spot-data' },
          { text: 'CT Segmentation', link: '/doc-segment' },
          { text: 'Add-ons', link: '/doc-addons' },
        ]
      },
      {
        text: 'Documentation',
        items: [
          { text: 'EPMA', link: '/doc-epma',
            items: [
              { text: 'Data compatibility', link: '/doc-epma#data-compatibility-for-epma' },
              { text: 'Data conversion', link: '/doc-epma#data-conversion-for-epma' },
              { text: 'Importing calibrated data', link: '/doc-epma#importing-calibrated-data-from-epma-and-sem' },
              { text: 'Classification', link: '/doc-epma#classification' },
              { text: 'Calibration (EPMA)', link: '/doc-epma#calibration-epma' },
            ]
          },
          { text: 'LA-ICP-MS', link: '/doc-laicpms',
            items: [
              { text: 'File format', link: '/doc-laicpms#file-format' },
              { text: 'Converter for LA-ICP-MS data', link: '/doc-laicpms#converter-for-la-icp-ms-data' },
              { text: 'Log generator module', link: '/doc-laicpms#log-generator-module' },
              { text: 'Calibration', link: '/doc-laicpms#calibration' },
            ]
          },

        ]
      },
      {
        text: 'Tools',
        items: [
          { text: 'Data Visualization', link: '/doc-visualization' },
          { text: 'Images', link: '/doc-images' },
          { text: 'Sampling Tools', link: '/doc-sampling' },
          { text: 'Spider Module', link: '/doc-spider' },
          { text: 'Import Maps', link: '/doc-import-maps' },
          { text: 'External Functions', link: '/doc-ext-functions',
            items: [
              { text: 'Structural formulas', link: '/doc-ext-functions#structural-formulas' },
              { text: 'Thermobarometry', link: '/doc-ext-functions#thermobarometry-and-other-methods' },
            ]
          },
        ]
      },
      {
        text: 'Other resources',
        items: [
          { text: 'Tutorials', link: '/tutorials' },
          { text: 'Videos', link: '/videos' },
          { text: 'Bingo-Antidote', link: '/bingo-antidote' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xmaptools/XMapTools_Developers' }
    ],

    footer: {
      message: 'XMapTools - Quantitative compositional mapping',
      copyright: 'Copyright © 2025–2026 XMapTools'
    }
  }
})