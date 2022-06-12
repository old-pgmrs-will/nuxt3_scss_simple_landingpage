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
