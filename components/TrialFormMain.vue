<template>
  <section class="trialFormMain">
    <div class="section__title --withText">
      <h2>Start Your 14-Day Free Trial</h2>
      <p>Drop the manual work and focus on what's really important</p>
    </div>
    <div class="email__form__wrapper">
      <form class="email__form">
        <input v-model="email" type="text" placeholder="Enter your email">
        <button type="button"
                @click="redirectTo()"
                class="--light">Start free</button>
      </form>
      <div class="card-info">
        <div class="icon">
          <img src="../assets/img/social-block/card-info.svg" alt="">
        </div>
        <div class="text">
          <p>No credit card required</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'TrialFormMain',
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
  .trialFormMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 120px;
    padding: 130px 0 200px;
    background: #F8F9FB;
    border-radius: 8px;
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
    .email__form__wrapper {
      max-width: 450px;
      width: 100%;
      .card-info {
        margin-top: 20px;
        padding: 6px 15px;
        display: inline-flex;
        align-items: flex-start;
        justify-content: flex-start;
        min-width: 200px;
        border: 1px solid #04B162;
        border-radius: 50px;
        .icon {
          width: 18px;
          height: 18px;
          margin-right: 10px;
          img {
            margin-top: 3px;
            width: 100%;
          }
        }
        .text {
          p {
            margin-top: 1px;
            color: #4E4E4E;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
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
    .trialFormMain {
      margin-bottom: 60px;
      padding: 60px 20px 60px;
    }
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
    .trialFormMain {
      margin-top: 65px;
      margin-bottom: 95px;
      .section__title {
        row-gap: 20px;
        h2 {
          font-size: 2rem;
          line-height: 38px;
        }
        p {}
      }
      .email__form {
        input {}
        button {}
      }
    }
  }

</style>
