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
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "ZIy3cvwxCLmcL34jqUREniW7Nt-rOEJWDAzGIY6fpgo"
      }
    ],
    [
      'script', {}, `
        (function(e,a){
            var t,r=e.getElementsByTagName("head")[0],c=e.location.protocol;
            t=e.createElement("script");t.type="text/javascript";
            t.charset="utf-8";t.async=!0;t.defer=!0;
            t.src=c+"//front.optimonk.com/public/"+a+"/js/preload.js";r.appendChild(t);
        })(document,"94249");
    `
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
        text: "Subscribe to Newsletter",
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
      "2-current-trends",
      "3-why-should-you-hire-a-freelance-developer",
      "4-how-much-does-it-cost-to-hire-a-developer",
      "5-how-to-hire-a-freelance-software-developer",
      "6-top-7-freelance-websites-to-hire-developers",
      "7-how-to-choose-the-right-freelance-web-or-app-developer"
    ]
  },
  plugins: {
    "@vuepress/google-analytics": {
      ga: "UA-127123211-3"
    },
    robots: {
      host: "https://remoteWork2020.com",
      allowAll: true
    },
    sitemap: {
      hostname: "https://remoteWork2020.com"
    },
    'vuepress-plugin-nprogress':{}
  }
}
