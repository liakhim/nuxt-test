<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__container__menu">
        <div class="footer__container__menu__item">
          <h5>Solutions</h5>
          <ul class="menu">
            <li><a href="/facebook-ads-creation">Ads Management</a></li>
            <li><a href="/facebook-ads-automation">Automated Rules</a></li>
            <li><a href="/facebook-ads-targeting">Interest Targeting</a></li>
          </ul>
        </div>
        <div class="footer__container__menu__item">
          <h5>Contacts</h5>
          <ul class="menu">
            <li><a href="mailto:support@convertbomb.com">support@convertbomb.com</a></li>
            <li><a href="mailto:sales@convertbomb.com">sales@convertbomb.com</a></li>
          </ul>
        </div>
        <div class="footer__container__menu__item">
          <h5>Company</h5>
          <ul class="menu">
            <li class="footer__container__menu__item__text">SmartData Technologies</li>
            <li class="footer__container__menu__item__text">Korlátolt Felelősségű Társaság</li>
          </ul>
        </div>
      </div>
      <div class="footer__container__contact">
        <div class="logo">
          <a href="/">
<!--            <img src="../../assets/img/header/logo2.svg" alt="Convertbomb">-->
          </a>
        </div>
        <div class="footer__container__contact__text">
          <p>ConvertBomb is powered by joint efforts of experienced marketing, agencies
            and tech experts to bring digital advertising to a completely new level.</p>
          <p class="pt-2">Convertbomb © 2021 All Rights Reserved</p>
          <a class="privacy-link" href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'Footer',
    data () {
      return {
        landingUrl: 'test'
      }
    }
  }
</script>
<style lang="scss">
  .footer{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 380px;
    background: #f9f9f9;
    width: 100%;
    z-index: 1000;
    position: relative;
    .footer__container {
      width: 100%;
      max-width: 1440px;
      min-width: 1024px;
      display: flex;
      justify-content: space-between;
      .footer__container__menu {
        display: flex;
        .footer__container__menu__item {
          h5 {
            font-family: "SF UI Text", sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.6;
            color: #1C2445;
            margin-bottom: 15px;
            margin-top: 10px;
          }
          .menu {
            a {
              font-family: "SF UI Display", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 15px;
              line-height: 30px;
              white-space: nowrap;
              color: #7C7C7C;
            }
            .footer__container__menu__item__text {
              font-family: "SF UI Display", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 15px;
              line-height: 30px;
              color: #7C7C7C;
            }
            margin-right: 118px;
          }
        }
      }
      .footer__container__contact {
        display: grid;
        .logo {
          display: flex;
          justify-content: flex-end;
          padding-bottom: 28px;
        }
        .footer__container__contact__text {
          max-width: 500px;
          p {
            font-family: "SF UI Display", sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 24px;
            text-align: right;
            color: #7C7C7C;
            &:last-child {
              margin-top: 24px;
              margin-bottom: 4px;
            }
          }
          .privacy-link {
            margin-top: 10px;
            display: flex;
            justify-content: flex-end;
            font-size: 15px;
            line-height: 26px;
            color: #3679EA;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1700px) {
    .footer {
      padding: 0 40px;
      .footer__container {
        box-sizing: border-box;
        padding: 0 15px 0 15px;
      }
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1367px) {
    .footer{
      padding: 0 40px;
      .footer__container {
        box-sizing: border-box;
        padding: 0 15px 0 15px;
        .footer__container__menu {
          .footer__container__menu__item {
            h5 {
            }
            .menu {
              a {
              }
            }
          }
        }
        .footer__container__contact {
          .logo {
          }
          .footer__container__contact__text {
            p {
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    .footer {
      .footer__container {
        padding: 64px 40px;
        .footer__container__menu {
          .footer__container__menu__item {
            h5 {
              // margin: 0;
            }
            .menu {
              margin-right: 3rem;
              white-space: nowrap;
              a {
              }
              .footer__container__menu__item__text {
              }
            }
          }
        }
        .footer__container__contact {
          .logo {
          }
          .footer__container__contact__text {
            p {
              &:last-child {
              }
            }
            .privacy-link {
            }
          }
        }
      }
    }
  }
  @media (max-width: 1023px) {
    .footer {
      width: 100vw;
      display: flex;
      height: auto;
      max-height: none;
      .footer__container {
        padding: 64px 20px ;
        width: 100vw;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        row-gap: 64px;
        .footer__container__menu {
          display: flex;
          flex-direction: column;
          row-gap: 48px;
          .footer__container__menu__item {
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            h5 {
              margin: 0;
            }
            .menu {
              display: flex;
              flex-direction: column;
              row-gap: 5px;
              margin: 0;
              a {
              }
              .footer__container__menu__item__text {
              }
            }
          }
        }
        .footer__container__contact {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          row-gap: 28px;
          .logo {
            padding: 0;
          }
          .footer__container__contact__text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            p {
              text-align: left;
              &:last-child {
                margin-top: 20px;
              }
            }
            .privacy-link {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
</style>
