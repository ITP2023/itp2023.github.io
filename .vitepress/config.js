import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "The Golden Prison",
  description: "Welcome to my humble abode",
  themeConfig: {
    logo: "../picture.jpg",
    siteTitle: "ITP2023",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: "https://github.com/ITP2023" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/ihab-tanvir-961430224/" }
    ]
  }
})
