<template>
  <footer class="footer footer-default">
    <div class="footer_container">
      <div class="footer_brand">
        <div class="footer_logo">
          <a href="#" class="footer_logo_link">
            <img class="footer_logo_icon w-14" src="~/assets/images/icons/app_logo.png" loading="lazy"/>
          </a>
        </div>
        <p class="footer_brand_text">Nuxt3 + SCSS : LP Starter</p>
      </div>
      <div class="footer_menu">
        <nav class="footer_nav">
          <a href="#skills" class="footer_nav_link" data-scroll_footer_nav>SKILLS</a>
          <a href="#works" class="footer_nav_link" data-scroll_footer_nav>WORKS</a>
          <a href="#message" class="footer_nav_link" data-scroll_footer_nav>MESSAGE</a>
          <a href="#contact" class="footer_nav_link" data-scroll_footer_nav>CONTACT</a>
        </nav>
        <nav class="footer_socialmedia">
          <a href="https://github.com/old-pgmrs-will" class="footer_socialmedia_link" target="_blank"><i class="footer_icon fa-brands fa-github"></i></a>
          <a href="https://codepen.io/old_pgmrs_will" class="footer_socialmedia_link" target="_blank"><i class="footer_icon fa-brands fa-codepen"></i></a>
          <a href="https://twitter.com/old_pgmrs_will" class="footer_socialmedia_link" target="_blank"><i class="footer_icon fa-brands fa-twitter"></i></a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use "@/assets/scss/variables" as v;
@use "@/assets/scss/mixins" as m;
footer{
  min-height: 5rem;
  margin-top: auto;
  white-space: nowrap;
  background-color: v.$color-theme-2;
  .footer_container{
    width: 100%;
    .footer_brand{
      @include m.flex(center, center);
      padding-top: 2rem;
      .footer_logo{
        @include m.flex(center, center);
        background-color: v.$color-theme-4;
        width: 2rem;
        height: 2rem;
        .footer_logo_link{
          display: contents;
          .footer_logo_icon{
            width: 3rem;
          }
        }
      }
      .footer_brand_text{
        margin-left: 1rem;
        font-weight: 600;
      }
    }
    .footer_menu{
      @include m.flex(center, center, column);
      .footer_nav{
        @include m.flex(center, center, column);
        margin-top: 2rem;
        margin-bottom: 1rem;
        .footer_nav_link{
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 1.25rem;
        }
      }
      .footer_socialmedia{
        margin-top: 1rem;
        margin-bottom: 2rem;
        .footer_socialmedia_link{
          padding-left: 1rem;
          padding-right: 1rem;
          font-size: 1.5rem;
        }
      }
    }
  }
}

@include m.screen_for(medium){
  footer{
    .footer_container{
      @include m.flex(space-between, center);
      padding-left: 1rem;
      padding-right: 1rem;
      .footer_brand{
        padding-top: inherit;
        .footer_logo{
          width: 1.5rem;
          height: 1.5rem;
          .footer_logo_link{
            .footer_logo_icon{
              font-size: 1rem;
            }
          }
        }
      }
      .footer_menu{
        @include m.flex(center, center);
        .footer_nav{
          @include m.flex(center, center);
          margin-top: 4rem;
          margin-bottom: 4rem;
          margin-right: 3rem;
          .footer_nav_link{
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            text-decoration: none;
          }
        }
        .footer_socialmedia{
          margin-top: 4rem;
          margin-bottom: 4rem;
          .footer_socialmedia_link{
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
  import sweetScroll from 'sweet-scroll'
  onMounted(() => {
    // フッターメニューから各sectionへのscroll
    const pageScrollerFooterNav = new sweetScroll({
      trigger: '[data-scroll_footer_nav]',
      duration: 500
    })
  })
</script>
