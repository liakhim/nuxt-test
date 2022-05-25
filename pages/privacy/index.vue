<template>
  <LandingLayout>
    <template>
      <main class="privacy-wrapper">
        <div class="privacy-first-block">
          <div class="privacy-first-block-container">
            <div class="image">
              <div class="icon">
                <img src="../../assets/img/privacy/lock.svg" alt="">
              </div>
              <div class="text">
                <p>Privacy</p>
                <p>policy</p>
              </div>
            </div>
          </div>
        </div>
        <div class="privacy privacy-container">
          <div class="navigation-field">
            <ul class="navigation-field-list">
              <li class="navigation-field-list-item"
                  :class="{ active: coords['first'] === Math.min(...Object.values(coords)) || !coords['first'] }"
                  @click="scrollTo('first')">
                <a>ConvertBomb Privacy Policy</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['second'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('second')">
                <a>What this Privacy Policy covers</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['third'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('third')">
                <a>Children under 13 years of age</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['fourth'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('fourth')">
                <a>Changes or updates to Convert...</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['fifth'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('fifth')">
                <a>Information that ConvertBomb...</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['sixth'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('sixth')">
                <a>How Personal Information may be...</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active: coords['seventh'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('seventh')">
                <a>Security of Personal Information</a>
              </li>
              <li class="navigation-field-list-item"
                  :class="{ active:coords['eighth'] === Math.min(...Object.values(coords)) }"
                  @click="scrollTo('eighth')">
                <a>Contact us</a></li>
            </ul>
          </div>
          <div class="canvas-field">
            <div class="text-block" id="first">
              <div class="text-block-title">
                <h3>ConvertBomb Privacy Policy</h3>
              </div>
              <div class="text-block-content">
                <p>We at ConvertBomb know that you care about how your personal information is used and shared.
                  We take your privacy seriously. Please read the following to learn more about ConvertBomb
                  Privacy Policy (“Privacy Policy”).</p>
                <p>By using or accessing the Services in any manner, you acknowledge that you accept the
                  practices and policies outlined in this Privacy Policy, and you hereby consent that we will
                  collect, use, and share your information in the following ways.</p>
              </div>
            </div>
            <div class="text-block" id="second">
              <div class="text-block-title">
                <h3>What this Privacy Policy covers</h3>
              </div>
              <div class="text-block-content">
                <p>This Privacy Policy covers our treatment of personally identifiable information (“Personal
                  Information”) that we gather when you are accessing or using our Services, but not to the
                  practices of companies we don’t own or control, or people that we don’t manage. We gather
                  various types of Personal Information from our users, as explained in more detail below, and
                  we use this Personal Information internally in connection with our Services, including to
                  personalize, provide, and improve our services, to allow you to set up a user account and
                  profile, to contact you and allow other users to contact you, to fulfill your requests for
                  certain products and services, and to analyze how you use the Services. In certain cases, we
                  may also share some Personal Information with third parties, but only as described
                  below.</p>
              </div>
            </div>
            <div class="text-block" id="third">
              <div class="text-block-title">
                <h3>Children under 13 years of age</h3>
              </div>
              <div class="text-block-content">
                <p>We do not knowingly collect or solicit personal information from anyone under the age of 13.
                  If you are under 13, please do not attempt to register for the Services or send any personal
                  information about yourself to us. If we learn that we have collected personal information
                  from a child under age 13, we will delete that information as quickly as possible. If you
                  believe that a child under 13 may have provided us personal information, please contact us
                  at support@convertbomb.com</p>
              </div>
            </div>
            <div class="text-block" id="fourth">
              <div class="text-block-title">
                <h3>Changes or updates to ConvertBomb Privacy Policy</h3>
              </div>
              <div class="text-block-content">
                <p>We’re constantly trying to improve our Services, so we may need to change this Privacy Policy
                  from time to time. You will be alerted about them on this page or by email. Please note that
                  if you’ve opted not to receive legal notice emails from us (or you haven’t provided us with
                  your email address), those legal notices will still govern your use of the Services, and you
                  are still responsible for reading and understanding them. If you use the Services after any
                  changes to the Privacy Policy have been posted, that means you agree to all of the changes.
                  Use of information we collect now is subject to the Privacy Policy in effect at the time
                  such information is collected.</p>
              </div>
            </div>
            <div class="text-block" id="fifth">
              <div class="text-block-title">
                <h3>Information that ConvertBomb collects</h3>
              </div>
              <div class="text-block-content">
                <p>We obtain Personal Information relating to you from various sources described below. Where
                  applicable, we indicate whether and why you must provide us with your Personal Information,
                  as well as the consequences of failing to do so. If you do not provide Personal Information
                  when requested, you may not be able to benefit from our Service if that information is
                  necessary to provide you with the service or if we are legally required to collect it.</p>
              </div>
            </div>
            <div class="list-block">
              <div class="list-block-title">
                <h4>1. Information you provide us with:</h4>
              </div>
              <div class="list-block-content">
                <ul>
                  <li>
                    <span>a.</span>
                    <p>If you desire to have access to certain restricted sections of the Site or request to
                      receive marketing materials, you may be required to become a registered user, and to
                      submit the following types of Personal Information to us: your name, email address,
                      phone number, full user name, password, city, and time zone.</p>
                  </li>
                  <li>
                    <span>b.</span>
                    <p>We may collect information through your communications with our customer support team
                      or other communications that you may send us and their contents.</p>
                  </li>
                  <li>
                    <span>c.</span>
                    <p>When you make payments through the Service, you will need to provide Personal
                      Information such as your credit card number and billing address.</p>
                  </li>
                  <li>
                    <span>d.</span>
                    <p>In order to allow you to manage your social media ad platforms, we may ask you to
                      provide your username, account ids, social handle, timezones, email address and
                      other information. This data will only be used by us to provide you with the Service
                      you expect and will not be shared with any third parties.</p>
                  </li>
                  <li>
                    <span>e.</span>
                    <p>We may allow you to connect a Facebook page or profile to your ConvertBomb account,
                      in which case we will access certain information from Facebook regarding your
                      account. This data will only be used by ConvertBomb to provide you with the Service
                      you expect and will not be shared with any third parties.</p>
                  </li>
                  <li>
                    <span>f.</span>
                    <p>We may also collect your contact details when you provide them in the context of our
                      customer, vendor, and partner relationships.
                    </p>
                  </li>
                </ul>
              </div>
              <div class="list-block-title">
                <h4>2. Information collected automatically</h4>
              </div>
              <div class="list-block-content">
                <p>If you desire to have access to certain restricted sections of the Site or request to receive
                  marketing materials, you may be required to become a registered user, and to submit the
                  following types of Personal Information to us: your name, email address, phone number, full
                  user name, password, city, and time zone.</p>
              </div>
            </div>
            <div class="text-block" id="sixth">
              <div class="text-block-title">
                <h3>How Personal Information may be used</h3>
              </div>
              <div class="text-block-content">
                <p>We neither rent nor sell your Personal Information in personally identifiable form to anyone.
                  However, we may share your Personal Information with third parties as described in this
                  section.</p>
                <p>Information that’s no longer personally identifiable: We may anonymize your Personal
                  Information so that you are not individually identified, and provide that information to our
                  partners. We may also provide aggregate usage information to our partners, who may use such
                  information to understand how often and in what ways people use our Services, so that they,
                  too, can provide you with an optimal online experience. However, we never disclose aggregate
                  usage information to a partner in a manner that would identify you personally, as an
                  individual.</p>
                <p>We use Google Analytics to help analyze how Users use the Service. Google Analytics uses
                  cookies to collect information such as how often Users visit the Service, what pages they
                  visit, and what other sites they used prior to coming to the Service. We use the information
                  we get from Google Analytics only to improve our Service. Google Analytics collects the IP
                  address assigned to you on the date you visit the Service, but not your name or other
                  personally identifying information. We do not combine the information generated through the
                  use of Google Analytics with your Personal Information. Although Google Analytics plants a
                  persistent Cookie on your web browser to identify you as a unique User the next time you
                  visit the Service, the Cookie cannot be used by anyone but Google. Google’s ability to use
                  and share information collected by Google Analytics about your visits to the Service is
                  restricted by the Google Analytics Terms of Use and the Google Privacy Policy.</p>
                <p>Advertisers: We allow advertisers and/or merchant partners (“Advertisers”) to choose the
                  demographic information of users who will see their advertisements and/or promotional offers
                  and you agree that we may provide any of the information we have collected from you in
                  non-personally identifiable form to an Advertiser, in order for that Advertiser to select
                  the appropriate audience for those advertisements and/or offers. Note that if an advertiser
                  asks us to show an ad to a certain audience or audience segment and you respond to that ad,
                  the advertiser may conclude that you fit the description of the audience they were trying to
                  reach.</p>
                <p>Affiliated Businesses: In certain situations, businesses or third party websites we’re
                  affiliated with may sell or provide products or services to you through or in connection
                  with the Services (either alone or jointly with us). You can recognize when an affiliated
                  business is associated with such a transaction or service, and we will share your Personal
                  Information with that affiliated business only to the extent that it is related to such
                  transaction or service. One such service may include the ability for you to automatically
                  transmit Third Party Account Information to your Services profile or to automatically
                  transmit information in your Services profile to your third party account; for example, the
                  list of your Facebook advertising account, your name and country. We have no control over
                  the policies and practices of third party websites or businesses as to privacy or anything
                  else, so if you choose to take part in any transaction or service relating to an affiliated
                  website or business, please review all such business’ or websites’ policies.</p>
                <p>Agents: We employ other companies and people to perform tasks on our behalf and need to share
                  your information with them to provide products or services to you; for example, we currently
                  use PayPal as a payment system. Unless we tell you differently, our agents do not have any
                  right to use the Personal Information we share with them beyond what is necessary to assist
                  us.</p>
                <p>Business Transfers: We may choose to buy or sell assets. In these types of transactions,
                  customer information is typically one of the business assets that would be transferred.
                  Also, if we (or our assets) are acquired, or if we go out of business, enter bankruptcy, or
                  go through some other change of control, Personal Information could be one of the assets
                  transferred to or acquired by a third party.</p>
                <p>Legal disclaimer: Notwithstanding anything to the contrary, we reserve the right to share any
                  information (a) as required by law and/or to comply with a judicial proceeding, court order
                  or legal process served on Site; (b) when we believe that disclosure is necessary to protect
                  our rights; (c) if we believe that you are in violation of the Terms of Service of this
                  Privacy Policy or any other of our operating rules, code of conduct, policies and other
                  supplemental terms and conditions or documents that may be made available by us from time to
                  time.</p>
              </div>
            </div>
            <div class="text-block" id="seventh">
              <div class="text-block-title">
                <h3>Security of Personal Information</h3>
              </div>
              <div class="text-block-content">
                <p>We are very concerned about safeguarding the confidentiality of your Personal Information. We
                  employ administrative and electronic measures designed to appropriately protect your
                  Personal Information against accidental or unlawful destruction, accidental loss,
                  unauthorized alteration, unauthorized disclosure or access, misuse, and any other unlawful
                  form of processing of the Personal Information in our possession. Please be aware that no
                  security measures are perfect or impenetrable. We cannot guarantee that information about
                  you will not be accessed, viewed, disclosed, altered, or destroyed by breach of any of our
                  administrative, physical, and electronic safeguards, subject to requirements under
                  applicable law to ensure or warrant information security.</p>
                <p>We will make any legally-required disclosures of any breach of the security, confidentiality,
                  or integrity of your unencrypted electronically stored Personal Information to you via email
                  or conspicuous posting on our Site in the most expedient time possible and without
                  unreasonable delay, consistent with (i) the legitimate needs of law enforcement or (ii) any
                  measures necessary to determine the scope of the breach and restore the reasonable integrity
                  of the data system , and any other disclosures that may be required under applicable
                  law.</p>
                <p>We also take measures to delete your Personal Information or keep it in a form that does not
                  permit identifying you when this information is no longer necessary for the purposes for
                  which we process it, unless we are required by law to keep this information for a longer
                  period. When determining the retention period, we take into account various criteria, such
                  as the type of products and services requested by or provided to you, the nature and length
                  of our relationship with you, possible re-enrollment with our products or services, the
                  impact on the services we provide to you if we delete some information from or about you,
                  mandatory retention periods provided by law and the statute of limitations.</p>
              </div>
              <div class="text-block" id="eighth">
                <div class="text-block-title">
                  <h3>Contact us</h3>
                </div>
                <div class="text-block-content">
                  <p>If you have any questions or concerns regarding our privacy
                    policies, please contact us at support@convertbomb.com, and we will address your
                    concerns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
  </LandingLayout>
</template>
<script>
  export default {
    name: 'Privacy',
    data () {
      return {
        ids: [
          'first',
          'second',
          'third',
          'fourth',
          'fifth',
          'sixth',
          'seventh',
          'eighth',
          'nine',
          'ten',
          'eleven',
          'twelve',
          'thirteen',
          'fourteen',
          'fifteen',
          'sixteen',
          'seventeen',
          'eighteen',
          'nineteen'
        ],
        coords: {},
        activeId: 'first',
      }
    },
    head() {
      return {
        title: 'Choose the ConvertBomb Plan that will Work Best for You | ConvertBomb',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `ConvertBomb subscription pricing is based on the number of connected Ad accounts. Test the
            service during the trial plan and decide what plan you need.`
          }
        ]
      }
    },
    methods: {
      scrollTo (acc) {
        this.activeId = acc
        const element = document.getElementById(acc)
        const y = element.getBoundingClientRect().top + window.pageYOffset
        const rect = element.getBoundingClientRect()
        window.scrollTo({ top: y - 70, behavior: 'smooth' })
      },
      onScroll () {
        this.windowTop = window.top.scrollY
        const coords = {}
        this.ids.forEach(id => {
          const element = document.getElementById(id)
          if (element)
          {
            const rect = element.getBoundingClientRect()
            coords[id] = Math.abs(rect.y)
          }
        })
        this.coords = coords
      },
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    }
  }
</script>
<style lang="scss">
  .privacy-first-block {
    background: linear-gradient(102.66deg, #7B6FED 0%, #5348BD 56.04%);
    min-height: 230px!important;
    display: flex;
    align-items: center;
    &-container {
      width: 100%;
      max-width: 1366px;
      margin: auto;
    }
    .image {
      padding: 10px 10px 10px 58px;
      display: flex;
      align-items: center;
      width: 30%;
      font-family: "SF UI Text", sans-serif;
      font-weight: 500;
      .icon {
        img {
          width: 45px;
        }
      }
      .text {
        padding: 20px;
        p {
          font-family: "SF UI Text", sans-serif;
          font-size: 32px;
          color: #fff;
          line-height: 36px;
        }
      }
    }
  }
  @media (max-width: 1025px) {
    .privacy-first-block {
      min-width: auto;
      .container__bold {
        min-width: auto;
        .image {
          padding: 50px 30px 110px 30px;
        }
      }
    }
  }

  .privacy-wrapper {
    width: 100%;
    background-color: rgb(248, 249, 251);
    p, h3 , a , h4, span {
      font-family: "SF UI Display",sans-serif;
    }
    .privacy-container {
      max-width: 1366px;
      margin: auto;
      padding: 0 18px;
    }
    .privacy {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      font-family: "SF UI Display", sans-serif;
      position: relative;
      .navigation-field {
        width: 25%;
        position: absolute;
        height: 95%;
        margin-top: -50px;
        font-family: 'SF UI Display', sans-serif;
        &-list {
          position: sticky;
          top: 0;
          max-width: 290px;
          padding-top: 100px;
          width: 90%;
          &-item {
            min-height: 46px;
            display: flex;
            align-items: center;
            margin-bottom: 3px;
            border-left: 3px solid transparent;
            a {
              display: block;
              height: 100%;
              width: 100%;
              line-height: 38px;
              font-size: 16px;
              padding: 4px 20px;
              transition: 0.2s;
              color: #1C2445;
              font-weight: 400;
              @media (max-width: 1367px) {
                font-size: 14px;
              }
            }
            &:hover {
              border-left: 3px solid #F9F9F9;
              a {
                background: #F0F0F0;
              }
            }
          }
          .navigation-field-list-item.active {
            background: #F0F0F0;
            border-left: 3px solid #FF4639;
          }
        }
      }
      .navigation-field-fix {
        position: fixed;
        top: 0;
      }
      .canvas-field {
        width: 75%;
        max-width: 1000px;
        margin-left: auto;
        background: #fff;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 50px;
        margin-top: -70px;
        margin-bottom: 50px;
        .last-update {
          margin-bottom: 15px;
          &-text {
            color: #7c7c7c;
            font-size: 15px;
          }
        }
        .list-block {
          &-title {
            margin-bottom: 25px;
            h4 {
              font-weight: 500;
              font-size: 18px;
              line-height: 24px;
              color: #1C2445;
            }
          }
          &-content {
            padding: 0 0 35px 20px;
            p {
              font-size: 16px;
              line-height: 24px;
              color: #4E4E4E
            }
            ul {
              li {
                display: flex;
                align-items: flex-start;
                &:not(:last-child) {
                  margin-bottom: 25px;
                }
                span {
                  padding: 0 15px 0 0;
                  font-weight: 500;
                  line-height: 24px;
                  font-size: 18px;
                }
                p {
                  font-size: 16px;
                  line-height: 24px;
                  color: #4E4E4E
                }
              }
            }
          }
        }
      }
    }
    ::v-deep.footer {
      margin-top: 0;
    }
    //#seventh {
    //  padding-top: 450px;
    //  margin-top: -450px;
    //}
    //#eighth {
    //  padding-top: 450px;
    //  margin-top: -450px;
    //}
    @media (max-width: 1025px) {
      .privacy {
        .navigation-field {
          display: none;
        }
        .canvas-field {
          width: 100%;
          padding: 50px 30px;
          margin-top: -80px;
          box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
        }
      }
    }
    @media (max-width: 690px) {
      .privacy {
        .canvas-field {
          padding: 45px 15px;
        }
      }
    }
  }
  .text-block {
    margin-bottom: 50px;
    &-title {
      h3 {
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: 500;
        line-height: 48px;
        color: #1C2445
      }
    }
    &-content {
      p {
        margin-bottom: 28px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color: #4E4E4E;
        // white-space: pre-line;
        strong {
          font-size: 15px;
        }
      }
    }
  }

</style>
