<template>
  <section class="skills_section bg-color-gray">
    <div class="skills" id="skills">
      <h2 class="skills_title">SKILLS</h2>
      <p class="skills_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <div class="skill_item_list">
        <div class="skill_item_card">
          <div class="skill_item_icon"><i class="fa-brands fa-vuejs"></i></div>
          <div class="skill_item_content">
            <h4 class="skill_item_title">Vue + Nuxt.js</h4>
            <p class="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div class="skill_item_card">
          <div class="skill_item_icon"><i class="fa-brands fa-react"></i></div>
          <div class="skill_item_content">
            <h4 class="skill_item_title">React + Next.js</h4>
            <p class="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div class="skill_item_card">
          <div class="skill_item_icon"><i class="fa-brands fa-node-js"></i></div>
          <div class="skill_item_content">
            <h4 class="skill_item_title">node.js + Express</h4>
            <p class="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div class="skill_item_card">
          <div class="skill_item_icon"><i class="fa-brands fa-css3-alt"></i></div>
          <div class="skill_item_content">
            <h4 class="skill_item_title">CSS3 + PostCSS</h4>
            <p class="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div class="skill_item_card">
          <div class="skill_item_icon"><i class="fa-brands fa-js-square"></i></div>
          <div class="skill_item_content">
            <h4 class="skill_item_title">JavaScript + TypeScript</h4>
            <p class="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div class="skill_item_card">
          <div class="skill_item_icon"><i class="fa-brands fa-wordpress-simple"></i></div>
          <div class="skill_item_content">
            <h4 class="skill_item_title">WordPress + PHP</h4>
            <p class="skill_item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as v;
@use "@/assets/scss/mixins" as m;

.skills{
  max-width: 80rem; // 1280px
  margin-left: auto;
  margin-right: auto;
  .skills_title{
    font-size: v.$text-3xl;
  }
  .skills_description{
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: v.$text-2xl;
  }
}

.skill_item_list{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: v.$item-gap-sm;
  grid-row-gap: v.$item-gap-sm;
  @include m.screen_for(medium){
    // タブレット向け画面では横2カラム構成
    grid-template-columns: repeat(2, 1fr);
  }
  @include m.screen_for(large){
    // PC向け画面では横3カラム構成
    grid-template-columns: repeat(3, 1fr);
  }
  .skill_item_card{
    background-color: v.$color-theme-1;
    border: solid 1px v.$color-theme-4;
    border-radius: 0.5rem;
    padding: 2rem 2rem;
    .skill_item_icon{
      padding-bottom: 1rem;
      font-size: v.$text-3xl;
    }
    .skill_item_content{
      .skill_item_description{
        margin-top: 1rem;
      }
    }
  }
}
</style>
