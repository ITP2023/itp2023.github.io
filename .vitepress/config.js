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
      { text: 'Home', link: '/' },
      { text: "Writings", link: "/writings" }
    ],

    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: "Who is the Prisoner?", link: "/whoami" },

              {
                text: "Getting GetX", link: "/getting-getx/",
                items: [
                  { text: "Introduction", link: "/getting-getx/" },
                  { text: "What is GetX?", link: "/getting-getx/what-is-get" },
                  { text: "There's more", link: "/tba" }
                ]
              },
              {
                text: "Reacting to Refine", link: "/reacting-refine",
                items: [
                  { text: "Providers", link: "/reacting-refine/providers" }
                ]
              }
        ]
          
      }
    ],

    socialLinks: [
      { icon: 'github', link: "https://github.com/ITP2023" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/ihab-tanvir-961430224/" }
    ]
  }
})
