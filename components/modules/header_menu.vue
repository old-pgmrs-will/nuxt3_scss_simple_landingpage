<template>
  <div class="header_nav" id="header_nav">
    <!-- #nav_menu のclassは、変数 openNavMenuState === true 時のみ 'is_open' がセットされる-->
    <nav class="nav" id="nav_menu" v-bind:class="{is_open : openNavMenuState}">
      <!-- モバイル用ハンバーガーメニュー -->
      <button class="hamburger_menu" id="js_hamburger_menu">
        <!-- ハンバーガーメニューアイコン -->
        <i class="hamburger_icon"></i>
      </button>
      <!-- 画面サイズ共通navメニュー -->
      <div class="nav_list">
        <ul class="nav_items" id="js_nav_items">
          <li class="nav_item"><a href="#skills" class="nav_link" data-scroll-nav>SKILLS</a></li>
          <li class="nav_item"><a href="#works" class="nav_link" data-scroll-nav>WORKS</a></li>
          <li class="nav_item"><a href="#message" class="nav_link" data-scroll-nav>MESSAGE</a></li>
          <li class="nav_item"><a href="#contact" class="nav_link" data-scroll-nav>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/variables" as v;
@use "@/assets/scss/mixins" as m;
// ヘッダ内navメニュー
.header_nav{
  @include m.flex(center, center);
  position: relative;
  width: 4rem;
  height: 4rem;
  @include m.screen_for(medium){
    @include m.flex(flex-end, center);
  }
  .nav{
    position: absolute;
    width: 100%;
    .nav_list{
      top: v.$header-height;
      .nav_items{
        display: block;
        position: fixed;
        width: 0;
        height: 100%;
        right: 0px;
        margin-top: 1rem;
        transition: 0.3s;
        z-index: 1;
        visibility: hidden;
        overflow-y: hidden;
        background: v.$color-theme-3;
        .nav_item{
          @include m.flex(center, center);
          padding-top: 1rem;
          padding-bottom: 1rem;
          padding-left: 3rem;
          padding-right: 3rem;
          .nav_link{
            font-size: 2rem;
            color: v.$color-theme-0;
            text-decoration: none;
          }
        }
      }
    }
    &.is_open{
      .nav_list{
        .nav_items{
          width: 100%;
          height: 100%;
          transition: 0.3s;
          visibility: visible;
          overflow-y: auto;
        }
      }
    }
  }
}

// モバイル表示時用のハンバーガーメニューボタン
.hamburger_menu{
  @include m.flex(center, center);
  width: 3rem;
  height: 3rem;
  margin: auto;
  border: solid 1px v.$color-theme-4;
  background-color: v.$color-theme-3;
}
// ハンバーガーメニュー
.hamburger_icon {
  position: relative;
  width: 20px;
  // ハンバーガーメニューの中央ライン
  border-top: 2px solid v.$color-theme-8;
  // ハンバーガーメニューの上下ライン共通
  &::before,
  &::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: 20px;
    height: 2px;
    border-top: 2px solid v.$color-theme-8;
    background: currentColor;
    transition: 0.3s;
  }
  &::before{
    // ハンバーガーメニューの上ライン位置
    margin-top: -11px;
  }
  &::after{
    // ハンバーガーメニューの下ライン位置
    margin-top: 7px;
  }
}
// メニューopen時のハンバーガーメニューの[✕]化の動作
.nav.is_open{
  .hamburger_icon{
    border-top-color: transparent;
    &::before {
      transform: rotate(135deg);
      top: 9px;
    }
    &::after {
      transform: rotate(-135deg);
      top: -9px;
    }
  }
}

// タブレット幅以上の表示
@include m.screen_for(medium){
  .header_nav{
    max-height: 3rem;
    margin-left: auto;
    .nav{
      width: auto;
      margin-right: 3rem;
      .nav_list{
        top: 1rem;
        .nav_items{
          @include m.flex(center, center);
          visibility: visible;
          position: relative;
          width: auto;
          height: auto;
          padding-top: 0;
          gap: 1rem;
          transition: 0s;
          background: v.$color-theme-6;
          .nav_item{
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            .nav_link{
              font-size: v.$text-lg;
            }
          }
        }
      }
    }
  }
  // タブレット幅以上の場合、モバイル用ハンバーガーメニューは非表示
  .hamburger_menu{
    display: none;
  }
}
</style>

<script setup lang="ts">
  // ハンバーガーメニューopen時にbodyをスクロールロックする準備
  import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
  import sweetScroll from 'sweet-scroll'

  // ハンバーガーメニューのopen/close状態
  let openNavMenuState = ref(false)

  // DOM要素が作成された直後に実行
  onMounted(() => {
    const body = document.querySelector<HTMLElement>('body')
    const mobileMenuButton = document.querySelector<HTMLElement>('#js_hamburger_menu')

    // ハンバーガーメニューclick時に、メニューをopen/closeする
    const handleOpenNavMenuState = () => {
      // トグル処理: trueならfalse、falseならtrueに
      openNavMenuState.value = !openNavMenuState.value
      // 背景をスクロールロックする
      pageScrollLock(openNavMenuState.value)
    }

    // Navメニューのクリック時のページ内スクロール
    const pageScrollerNavMenu = new sweetScroll({
      trigger: '[data-scroll-nav]',
      duration: 500,
      before: () => {
        // ハンバーガーメニューオープン時はメニューを閉じる
        (openNavMenuState.value === true) ? (() => {
          handleOpenNavMenuState()
        })() : (() => {
          return false
        })()
      }
    });

    // 背景(body要素以下)のスクロールをロックする
    const pageScrollLock = (isLock: boolean) => {
      if(isLock){
        // '!' は、bodyがnullなら何もしない修飾子。付けないとTSLINTの警告が出る
        disableBodyScroll(body!)
      }else{
        enableBodyScroll(body!)
      }
    }

    // ハンバーガーメニューのclick時
    const clickMobileMenu = (() => {
      mobileMenuButton!.addEventListener('click', () => {
        handleOpenNavMenuState()
      })
    })()
  })

  onUnmounted(() => {
    clearAllBodyScrollLocks();
  })
</script>
