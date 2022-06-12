<template>
  <header class="header header-default">
    <div class="header_container">
      <div class="header_logo">
        <a href="#" class="header_logo_link">
         <img class="header_logo_icon w-14" src="~/assets/images/icons/app_logo.png" loading="lazy"/>
        </a>
      </div>
      <div class="header_title">
        <p class="header_title_text">Nuxt3 + SCSS</p>
      </div>
      <ModulesHeaderMenu/>
    </div>
  </header>
</template>

<style lang="scss">
@use "@/assets/scss/variables" as v;
@use "@/assets/scss/mixins" as m;
header{
  background-color: v.$color-theme-1;
  .header_container{
    @include m.flex(space-between, center);
    height: v.$header-height;
    background-color: v.$color-background-quaternary;
    .header_logo{
      @include m.flex(center, center);
      width: 4rem;
      height: 4rem;
      .header_logo_icon{
        width: 100%;
      }
    }
    .header_title{
      .header_title_text{
        font-size: v.$text-3xl;
        color: v.$color-theme-0;
      }
    }
    .header_nav{
      @include m.flex(center, center);
      position: relative;
      width: 4rem;
      height: 4rem;
      @include m.screen_for(medium){
        @include m.flex(flex-end, center);
      }
    }
  }
}
</style>
