import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "XMapTools Documentation",
  description: "Free and versatile software solution for chemical maps analysis",
  base: "/Documentation/",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/Logo_square_512.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'Videos', link: '/videos' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started' },
          { text: 'Installation', link: '/installation' }
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