module.exports = {
  title: 'Freelance Developer Hiring Guide',
  description: "The Ultimate Guide to Hire Freelance Developers",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/flexiple-favicon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/flexiple-favicon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/flexiple-favicon.png"
      }
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "ZIy3cvwxCLmcL34jqUREniW7Nt-rOEJWDAzGIY6fpgo"
      }
    ],
    [
      'script',
      {
        src: "https://cdn.popt.in/pixel.js?id=b9e5b05be3c6d",
        id: "pixel-script-poptin",
        async: "true"
      }
    ]
  ],
  serviceWorker: true,
  themeConfig: {
    search: false,
    docsDir: "docs",
    logo: "/assets/flexiple-developer-logo.png",
    mobileLogo: "/assets/flexiple-favicon.png",
    nav: [
      {
        text: "Follow us on Twitter",
        link: "https://twitter.com/Flexipletweets",
        rel: "noopener"
      }
    ],
    smoothScroll: true,
    sidebar: [
      "/",
      "2-current-trends",
      "3-why-should-you-hire-a-freelance-developer",
      "4-how-much-does-it-cost-to-hire-a-developer",
      "5-how-to-hire-a-freelance-software-developer",
      "6-top-7-freelance-websites-to-hire-developers",
      "7-how-to-choose-the-right-freelance-web-or-app-developer",
      "8-how-to-manage-a-freelance-project"
    ]
  },
  plugins: {
    "@vuepress/google-analytics": {
      ga: "UA-104079416-3"
    },
    'vuepress-plugin-nprogress':{}
  }
}
