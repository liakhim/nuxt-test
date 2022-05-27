<template>
  <section class="social-section">
    <div class="blocks">
      <div class="social-block">
        <div class="image instagram">
          <img src="../assets/img/social-block/instagram.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image twitter">
          <img src="../assets/img/social-block/twitter.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image facebook">
          <img src="../assets/img/social-block/facebook.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image linkedin">
          <img src="../assets/img/social-block/linkedin.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image tiktok">
          <img src="../assets/img/social-block/tiktok.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image">
          <img src="../assets/img/social-block/g-network.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image snapchat">
          <img src="../assets/img/social-block/snapchat.svg" alt="">
        </div>
      </div>
    </div>
    <div class="blocks fantom">
      <div class="social-block">
        <div class="image instagram">
          <img src="../assets/img/social-block/instagram.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image twitter">
          <img src="../assets/img/social-block/twitter.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image facebook">
          <img src="../assets/img/social-block/facebook.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image linkedin">
          <img src="../assets/img/social-block/linkedin.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image tiktok">
          <img src="../assets/img/social-block/tiktok.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image">
          <img src="../assets/img/social-block/g-network.svg" alt="">
        </div>
      </div>
      <div class="social-block">
        <div class="image snapchat">
          <img src="../assets/img/social-block/snapchat.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  .social-section {
    width: 100%;
    position: relative;
    max-width: 1840px;
    .blocks {
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding: 100px 10px 40px;
      .social-block {
        width: 14.3%;
        min-width: 100px;
        max-width: 180px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .image {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          @media (max-width: 1500px) {
            width: 90%;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .fantom {
    position: absolute;
    left: 100%;
    display: none!important;
  }
  @media (max-width: 840px) {
    .fantom {
      display: flex!important;
      width: calc(120 * 7) + px;
      left: calc(120 * 7) + px;
      top: 0;
    }
    .social-section {
      transition: 1s;
      justify-content: flex-start;
      overflow: hidden;
      .blocks {
        width: calc(120 * 7) + px;
        padding: 80px 0 0 0;
        animation: 20s linear infinite slideRotate;
        .social-block {
          width: 120px;
          .image {
            img {
              width: 90%;
            }
          }
        }
      }
    }
  }
  @keyframes slideRotate {
    0% {
      transform: translateX(0);
    }
    100% {
      // display: none;
      transform: translateX(-100%);
    }
  }

</style>
