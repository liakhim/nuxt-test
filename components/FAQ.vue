<template>
  <section class="FAQ MainLayoutMain">
    <div class="FAQContainer">
      <div class="FAQTitle">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="FAQMain">
        <div class="FAQLeft">
          <div class="FAQTabs">
            <div class="FAQTab"
                 v-for="tab of FAQTabs" :key="tab.name"
                 @click="setCurrentTab(tab.name)"
                 :class="{ FAQTabActive: currentFAQTab === tab.name }">
              <div class="FAQTabBorder"
                   :class="{ FAQTabBorderActive: currentFAQTab === tab.name }">
              </div>
              {{ tab.name }}
            </div>
          </div>
        </div>
        <div class="FAQQuestions">
          <div class="FAQQuestion"
               v-for="(question, index) of currentQuestions" :key="question.question"
               :class="{ FAQOpened: currentFAQQuestion === question }"
               @click="currentFAQQuestion = question">
            <div v-show="currentFAQQuestion !== question && index === 0" class="FAQQuestionBorder"></div>
            <div class="FAQQuestionContainer smooth-show">
              <div class="FAQQuestionText">
                <h4 class="FAQQuestionQuestion">{{ question.question }}</h4>
                <p class="FAQQuestionAnswer" v-show="currentFAQQuestion === question">{{ question.answer }}</p>
              </div>
              <img src="../assets/img/main/dropArrow.svg" alt="OpenAnswer" :class="{ FAQArrowOpened: currentFAQQuestion === question }">
            </div>
            <div v-show="currentFAQQuestion !== question && currentFAQQuestion !== currentQuestions[index + 1]" class="FAQQuestionBorder"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        currentFAQTab: '',
        currentFAQQuestion: '',
        FAQTabs: [
          {
            name: 'Trial terms',
            data: [
              {
                question: 'Do I need a Credit Card to get the 14-day Free Trial?',
                answer: 'No credit card is required to register for a free trial.'
              },
              {
                question: 'Can I test all features during the trial?',
                answer: 'Yes, we provide the 14-day Free Trial with unlimited access to all of Convertbomb’s features.'
              },
              {
                question: 'What can I do during the trial period?',
                answer: 'The Free 14-day Trial allows you to connect 1 ad account and test all features.'
              },
              {
                question: 'Can my trial be extended if I need more time for making the final decision?',
                answer: 'If you need more time for deciding whether the service is the right fit you can inquire for additional 7 days from our Support Team.'
              }
            ]
          },
          {
            name: 'Payments',
            data: [
              {
                question: 'What forms of payment do you accept?',
                answer: 'You can purchase the subscription using a Paypal account or a Credit Card.'
              },
              {
                question: 'What is your pricing model?',
                answer: 'The price is determined based on the number of connected Ad Accounts. If you want to manage more accounts in ConvertBomb, you can upgrade your subscription at any time.'
              },
              {
                question: 'How do I get charged?',
                answer: 'There is no ad spend limit for using the service. You will only be charged according to the terms of the subscription plan you chose. All Convertbomb features are available regardless of the selected plan.'
              }
            ]
          },
          {
            name: 'Subscription ',
            data: [
              {
                question: 'What happens after the trial expires?',
                answer: 'Once your Free 14-day Trial period expires your account will automatically be switched to the Free package. This package provides you with free of charge access to the Interest Explorer feature, other features are available only with the paid subscription.'
              },
              {
                question: 'How can I unsubscribe?',
                answer: 'You can cancel your subscription at any time by clicking Unsubscribe button located in the Billing tab of your Profile section. Your subscription will last until the end of the current billing cycle.'
              },
              {
                question: 'What are the benefits of an annual subscription?',
                answer: 'An annual subscription gives you a 20% discount for the service which technically equals to 2 months of free service usage. In case you decide to cancel your annual subscription until it expires, the refund will be recalculated based on the price without the discount applied.'
              }
            ]
          }
        ]
      }
    },
    computed: {
      currentQuestions () {
        return this.FAQTabs.find(question => question.name === this.currentFAQTab)?.data
      }
    },
    methods: {
      setCurrentTab (tabName) {
        this.currentFAQTab = tabName
        if (this.currentQuestions) {
          this.currentFAQQuestion = this.currentQuestions[0]
        }
      }
    },
    mounted () {
      this.currentFAQTab = this.FAQTabs[0].name
      if (this.currentQuestions) {
        this.currentFAQQuestion = this.currentQuestions[0]
      }
    }
  }
</script>
<style lang="scss">
  .FAQ {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 160px auto 0 auto;
    transition: all 0.33s ease;
    .FAQContainer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      row-gap: 60px;
      max-width: 100%;
      transition: all 0.33s ease;
      .FAQTitle {
        align-self: flex-start;
        flex-grow: 1;
        h2 {
          font-family: 'SF UI Text', sans-serif;
          font-weight: 500;
          font-size: 2.25rem;   // 36px
          line-height: 2.75rem; // 44px;
          color: #1C2445;
        }
      }
      .FAQMain {
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        column-gap: 90px;
        margin-bottom: 90px;
        .FAQLeft {
          display: flex;
          flex-direction: column;
          row-gap: 45px;
          width: 22rem;
          p {
            font-family: 'SF UI Display', sans-serif;
            font-size: 1rem;    // 16px
            line-height: 1.5;   // 24px
            color: #4E4E4E;
          }
          .FAQTabs {
            display: flex;
            flex-direction: column;
            row-gap: 5px;
            width: 100%;
            .FAQTab {
              display: flex;
              align-items: center;
              border-radius: 4px;
              width: 100%;
              height: 46px;
              cursor: pointer;

              font-family: 'SF UI Text', sans-serif;
              font-size: 1rem;        // 16px
              line-height: 2.375rem;  // 38px
              color: #1C2445;
              .FAQTabBorder {
                width: 2px;
                height: 100%;
                margin-right: 18px;
              }
              .FAQTabBorderActive {
                background: #FF4639;
              }
            }
            .FAQTabActive {
              background: #F8F9FB;
            }
          }
        }
        .FAQQuestions {
          width: 981px;
          border-radius: 10px;
          .FAQQuestion {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            .FAQQuestionContainer {
              display: flex;
              justify-content: space-between;
              padding: 30px 40px;
              .FAQQuestionText {
                display: flex;
                flex-direction: column;
                row-gap: 5px;

                .FAQQuestionQuestion {
                  font-family: 'SF UI Text', sans-serif;
                  font-weight: 400;
                  font-size: 1.125rem; // 18px
                  line-height: 2.75rem; // 44px
                  color: #1C2445;
                }

                .FAQQuestionAnswer {
                  font-family: 'SF UI Text', sans-serif;
                  font-size: 0.9375rem; // 15px
                  line-height: 1.5; // 24px
                  color: #7C7C7C;
                  hyphens: initial;
                }
              }
              img {
                justify-self: flex-start;
                max-height: 44px;
                max-width: 44px;
                transform: rotate(180deg);
                transition: 250ms;
              }
              .FAQArrowOpened {
                transform: rotate(0deg);
              }
            }
            .FAQQuestionBorder {
              width: 100%;
              height: 1px;
              background: #E7E7E7;
            }
          }
        }
        .FAQOpened {
          background: #FFFFFF;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
          border-radius: 10px;
        }
      }
    }
  }

  // @import 'faq_tablet'; Unused
  // @import 'faq_mobile';
  @media screen and (max-width: 899px) {
    .FAQ {
      margin-top: 0;
      .FAQContainer {
        row-gap: 20px;
        padding: 0 10px;
        .FAQTitle {
          h2 {
            font-size: 2rem;
          }
        }
        .FAQMain {
          max-width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          row-gap: 32px;
          .FAQLeft {
            display: flex;
            flex-direction: column;
            row-gap: 45px;
            width: 100%;
            max-width: 100%;
            .FAQTabs {
              display: flex;
              flex-direction: column;
              row-gap: 5px;
              width: 100%;
              max-width: 100%;
              padding: 0 0 0 20px;
            }
          }
          .FAQQuestions {
            width: 100%;
            .FAQQuestion {
              .FAQQuestionContainer {
                .FAQQuestionText {
                  row-gap: 25px;

                  .FAQQuestionQuestion {
                    line-height: 1.5rem; // 24px
                  }
                }
              }
            }
          }
        }
      }
    }
  }


</style>
