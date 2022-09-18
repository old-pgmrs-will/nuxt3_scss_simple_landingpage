<!--
  "layouts/default.vue" は、すべてのページ共通で使用されるレイアウト。
  その他のレイアウトを作成・使う場合は、ページ側（pages/*.vue）で別途指定する。
-->
<template>
  <div id="__layout" data-layout="default">
    <!-- class値 ".page-faded" でページロード直後はフェードアウト状態。script側でこれを外し、表示状態に -->
    <div id="__page" class="page page-faded">
      <!-- components/modules/header.vue を include -->
      <ModulesHeader/>
      <main>
        <!-- ここに pages/*.vue が include される -->
        <slot/>
      </main>
      <!-- components/modules/footer.vue を include -->
      <ModulesFooter/>
    </div>
  </div>
</template>

<style lang="scss">
// ページ共通
.page{
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  min-height: 100vh;
}
// ページロード時のtransition
// Nuxtには元々、ページtransition機能があるが、今回は未使用
.page{
  opacity: 1;
  transition: opacity 1.0s ease;
}
.page-faded{
  opacity: 0;
}
</style>

<script setup lang="ts">
  onMounted(()=>{
    // ページ表示時にフェードインさせる（Vueが持つTransitionは使わず、特定のclass値を外す）
    const page = document.querySelector<HTMLElement>('#__page')
    page!.classList.remove("page-faded")
  })
</script>
