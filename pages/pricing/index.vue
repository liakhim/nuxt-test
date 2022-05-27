<template>
  <LandingLayout>
    <section class="Plans plans MainLayoutMain" v-if="plans">
      <div class="pros__container plans-title">
        <h3>Plans & Pricing</h3>
        <p>Choose the ConvertBomb plan that will work best for you</p>
      </div>
      <div class="pros__container plans-content">
        <div class="plans-content-tabs">
          <p class="period"
             @click="activePeriod = 'Monthly'"
             :class="{'active-period': activePeriod === 'Monthly'}">Monthly</p>
          <p class="period"
             @click="activePeriod = 'Annually'"
             :class="{'active-period': activePeriod === 'Annually'}">Annually</p>
          <div class="discount">
            <p>Save 20%</p>
          </div>
        </div>
        <template>
          <agile ref="carousel" class="plans-content-field" :options="options">
            <div class="slide d-flex justify-content-center"
                 v-for="(plan, index) in plans"
                 :key="index"
                 @click="switchSlide(index)"
                 style="overflow: hidden">
              <div :class="{'price-block-recommended': plan.label.length}"
                   class="price-block" style="margin: 0">
                <div v-if="plan.label.length" class="price-block-recommended-label">
                  <p>{{plan.label}}</p>
                </div>
                <div class="price-block-title">
                  <h4>{{plan.title}}</h4>
                </div>
                <div class="price-block-price">
                  <div class="number">
                    <p v-show="activePeriod === 'Monthly'">
                      <span class="smooth-show">{{plan.price}}</span>
                      <small>per month</small>
                    </p>
                    <p v-show="activePeriod === 'Annually'">
                      <span class="smooth-show">{{plan.annuallyPrice}}</span>
                      <small>per month</small>
                    </p>
                  </div>
                  <div class="description">
                    <p>{{plan.description}}</p>
                  </div>
                </div>
                <div class="price-block-features">
                  <div v-for="(feature, index) in plan.features" :key="index" class="line">
                    <div class="line-title">
                      <p>{{feature.name}}</p>
                    </div>
                    <div class="line-quantity">
                      <p>{{feature.quantity}}</p>
                    </div>
                  </div>
                </div>
                <div class="price-block-footer">
                  <button class="custom-button green">
                    <span style="margin-top: 3px">Start free</span>
                  </button>
                </div>
              </div>
            </div>
            <template slot="prevButton">
              <div class="prev-button">
                <img src="../../assets/img/plans/slider-chevrone.svg" alt="">
              </div>
            </template>
            <template slot="nextButton">
              <div class="next-button">
                <img style="transform: rotate(180deg)" src="../../assets/img/plans/slider-chevrone.svg" alt="">
              </div>
            </template>
          </agile>
        </template>
      </div>
      <div class="pros_container">
        <div class="contact-us-block">
          <div class="icon">
            <img src="../../assets/img/plans/info-icon-contact-us.svg" alt="">
          </div>
          <div class="text">
            <p>Looking for Larger or Agency Plans? <a href="/contact-us">Contact us</a></p>
          </div>
        </div>
      </div>
    </section>
    <FAQ/>
  </LandingLayout>
</template>
<script>
  export default {
    name: 'Pricing',
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
    data () {
      return {
        width: 0,
        plans: [
          {
            title: 'Personal',
            price: '99$',
            description: `Promote your personal
          brand efficiently and fast
          with less effort`,
            label: '',
            annuallyPrice: '79$',
            features: [
              {
                name: 'Ad accounts',
                quantity: '3'
              },
              {
                name: 'Spend per month',
                quantity: 'Unlimited'
              },
              {
                name: 'Features available',
                quantity: 'All'
              }
            ]
          },
          {
            title: 'Professional',
            price: '299$',
            description: `Increase your sales
          and reach more customers with your ads`,
            label: 'Recommended',
            annuallyPrice: '239$',
            features: [
              {
                name: 'Ad accounts',
                quantity: '10'
              },
              {
                name: 'Spend per month',
                quantity: 'Unlimited'
              },
              {
                name: 'Features available',
                quantity: 'All'
              }
            ]
          },
          {
            title: 'Business',
            price: '499$',
            description: `Automate and optimize multiple ad campaigns
          for your clients`,
            label: '',
            annuallyPrice: '399$',
            features: [
              {
                name: 'Ad accounts',
                quantity: '20'
              },
              {
                name: 'Spend per month',
                quantity: 'Unlimited'
              },
              {
                name: 'Features available',
                quantity: 'All'
              }
            ]
          }
        ],
        options: {
          autoplay: false,
          centerMode: true,
          dots: true,
          navButtons: true,
          slidesToShow: 1,
          initialSlide: 1,
          infinite: false,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                dots: false,
                centerMode: true,
                initialSlide: 1,
                navButtons: true
              }
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                dots: false,
                centerMode: true,
                initialSlide: 1,
                navButtons: true
              }
            }
          ]
        },
        activePeriod: 'Monthly',
      }
    },
    methods: {
      switchSlide (index) {
        if (this.width < 1366) {
          this.$refs.carousel.goTo(index)
        }
      }
    },
    mounted () {
      this.width = window.screen.width
    }
  }
</script>
<style lang="scss">
  .prev-button, .next-button {
    img {
      filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15))
    }
  }
  .agile {
    .agile__nav-button:disabled {
      opacity: 0.75;
      filter: grayscale(10);
    }
    .agile__actions {
      display: none;
      position: absolute;
      width: calc(100% + 60px);
    }
  }
  @media (max-width: 1024px) {
    .agile {
      position: relative;
      .agile__actions {
        //  display: none;
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: calc(100% + 20px);
      }
    }
  }
  @media (max-width: 890px) {
    ::v-deep.agile.agile__track {
      width: 100%!important;
    }
  }
  .plans {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 0 100px 0;
    font-family: "SF UI Text", sans-serif;
    margin: auto;
    &-title {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 90px;
      h3 {
        color: #1C2445;
        font-size: 36px;
        font-weight: 500;
        line-height: 44px;
      }
      p {
        padding: 15px 0;
        color: #4E4E4E;
        font-size: 16px;
        line-height: 24px
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #f8f8f8;
      border-radius: 8px;
      width: 100%;
      &-tabs {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        width: 100%;
        .period {
          border-bottom: 2px solid transparent;
          padding: 25px 0;
          cursor: pointer;
          color: #404249;
          line-height: 17px;
          font-size: 14px;
          font-weight: 500;
          &:not(:first-child) {
            margin: 0 0 0 40px;
          }
        }
        .active-period {
          border-bottom: 2px solid #FF4639;
        }
        .discount {
          border-radius: 10px;
          background: #EFEFEF;
          margin: 0 0 0 10px;
          p {
            font-size: 14px;
            line-height: 26px;
            padding: 4px 15px;
          }
        }
      }
      &-field {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1290px;
        padding: 66px 0 90px 0;
        width: 100%;
        .price-block {
          background: #fff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
          padding: 0 10px 10px;
          max-width: 370px;
          margin: 0 25px;
          border-radius: 10px;
          position: relative;
          border: 1px solid #fff;
          cursor: pointer;
          &-recommended-label {
            background: #6B5FDD;
            max-width: 220px;
            margin: auto;
            border-radius: 0 0 10px 10px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            p {
              color: #fff;
              text-align: center;
              font-size: 1em;
            }
          }
          &-title {
            padding: 40px 20px 20px 20px;
            h4 {
              color: #1C2445;
              font-family: "SF UI Text", sans-serif;
              font-size: 18px;
              font-weight: 500;
            }
          }
          &-price {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 10px 20px 40px;
            border-bottom: 1px solid #E4E4E4;
            .number {
              min-width: 90px;
              p {
                color: #1C2445;
                font-size: 35px;
                line-height: 35px;
                padding: 0 10px 0 0;
                font-weight: 400;
                font-family: "SF UI Display", sans-serif;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                small {
                  margin-top: 10px;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 18px;
                }
              }
            }
            .description {
              p {
                color: #7C7C7C;
                padding: 0 10px;
                font-size: 14px;
                line-height: 18px;
              }
            }
          }
          &-features {
            padding: 30px 20px;
            .line {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 5px 0;
              font-family: "SF UI Text", sans-serif;
              &-title {
                p {
                  color: #1C2445;
                  font-weight: 500;
                  line-height: 26px;
                }
              }
              &-quantity {
                p {
                  color: #4E4E4E;
                  line-height: 26px;
                  font-weight: 400;
                }
              }
            }
          }
          &-footer {
            background: #F9F9F9;
            padding: 30px 25px;
            border-radius: 10px;
            margin-top: 44px;
            button {
              // height: 30px;
              line-height: 40px;
            }
          }
        }
        .price-block-recommended {
          border: 1px solid #6B5FDD;
          .price-block-footer {
            margin-top: 88px;
          }
        }
      }
    }
    .contact-us-block {
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
      border-radius: 500px;
      background: #FFFFFF;
      height: 52px;
      margin-top: -26px;
      padding: 0 12px;
      .icon {
        width: 32px;
        height: 32px;
        img {
          width: 100%;
        }
      }
      .text {
        padding: 0 8px 0 15px;
        a {
          color: #4489FF
        }
      }
    }
  }
  /*@import './plans_tablet.scss';*/
  /*@import './plans_mobile.scss';*/
  @media (max-width: 733px) {
    .plans {
      overflow: visible;
      width: 96%;
      padding: 0 0 75px 0;
      &-title {
        padding: 0 20px;
        margin: 50px 0 0 0!important;
      }
      &-content {
        width: 100%;
        &:after {
          display: none;
        }
        &:before {
          display: none;
        }
        &-field {
          padding: 10px 10px 50px 10px;
          width: auto;
          max-width: 370px;
          overflow: visible;
          .price-block {
            // padding: 0;
            margin: 0!important;
            width: auto!important;
            min-width: auto;
            max-width: 370px;
            padding: 10px!important;
          }
        }
      }
      .contact-us-block {
        max-width: 300px;
        margin: -36px 0 20px 0;
        height: auto;
        padding: 14px 12px;
        .icon {
          img {
            width: 32px;
            height: 32px;
          }
        }
        .text {
          p {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
  @media (max-width: 1365px) {
    .plans-container {
      overflow: hidden;
    }
    .pros {
      overflow: hidden;
    }
    .plans {
      overflow: hidden;
      width: 90%;
      margin: auto!important;
      position: relative;
      &-title {
        margin: 90px 0 0 0;
      }
      &-content {
        width: calc(100% + 600px);
        &:after {
          content: '';
          position: absolute;
          height: 750px;
          width: 40px;
          background: linear-gradient(90deg, #F8F9FB 0%, rgba(248, 249, 251, 0) 100%);
          transform: matrix(-1, 0, 0, 1, 0, 0);
          right: 0;
          bottom: 30px;
        }
        &:before {
          content: '';
          height: 750px;
          position: absolute;
          width: 40px;
          background: linear-gradient(90deg, #F8F9FB 0%, rgba(248, 249, 251, 0) 100%);
          z-index: 1;
          left: 0;
          bottom: 30px;
        }
        &-field {
          padding: 60px 10px 80px;
          width: auto;
          max-width: 100%;
          overflow: hidden;
          .price-block {
            // padding: 0;
            margin: 0 30px!important;
            width: auto!important;
            // min-width: auto;
            max-width: 370px;
            min-width: 370px;
            padding: 0 10px 10px!important;
          }
        }
      }
      .contact-us-block {}
    }
  }

</style>
