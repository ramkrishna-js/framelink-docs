import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Framelink",
  description: "A robust Lavalink client for Node.js",
  base: '/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API Reference', link: '/guide/manager' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      },
      {
        text: 'Core Architecture',
        collapsed: false,
        items: [
          { text: 'Lavalink Manager', link: '/guide/manager' },
          { text: 'Advanced Search', link: '/guide/advanced-search' },
          { text: 'Players', link: '/guide/players' },
          { text: 'Queue System', link: '/guide/queue' }
        ]
      },
      {
        text: 'Advanced',
        collapsed: true,
        items: [
          { text: 'Plugin System', link: '/guide/plugins' },
          { text: 'Voice Updates', link: '/guide/voice-updates' }
        ]
      },
      {
        text: 'Visuals',
        collapsed: false,
        items: [
          { text: 'Framecard', link: '/guide/framecard' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ramkrishna-js/framelink' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present Ramkrishna'
    },
    editLink: {
      pattern: 'https://github.com/ramkrishna-js/framelink-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
