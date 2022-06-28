<!--
  - indexページ
  - 各sectionコンポーネントは、./components/pages/index/*.vue
  - ※ templateタグ内は1つの親要素で括る。（直下に複数要素を書くとエラーになる）
-->
<template>
  <article class="page_article" id="page_article">
    <PagesIndexSectionTop/>
    <PagesIndexSectionSkills/>
    <PagesIndexSectionWorks/>
    <PagesIndexSectionMessage/>
    <PagesIndexSectionContact/>
  </article>
</template>

<script setup lang="ts">
  useHead({
    "title": 'Nuxt3 + SCSS : LP Starter.',
    meta: [
      // twitter card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nuxt3 + SCSS : LP Starter." },
      { name: "twitter:description", content: "This page is 'Nuxt3 + SCSS : LP Starter'." },
      // "ogp_image_index.png" は、public/ フォルダ内を参照
      { name: "twitter:image", content: "https://nuxt3-scss-ts-lp-starter.netlify.app/ogp_image_index.png" },
      { name: "twitter:site", content: "@old_pgmrs_will" },
      // OGP setting (主にfacebook等)
      { name: "og:title", content: "Nuxt3 + SCSS : LP Starter."} ,
      { name: "og:description", content: "This page is 'Nuxt3 + SCSS : LP Starter'."} ,
      { name: "og:url", content: "https://nuxt3-scss-ts-lp-starter.netlify.app"} ,
      { name: "og:image", content: "https://nuxt3-scss-ts-lp-starter.netlify.app/ogp_image_index.png"},
      { name: "og:type", content: "article"} ,
      { name: "og:site_name", content: "Nuxt3 + SCSS : LP Starter."} ,
    ]
  })
</script>
