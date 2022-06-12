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
      { "twitter:card":  "summary_large_image" },
      { "twitter:title":  "Nuxt3 + SCSS : LP Starter." },
      { "twitter:description":  "This page is 'Nuxt3 + SCSS : LP Starter'." },
      { "twitter:image":  "https://nuxt3-scss-ts-lp-starter.netlify.app/ogp_image_index.png" },
      { "twitter:site": "@old_pgmrs_will" },
      { "og:title": "Nuxt3 + SCSS : LP Starter."} ,
      { "og:description": "This page is 'Nuxt3 + SCSS : LP Starter'."} ,
      { "og:url": ""} ,
      { "og:image": "https://nuxt3-scss-ts-lp-starter.netlify.app/ogp_image_index.png"},
      { "og:type": ""} ,
      { "og:site_name": "Nuxt3 + SCSS : LP Starter."} ,
    ]
  })
</script>
