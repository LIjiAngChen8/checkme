import { defineConfig } from "vitepress";

export default defineConfig({
  title: "CheckMe 官方中文文档",
  description: "一款轻量的数据校验工具",
  themeConfig: {
    logo: "./public/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/LIjiAngChen8/checkme" },
    ],
  },
});
