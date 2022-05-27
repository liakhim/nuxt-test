<template>
  <div>
    <Header :user-authorization="userAuthorization" />
    <div class="content">
      <slot></slot>
    </div>
    <Cookie/>
    <Footer/>
  </div>
</template>
<script>
  import Header from '../Header.vue';
  export default {
    name: 'LandingLayout',
    components: {
      Header
    },
    data () {
      return {
        show: true,
        userAuthorization: false,
        cookie_name: 'convertbomb_cookie_accepted',
        auth_cookie_name: 'access_token',
        ref_id_params_name: 'ref_id',
        ref_id_cookie_name: 'REFID'
      }
    },
    mounted () {
      if (document.cookie.split(';').find(s => s.startsWith(' ' + this.cookie_name) || s.startsWith(this.cookie_name))) {
        this.show = false
      }
      if (document.cookie.split(';').find(s => s.startsWith(' ' + this.auth_cookie_name) || s.startsWith(this.auth_cookie_name))) {
        this.userAuthorization = true
      }
      const url = new URL(document.location.href)
      if (url.searchParams.get(this.ref_id_params_name)){
        if (!document.cookie.split(';').find(s => s.startsWith(' ' + this.ref_id_cookie_name) || s.startsWith(this.ref_id_cookie_name))) {
          const DateExp = new Date(Date.now() + 86400e3*30) // 30 days
          const hostname = document.location.hostname.split('.').slice(-2).join('.')
          document.cookie = `${this.ref_id_cookie_name}=${url.searchParams.get(this.ref_id_params_name)}; domain=${hostname}; path=/ ;expires=${DateExp.toUTCString()};`
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "~bootstrap/scss/bootstrap-grid.scss";
  @import "styles/_settings.scss";
  @import "styles/_pros.scss";
  @import "styles/_plans.scss";
  @import "styles/_slide.scss";
  @import "styles/_tools.scss";
  @import "styles/_trial.scss";
  @import "styles/_reviews.scss";
  @import "styles/_banner.scss";
  .content {
    margin-top: 70px;
    @media (max-width: 769px) {
      margin-top: 70px;
    }
  }
</style>
