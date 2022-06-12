import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "server",

  // TypeScript の Strict type checks を有効に
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#typescript
  typescript: {
    strict: true
  },
  // 共通css, scss参照
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css: [
    // ローカル環境の "reseter.min.css" を読み込む場合は有効化
    // "@/assets/scss/reseter.min.css",
    // app全体で共通のcss参照
    "@/assets/scss/global.scss"
  ],
  // Nuxt app 全体設定
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#app
  app: {
    // buildAssetsDir: '/assets/',
    // baseURL: '/',
    // HTMLの head 設定
    // https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        // 基本設定
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "old_pgmrs_will" },
        { name: "old_pgmrs_will", content: "Made by @old_pgmrs_will" },
        { hid : "description", name: "description", content: "Nuxt3 + SCSS + TypeScript : simple landing-page starter" },
        // ユーティリティ
        { name: "referrer", content: "unsafe-url" },
        { name: "robots", content: "index, follow" },
        { name: "format-detection", content: "telephone=no" },
        // 高速化対応（必要に応じて）
        { name: "preconnect", href: "https://fonts.googleapis.com" },
        { name: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { name: "preconnect", href: "https://fonts.gstatic.com" },
        { name: "dns-prefetch", href: "https://fonts.gstatic.com" }
      ],
      script: [
        // 外部JS-libの読み込み（必要に応じて）
        // <script src="https://awesome-lib-from-cdn.js"></script>
        // { src: "https://awesome-lib-from-cdn.js" }
      ],
      link: [
        // 外部css読み込み
        { rel: "preload", as: "style", href: "https://cdn.jsdelivr.net/npm/reseter.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/reseter.css" },
        { rel: "preload", as: "style", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"},
        { rel: "preload", as: "style", href: "https://fonts.googleapis.com/earlyaccess/notosansjp.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/earlyaccess/notosansjp.css"}
      ]
    }
  }
})
