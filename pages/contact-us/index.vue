<template>
  <LandingLayout>
    <div class="ContactUs">
      <main class="ContactUsMain">
        <div class="ContactUsText">
          <h2>Contact
            <br> Information</h2>
          <p>If you meet any problems while using our service,
            <br> please contact our support team via</p>
          <a href="mailto:support@convertbomb.com">
            <img src="../../assets/img/contact/message.svg" alt="Message">support@convertbomb.com
          </a>
          <p>If you have any questions regarding sales and
            <br> marketing, please contact us at</p>
          <a href="mailto:sales@convertbomb.com">
            <img src="../../assets/img/contact/message.svg" alt="Message">sales@convertbomb.com
          </a>
        </div>
        <form class="ContactUsForm" v-if="!result">
          <h3>Send us a message</h3>
          <p>We are eager to discuss your business needs and answer any questions you may have.
            <br> Write your details and we’ll get back to you shortly.</p>
          <div class="drop-down" :class="{'disabled': topicLoading}">
            <div class="selected" :class="{ 'focus': showDropdown }" @click.stop="toggleDropdown()">
              <div class="text" :class="{show: !!activeTopic}">
                <b>Category: </b>
                <span v-if="!!activeTopic">{{activeTopic.value}}</span>
                <span v-else>SELECT</span>
              </div>
              <div class="icon" :class="{'open': showDropdown}">
                <img src="../../assets/img/contact/chevrone-icon.svg" alt="">
              </div>
            </div>
            <div class="options" v-if="showDropdown" :class="{show: showDropdown}">
              <ul>
                <li v-for="topic in contact_us_categories">
                  <span @click="activeTopic = topic" class="value">{{topic.value}}</span>
                </li>
              </ul>
            </div>
          </div>
          <label class="ContactUsInputText"
                 :class="{'error': errors.length && getError('email')}">
            <input v-model="contactEmail"
                   @input="removeError('email')"
                   class="base-input"
                   type="email"
                   placeholder="Email address">
            <span v-if="errors.length && getError('email')"
                  :class="{show: errors.length && getError('email')}"
                  class="error">{{getError('email').detail[0]}}</span>
          </label>
          <div class="ContactUsFormFlex">
            <label class="ContactUsInputText"
                   :class="{'error': errors.length && getError('name')}">
              <input v-model="first_name"
                     @input="removeError('name')"
                     class="base-input"
                     type="text"
                     placeholder="First name">
              <span v-if="errors.length && getError('name')"
                    :class="{show: errors.length && getError('name')}"
                    class="error">{{getError('name').detail[0]}}</span>
            </label>
            <label class="ContactUsInputText"
                   :class="{'error': errors.length && getError('name')}">
              <input v-model="last_name"
                     class="base-input"
                     type="text"
                     placeholder="Last name">
            </label>
          </div>
          <label class="ContactUsTextArea" :class="{'error': errors.length && getError('message')}">
                <textarea name="comment"
                          @input="removeError('message')"
                          id="comment"
                          placeholder="Message"
                          v-model="comment"
                          cols="30"
                          rows="10"></textarea>
            <span v-if="errors.length && getError('message')" class="error"
                  :class="{show: errors.length && getError('message')}">{{getError('message').detail[0]}}</span>
          </label>
          <div class="captcha-block mb-2 col-12">
            <div class="captcha-block-content">
              <div class="g-recaptcha"
                   data-sitekey="6Le-KjoeAAAAAG3DcPIkIZ_CjTLNbbG6g6gE7uXa"></div>
            </div>
          </div>
          <label class="ContactUsCheckbox">
            <input :checked="terms"
                   v-model="terms"
                   type="checkbox"
                   :class="{ error: errors.length && getError('term') }">
            <span>I accept the terms of the User Agreement and give my consent to Convertbomb to process my personal information on the terms determined by the
            <NuxtLink to="privacy'">Privacy Policy.</NuxtLink>
          </span>
          </label>
          <button @click="createTicket()"
                  type="button"
                  :disabled="!terms || contact_us_categories.length === 0"
                  class="ContactUsButton">Send message
          </button>
        </form>
        <form v-else-if="result" class="ContactUsResponse" :class="{'show': result }">
          <img src="../../assets/img/contact/success.svg" alt="">
          <div>
            <h2>Success!</h2>
            <p>Your message has been sent.</p>
          </div>
        </form>
        <form v-else class="ContactUsResponse"> <!-- todo Нужно ли "Something is wrong" окно? -->
          <img src="../../assets/img/contact/error.svg" alt="">
          <div>
            <h2>Something is wrong</h2>
            <p>Failed to send your message. Reload the page or try again later.</p>
          </div>
        </form>
      </main>
    </div>
  </LandingLayout>
</template>
<script>
  export default {
    name: 'ContactUs',
    head() {
      return {
        title: 'Reach Out To Us | ConvertBomb',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `Launch profitable Facebook ad campaigns with less effort.  Analyze ads performance with
            interactive reports. Automate and optimize ad management with the intuitive automated rules.`
          }
        ]
      }
    },
    data () {
      return {
        val: '',
        terms: false,
        comment: '',
        result: false,
        first_name: '',
        last_name: '',
        contactEmail: '',
        dashboardUrl: 'test',
        topicLoading: false,
        errors: [],
        contact_us_categories: [],
        showDropdown: false,
        activeTopic: null,
        posts: [],
        dashboardApiUrl: 'https://convertbomb-api.fakebook.press'
      }
    },
    async fetch() {
      this.posts = await this.$axios.$get('/webapi/v2/contact-us-categories')
      Object.keys(this.posts.data).forEach((item) => {
        this.contact_us_categories.push({
          key: item,
          value: this.posts.data[item]
        })
        this.activeTopic = this.contact_us_categories[0]
      })
    },
    methods: {
      sendMessage () {
        this.$axios.$get('/webapi/v2/contact-us-categories')
      },
      onClick () {
        this.showDropdown = false
      },
      toggleDropdown () {
        if (!this.topicLoading) {
          this.showDropdown = !this.showDropdown
        }
      },
      getError (key) {
        if (this.errors.length) {
          return this.errors.find(v => {
            return v.source.parameter === key
          })
        }
        return false
      },
      removeError (key) {
        const err = this.errors.find(v => {
          return v.source.parameter === key
        })
        let index = this.errors.indexOf(err)
        if (index !== -1) {
          this.errors.splice(index, 1)
        }
      },
      createTicket () {
        const captcha = document.getElementById('g-recaptcha-response')['value'] || ''
        const data = {
          email: this.contactEmail,
          message: this.comment,
          name: `${this.first_name} ${this.last_name}`,
          terms: this.terms,
          topic: this.activeTopic.key,
          'g-recaptcha-response': captcha
        }
        this.$axios.$post(process.env.NUXT_BASE_URL + 'webapi/v2/contact-us', data).then(() => {
          this.result = true
        }).catch(e => {
          this.result = false
          e.response.data.errors.forEach(error => {
            this.errors.push(error)
          })
        })
      },
    },
    mounted () {
      window.addEventListener('click', this.onClick)
    }
  }
</script>
<style lang="scss">
  $input-border: #cccccc;
  $input-border-hover: #9ca1a6;
  $input-border-focus: #80bdff;
  $input-border-disabled: #cccccc;
  $input-placeholder-color: #777777;
  $red-light: #FF6050;
  $green:   #198754;
  $success: $green ;
  .ContactUs {
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding-top: 70px;
    width: 100vw;
    font-family: "SF UI Text", sans-serif;
    .base-input.error {
      &:hover {
        border: 1px solid $red-light;
      }
    }
    textarea {
      padding: 10px 50px 10px 10px;
      border: 1px solid $input-border;
      border-radius: 3px;
      transition: 0.3s;
      font-size: 14px;
      height: 120px;
      min-width: 100%;
      max-width: 100%;
      min-height: 34px;
      width: 100%;
      &:hover {
        border: 1px solid $input-border-hover;
      }
      &::placeholder {
        color: $input-placeholder-color;
      }
      &:focus {
        border: 1px solid $input-border-focus;
      }
      &:disabled {
        background: #F9F9F9;
        border: 1px solid #CCCCCC;
      }
    }
    .ContactUsMain {
      display: flex;
      width: calc(100% - 210px);
      max-width: calc(2048px - 210px);
      justify-content: space-between;
      margin: 55px 105px 10px calc(105px - (100vw - 100%));
      padding: 45px 195px;
      &::before {
        transform: translateX(-210px);
        top: 55px;
        position: absolute;
        content: "";
        width: calc(100% - 210px + 1rem);
        max-width: 1800px;
        height: calc(100% - 630px);
        border-radius: 8px;
        background-image: url("../../assets/img/contact/background.png");
        background-color: #F8F9FB;
        background-size: 726px;
        background-repeat: no-repeat;
        background-position: left 215px bottom;
      }
      .ContactUsText {
        padding-left: 25px;
        padding-right: 2rem;
        z-index: 10;
        width: 400px;
        h2 {
          margin-top: 45px;
          margin-bottom: 30px;

          font-family: 'SF UI Text', sans-serif;
          font-weight: 500;
          font-size: 2.375rem;    // 38px
          line-height: 2.8125rem; // 45px
          color: #1C2445;
        }
        p {
          margin-bottom: 8px;
          font-family: 'SF UI Text', sans-serif;
          font-size: 0.875rem;   // 14px
          line-height: 1.125rem; // 18px;
          color: #7C7C7C;
        }
        a {
          display: flex;
          margin-bottom: 27px;
          img {
            margin-right: 1rem;
          }
          font-family: 'SF UI Display', sans-serif;
          font-size: 0.875rem;   // 14px
          line-height: 1.625rem; // 26px;
          color: #4E4E4E;
        }
      }
      .ContactUsForm {
        width: 675px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        z-index: 10;
        padding: 40px 45px 35px 45px;
        background: #FFFFFF;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
        border-radius: 10px;
        h3 {
          font-family: 'SF UI Text', sans-serif;
          font-weight: 500;
          font-size: 1.5rem;      // 24px
          line-height: 1.8125rem; // 29px;
          color: #1C2445;
          margin-bottom: 15px;
        }
        p {
          font-family: 'SF UI Text', sans-serif;
          font-size: 0.875rem;  // 14px
          line-height: 1.25rem; // 20px;
          color: #7C7C7C;
          margin-bottom: 25px;
        }
        .ContactUsSelect {
          margin-bottom: 15px;
        }
        .ContactUsFormFlex {
          display: flex;
          width: 100%;
          justify-content: space-between;
          .ContactUsInputText {
            width: calc(50% - 7px);
            min-width: 285px;
          }
          .ContactUsInputText input {
            min-height: 55px;
            width: 100%;
            min-width: 285px !important;
          }
        }
        .ContactUsTextArea,
        .ContactUsInputText {
          margin-bottom: 15px
        }
        .ContactUsTextArea textarea,
        .ContactUsInputText input {
          min-width: 285px;
          min-height: 55px;
          background: #FFFFFF;
          box-sizing: border-box;
          border-radius: 12px;
        }
        .ContactUsTextArea textarea,
        .ContactUsInputText input {
          padding: 20px 20px 18px 20px;
          font-family: 'SF UI Text', sans-serif;
          font-size: 0.875rem; // 14px
          line-height: 1.0625; // 17px;
          letter-spacing: 0.03em;
        }
        .ContactUsInputText {
          min-height: 55px;
          .error {
            padding: 8px;
            font-size: 14px;
            color: #DC3545;
            display: none;
          }
          .error.show {
            display: flex;
          }
        }
        .ContactUsInputText.error {
          input {
            border: 1px solid #DC3545;
          }
        }
        .ContactUsTextArea {
          & > textarea {
            resize: none;
            min-height: 211px;
          }
          resize: none;
          min-height: 211px;
          margin-bottom: 20px;
          .error {
            padding: 8px;
            font-size: 14px;
            display: flex;
            color: #DC3545;
          }
        }
        .ContactUsTextArea.error {
          display: none;
          textarea {
            border: 1px solid #DC3545;
          }
        }
        .ContactUsTextArea.error.show {
          display: block;
          opacity: 1;
        }
        .ContactUsCheckbox {
          cursor: pointer;
          display: flex;
          align-items: flex-start;
          height: 36px;
          margin-bottom: 30px;
          margin-top: 20px;
          input {
            width: 20px;
            min-width: 20px;
            height: 20px;
            margin-right: 15px;
            appearance: none;

            background: #FFFFFF;
            border: 1px solid #9CA1A6;
            box-sizing: border-box;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
            border-radius: 4px;

            &:checked {
              background-color: #4489FF;
              background-image: url("../../assets/img/contact/check.svg");
              background-position: center;
              background-repeat: no-repeat;
              border: 1px solid #005DFB;
            }

          }
          .error {
            border-color: #FF6050;
          }
          span {
            font-family: 'SF UI Text', sans-serif;
            font-size: 0.75rem; // 12px
            line-height: 1.5;   // 18px
            letter-spacing: 0.03em;
            color: #282B31;
            position: absolute;
            margin-left: 33px;
            max-width: 540px;
            a {
              color: #2364BE;
            }
          }
        }
        .captcha-block {
          background: #F9F9F9;
          padding: 15px 20px;
          min-height: 110px;
        }
        .ContactUsCheckboxError {
          color: #DC3545;
          font-size: 0.8em;
          transform: translateY(-31px);
          padding: 0.5rem;
        }
        .ContactUsButton {
          width: 226px;
          height: 54px;
          background: linear-gradient(180deg, #1BB469 0%, #0F9D58 81.48%);
          border-radius: 4px;

          font-family: 'SF UI Text', sans-serif;
          font-weight: 500;
          font-size: 1rem;        // 16px
          line-height: 1.625rem;  // 26px
          text-transform: uppercase;
          color: #FFFFFF;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
          &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
          }
        }
        .success-message {
          img {
            width: 40px;
            height: 40px;
          }
          p {
            margin: 0;
            font-size: 18px;
            color: $success;
            font-weight: 500;
            padding: 0 10px;
          }
        }
      }
      .ContactUsResponse {
        z-index: 10;
        box-sizing: border-box;
        min-width: 675px;
        width: 50%;
        margin-bottom: 340px;
        background: #FFFFFF;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
        border-radius: 10px;
        padding: 122px 70px;
        display: none;
        img {
          width: 100px;
          height: 100px;
          margin-right: 34px;
        }
        h2 {
          font-family: 'SF UI Text', sans-serif;
          font-weight: 500;
          font-size:   1.375rem; // 22px
          line-height: 3rem;     // 48px
          color:       #1C2445;

          margin-bottom: 10px;
        }
        p {
          font-family: 'SF UI Display', sans-serif;
          font-size:   1rem;     // 16px
          line-height: 1.5rem;   // 24px
          color:       #4E4E4E;
        }
      }
      .ContactUsResponse.show {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 1700px) {
    .ContactUs {
      .ContactUsMain {
        // margin: 55px 1rem 10px calc(1rem - (100vw - 100%));
        // width: calc(100% - 2rem);
        padding: 45px 1rem;
        &::before {
          transform: translateX(0);
          left: 1rem;
          width: calc(100% - 2rem);
          background-position: left 1rem bottom;
        }
        .ContactUsText {
          padding-left: 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 1700px) {
    .ContactUs {
      .ContactUsMain {
        margin: 55px 80px 10px calc(1rem - (100vw - 100%));
        width: calc(100% - 80px);
        max-width: calc(100% - 80px);
        padding: 45px 80px 45px 1rem;
        &::before {
          transform: translateX(0);
          width: calc(100% - 80px);
          max-width: calc(100% - 80px);
          left: 40px;
          background-position: left 1rem bottom;
        }
        .ContactUsText {
          padding-left: 80px;
          width: auto;
        }
      }
    }
  }
  @media screen and (max-width: 1125px) {
    .ContactUs {
      .ContactUsMain {
        flex-direction: column;
        margin: 50px 20px 10px calc(1rem - (100vw - 100%));
        width: calc(100% - 20px);
        max-width: calc(100% - 20px);
        padding: 45px 10px;
        &::before {
          transform: translateX(0);
          left: 10px;
          height: calc(100% - 1100px);
          width: calc(100% - 20px);
          max-width: calc(100% - 20px);
          background-position: left 1rem bottom;
        }
        .ContactUsText {
          padding-left: 80px;
          padding-right: 0;
          width: 100%;
          h2 {
            margin-top: 0;
          }
        }
        .ContactUsForm {
          width: 100%;
          margin-left: 80px;
          padding: 40px 18px 30px;
          max-width: 675px;
          margin-top: 30px;
          .ContactUsFormFlex {
            display: flex;
            flex-direction: column;
            .ContactUsInputText {
              width: 100%;
            }
          }
          .ContactUsCheckbox {
            position: relative;
            height: auto;
            span {
              max-width: calc(100% - 50px);
            }
          }
          .ContactUsButton {
            width: 100%;
            margin-top: 50px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 769px) {
    .ContactUs {
      .ContactUsMain {
        flex-direction: column;
        margin: 50px 20px 10px calc(1rem - (100vw - 100%));
        width: calc(100% - 20px);
        max-width: calc(100% - 20px);
        padding: 45px 10px;
        &::before {
          transform: translateX(0);
          left: 10px;
          height: calc(100% - 1100px);
          width: calc(100% - 20px);
          max-width: calc(100% - 20px);
          background-position: left 1rem bottom;
        }
        .ContactUsText {
          padding-left: 0;
          padding-right: 0;
          width: 100%;
          h2 {
            margin-top: 0;
          }
        }
        .ContactUsForm {
          width: 100%;
          margin-left: 0;
          padding: 40px 18px 30px;
          max-width: 675px;
          margin-top: 30px;
          .ContactUsFormFlex {
            display: flex;
            flex-direction: column;
            .ContactUsInputText {
              width: 100%;
            }
          }
          .ContactUsCheckbox {
            position: relative;
            height: auto;
            span {
              max-width: calc(100% - 50px);
            }
          }
          .ContactUsButton {
            width: 100%;
            margin-top: 50px;
          }
        }
        .ContactUsResponse {
          min-width: 0;
          padding: 40px 20px;
          width: 100%;
        }
      }
    }
  }

</style>

