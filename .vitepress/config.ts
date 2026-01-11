import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Framelink",
  description: "A robust Lavalink client for Node.js",
  base: '/framelink/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Lavalink Manager', link: '/guide/manager' },
          { text: 'Players', link: '/guide/players' },
          { text: 'Queue', link: '/guide/queue' }
        ]
      },
      {
        text: 'Plugins',
        items: [
          { text: 'Overview', link: '/guide/plugins' }
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Framecard', link: '/guide/framecard' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ramkrishna-js/framelink' }
    ]
  }
})
