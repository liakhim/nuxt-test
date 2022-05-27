<template>
  <div class="cookies" v-if="show">
    <div class="cookies__wrap">
      <h5 class="p--title">
        <img src="../assets/img/cookies/cookies.png" alt="cookie">
        Cookie
      </h5>
      <p>
        We use cookies and other similar technologies “Cookies" on our websites and services to enhance your experience and to provide you with relevant...
      </p>
      <button class="cookies__close" @click="close">
        <img src="../assets/img/cookies/cross.png" alt="close cookie">
      </button>
      <div class="buttons">
        <button class="button-accept" @click="accept">Accept</button>
        <button class="button-close" @click="close">Close</button>
      </div>
    </div>
    <div class="cookies__second"></div>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'Cookies',
    data () {
      return {
        show: true,
        cookie_name: 'convertbomb_cookie_accepted'
      }
    },
    mounted () {
      if (document.cookie.split(';').find(s => s.startsWith(' ' + this.cookie_name) || s.startsWith(this.cookie_name))) {
        this.show = false
      }
    },
    methods: {
      accept () {
        this.show = false
        const date = new Date(Date.now() + 86400e3 * 365) // 1 year
        document.cookie = this.cookie_name + '=true; expires=' + date.toUTCString()
      },
      close () {
        this.show = false
      }
    }
  }
</script>
<style lang="scss">
  .cookies {
    max-width: 412px;
    position: fixed;
    bottom: 69px;
    right: 38px;
    display: flex;
    justify-content: center;
    z-index: 2000;
    .cookies__wrap {
      padding: 20px 30px;
      background: #FFFFFF;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      row-gap: 15px;
      z-index: 3;
      p {
        font-family: "SF UI Text", sans-serif;
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: #747474;
      }
      .p--title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-family: "SF UI Text", sans-serif;
        font-weight: 500;
        font-size: 1.0625rem;
        line-height: 1.25rem;
        text-align: left;
        color: #3D3D3D;
        img {
          margin-right: 14px;
          margin-top: 2px;
          max-width: 20px;
        }
      }
      .cookies__close {
        position: absolute;
        right: 3px;
        top: 10px;
      }
    }
    .cookies__second {
      position: absolute;
      height: 121px;
      width: 390px;
      content: '';
      top: -6px;
      left: 11px;
      z-index: 2;
      border-radius: 5px;
      background: #F7F7F7;
    }
    .buttons {
      .button-accept {
        border: 1px solid #1BB469;
        border-radius: 12px;
        color: #1BB469;
        line-height: 30px;
        padding: 0 20px;
        font-size: 13px;
      }
      .button-close {
        border: 1px solid #A5A5A5;
        border-radius: 12px;
        color: #2B2B2B;
        line-height: 30px;
        padding: 0 20px;
        margin-left: 10px;
        font-size: 13px;
      }
    }
  }

</style>
