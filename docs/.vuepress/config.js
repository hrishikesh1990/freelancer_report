module.exports = {
  title: 'Remote Work 2020',
  description: "Your definitive guide to state of remote work and working remotely in 2020.",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/RT_Final_Logo.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/RT_Final_Logo.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/RT_Final_Logo.png"
      }
    ]
  ],
  serviceWorker: true,
  themeConfig: {
    docsDir: "docs",
    logo: "/assets/remote_work_2020.png",
    mobileLogo: "/assets/RT_Final_Logo.png",
    nav: [
      {
        text: "Remote Tools",
        link: "https://remote.tools",
        rel: "noopener"
      },
      {
        text: "Subscribe",
        link: "https://remote.tools/subscribe",
        rel: "noopener"
      },
      {
        text: "Follow us on Twitter",
        link: "https://twitter.com/RemoteTools",
        rel: "noopener"
      }
    ],
    smoothScroll: true,
    sidebar: [
      "/",
      "2-state-of-remote-work",
      "3-remote-working-guide",
      "3a-how-to-manage-a-remote-team",
      "3b-how-to-tackle-loneliness",
      "3c-how-to-build-culture-in-a-remote-team",
      "3d-remote-first-or-remote-friendly",
      "3e-is-remote-the-future",
      "4-the-remote-working-show",
      "5-the-remote-working-chronicles"
    ]
  },
  plugins: {
    "@vuepress/google-analytics": {
      ga: "UA-127123211-4"
    },
    robots: {
      host: "https://remoteWork2020.remote.tools",
      allowAll: true
    },
    sitemap: {
      hostname: "https://remoteWork2020.remote.tools"
    }
  }
}
