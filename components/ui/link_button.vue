<!-- [バリエーション仕様を持つリンクボタン・コンポーネント]
  ex.
  <UiLinkButton linkUrl="#" class="large-button md:center" caption="Foo"></UiLinkButton>
  <UiLinkButton linkUrl="#" class="small-button color-theme-5 md:center" caption="Bar" has_icon="true" icon_class="fa-solid fa-angle-right"></UiLinkButton>

  "UiLinkButton" の要素名は、componentsフォルダ直下の "ui" と、コンポーネントファイル名の "link_button" から自動解決される。
-->
<template>
  <div class="link_button">
    <a v-bind:href="linkUrl" class="link_button_body">{{ caption }}<i v-if="has_icon" v-bind:class="icon_class"></i></a>
  </div>
</template>

<script>
  // 親から渡されるプロパティの受け取り
  export default {
    name: "LinkButton",
    props: ["caption", "linkUrl", "has_icon", "icon_class"]
  };
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as v;
@use "@/assets/scss/mixins" as m;
.link_button{
  width: 14rem;
  margin-left: auto;
  margin-right: auto;
  &.md-center{
    @include m.screen_for(medium){
      margin-left: 0;
    }
  }
  // リンクボタン・サイズのバリエーション
  &.large-button{
    .link_button_body{
      padding: 1.25rem 2rem;
      font-size: v.$text-xl;
    }
  }
  // リンクボタン・サイズのバリエーション
  &.small-button{
    .link_button_body{
      padding: 0.75rem 2rem;
      font-size: v.$text-base;
    }
  }
  // カラーバリエーション
  &.color-theme-3{
    .link_button_body{
      background-color: v.$color-theme-3;
      border: solid 1px v.$color-theme-3;
      color: v.$color-theme-7;
    }
  }

  // カラーバリエーション
  &.color-theme-5{
    .link_button_body{
      background-color: v.$color-theme-5;
      border: solid 1px v.$color-theme-5;
      color: v.$color-theme-1;
    }
  }
  .link_button_body{
    @include m.flex(center, center);
    background-color: v.$color-theme-7;
    border: solid 1px v.$color-theme-7;
    border-radius: 0.25rem;
    margin-left: auto;
    margin-right: auto;
    color: v.$color-theme-1;
    font-weight: bold;
    text-align: center;
    text-decoration: inherit;
    width: 100%;
    > i{
      padding-left: 0.5rem;
    }
    @include m.screen_for(large){
      @include m.flex(center, center);
      margin-left: 0;
    }
  }
}
</style>
