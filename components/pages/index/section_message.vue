<template>
  <section class="message_section bg-color-gray">
    <div class="message" id="message">
      <h2 class="message_title">MESSAGE</h2>
      <div class="message_body">
        <div class="message_body_column">
          <img class="message_body_column_image" src="~/assets/images/placeimg_960_640_grayscale_tech-4.jpg" loading="lazy">
        </div>
        <div class="message_body_column">
          <p class="message_body_column_text">Ut convallis augue at ipsum interdum, quis blandit nibh ullamcorper. Curabitur vulputate est id blandit consequat. </p>
          <p class="message_body_column_text">Fusce semper laoreet porttitor. In gravida elit in metus placerat ornare. Nam vitae pharetra nulla, eget pharetra tortor.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as v;
@use "@/assets/scss/mixins" as m;
.message{
  max-width: 80rem; // 1280px
  margin-left: auto;
  margin-right: auto;
  .message_title{
    font-size: v.$text-3xl;
  }

  .message_body{
    margin-top: 2rem;
    .message_body_column{
      .message_body_column_image{
        width: 100%;
        border-radius: 0.5rem;
        box-shadow: 0.125rem 0.125rem 0.125rem 0 rgb(0 0 0 / 15%);
      }
      .message_body_column_text{
        font-size: v.$text-2xl;
        line-height: 3rem;
      }
    }

    @include m.screen_for(medium){
      @include m.flex(center, flex-start);
      gap: 2rem;
      .message_body_column{
        width: 50%;
        .message_body_column_image{
        }
        .message_body_column_text{
        }
      }
    }
  }
}
</style>