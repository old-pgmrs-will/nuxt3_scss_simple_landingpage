<template>
  <section class="hero_section">
    <div class="hero" id="top">
      <div class="hero_title">
        <h1 class="hero_title_text">Nuxt3 : LP Starter.</h1>
        <p class="hero_title_text-sub">Nuxt3(Vue3) + TypeScript + SCSS</p>
      </div>
      <div class="hero_main">
        <div class="hero_main_description">
          <p class="hero_main_description_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <UiLinkButton linkUrl="#" class="hero_conversion_linkbutton large-button md-center mt-12" caption="About me" has_icon="true" icon_class="fa-solid fa-angle-right"></UiLinkButton>
        </div>
        <div class="hero_main_image">
          <img class="hero_main_image_src" src="~/assets/images/placeimg_960_640_grayscale_tech-5.jpg" alt="top image">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as v;
@use "@/assets/scss/mixins" as m;
.hero{
  max-width: 80rem; // 1280px
  margin-left: auto;
  margin-right: auto;
  .hero_title_text-sub{
    font-size: 1.5rem;
    font-weight: bold;
  }
  .hero_main{
    display: grid;
    margin-top: 2rem;
    grid-template-columns: repeat(1, minmax(0,1fr));
    gap: 1rem;
    @include m.screen_for(large){
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 2rem;
    }
    .hero_main_image{
      position: relative;
      height: 20rem;
      @include m.screen_for(large){
        height: 100%;
      }
      .hero_main_image_src{
        position: absolute;
        object-fit: cover;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .hero_main_description{
      padding-top: 1rem;
      padding-bottom: 1rem;
      .hero_main_description_text{
        padding-top: 1rem;
        font-size: v.$text-2xl;
      }
    }
  }
}
</style>
