<template>
  <section class="trialForm">
    <div class="section__title --withText">
      <h2>Start Your 14-day Free Trial</h2>
      <p>If you don’t see results within 14 days, we will extend your free trial</p>
    </div>
    <form class="email__form">
      <input v-model="email"
             type="text"
             placeholder="Enter your email">
      <button type="button"
              @click="redirectTo()"
              class="--light">Start free</button>
    </form>
  </section>
</template>
<script>
  export default {
    name: 'TrialForm',
    data () {
      return {
        email: ''
      }
    },
    methods: {
      redirectTo () {
        document.location.replace(process.env.NUXT_BASE_DASHBOARD_URL + 'registration/sign-in' + (this.email.length ? '?email=' + this.email : '' ))
      }
    }
  }
</script>
<style lang="scss">
  .trialForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 218px;
    margin-bottom: 220px;
    .section__title {
      row-gap: 20px;
      h2 {
        font-family: "SF UI Text", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2.25rem;
        line-height: 3rem;
        text-align: center;
        color: #1C2445;
      }
      p {
        font-family: "SF UI Display", sans-serif;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
        color: #4E4E4E;
      }
      margin-bottom: 55px;
    }
    .email__form {
      max-width: 450px;
      width: 100%;
      input {
        font-family: "Arial", sans-serif;
        font-size: 1rem;
        /* or 82% */
        display: flex;
        align-items: center;
        color: #727272;
      }
      button {
        font-family: "SF UI Display", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.44;
        text-align: center;
        color: #FFFFFF;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    .trialForm {
      margin-top: 145px;
      margin-bottom: 190px;
      .section__title {
        row-gap: 20px;
        h2 {}
        p {}
      }
      .email__form {
        input {}
        button {}
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .trialForm {
      margin-top: 165px;
      margin-bottom: 200px;
      .section__title {
        row-gap: 20px;
        h2 {}
        p {}
      }
      .email__form {
        input {}
        button {}
      }
    }
  }

  @media screen and (max-width: 720px) {
    .trialForm {
      margin-top: 65px;
      margin-bottom: 95px;
      .section__title {
        row-gap: 20px;
        h2 {}
        p {}
      }
      .email__form {
        input {}
        button {}
      }
    }
  }

</style>
