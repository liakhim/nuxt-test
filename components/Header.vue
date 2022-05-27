<template>
  <div class="header">
    <div class="header-container">
      <div class="burger" @click="menuState = !menuState">
        <img src="../assets/img/header/burger.svg" alt="">
      </div>
      <Logo/>
      <div class="menu" :class="{'show': menuState}">
        <div class="menu-overlay" @click="menuState = false"></div>
        <div class="menu-header">
          <Logo/>
          <div class="close-icon" @click="menuState = false">
            <img src="../assets/img/header/mobile-cross.svg" alt="">
          </div>
        </div>
        <ul class="menu-list">
          <li class="menu-list-item with-not-link">
            <div class="not-link" @click="showMobileSubmenu()">
              <span>Solutions</span>
              <div class="chevron-icon">
                <img src="../assets/img/header/arrow-down.svg" alt="">
              </div>
            </div>
            <div class="submenu" :class="{'show': showSubmenu}">
              <ul>
                <li>
                  <NuxtLink to="/facebook-ads-creation">Ads Manager</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/facebook-ads-automation">Automated Rules</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/facebook-ads-targeting">Interest Targeting</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-list-item"><NuxtLink to="/pricing">Pricing</NuxtLink></li>
          <li class="menu-list-item"><NuxtLink to="/contact-us">Contact us</NuxtLink></li>
          <li class="menu-list-item"><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
        <div class="buttons">
          <a :href="dashboardUrl + 'registration/sign-in'"
             v-if="!userAuthorization"
             class="custom-button violet outline"
             :class="{show: !userAuthorization}">Log in</a>
          <a :href="dashboardUrl + 'registration/sign-in'"
             v-if="!userAuthorization"
             class="custom-button show violet"
             :class="{show: !userAuthorization}">Sign up</a>
          <a :href="dashboardUrl + 'profile'"
             v-if="userAuthorization"
             class="custom-button show violet"
             :class="{show: userAuthorization}">Dashboard</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data () {
      return {
        menuState: false,
        showSubmenu: false
      }
    },
    props: [
      'userAuthorization'
    ],
    methods: {
      showMobileSubmenu () {
        this.showSubmenu = !this.showSubmenu
      }
    },
    computed: {
      dashboardUrl () {
        return process.env.NUXT_BASE_DASHBOARD_URL
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    height: 70px;
    box-shadow: 0 0 15px rgb(170 170 170 / 25%);
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #ffffff;
    z-index: 1000;
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      max-width: 1850px;
      width: 100%;
      margin: auto;
      padding: 0 10px;
      .burger {
        display: none;
      }
      .logo {
        display: flex;
        align-items: center;
        min-width: 140px;
        &-icon {
          img {
            width: 24px;
            height: 24px;
            max-width: 24px;
            min-width: 24px;
          }
        }
        &-text {
          margin-left: 8px;
          img {
          }
        }
      }
      .menu {
        width: 100%;
        height: 100%;
        margin-right: auto;
        margin-left: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-overlay {
          display: none;
        }
        &-header {
          display: none;
        }
        &-list {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          &-item {
            height: 100%;
            display: flex;
            align-items: center;
            border-bottom: 2px solid transparent;
            padding: 0 16px;
            cursor: pointer;
            position: relative;
            &:hover {
              .submenu {
                display: block;
              }
            }
            .not-link {
              color: #1C2445;
              font-size: 15px;
              font-weight: 500;
              display: flex;
              align-items: center;
              .chevron-icon {
                display: none;
                img {
                  width: 14px;
                }
              }
            }
            & > a {
              width: 100%;
              font-family: 'SF UI Text', sans-serif;
              font-weight: 500;
              font-size: 15px;
              line-height: 18px;
              justify-content: center;
              display: flex;
              align-items: center;
              height: inherit;
              color: #1C2445;
            }
            .submenu {
              position: absolute;
              display: none;
              left: 0;
              top: 60px;
              z-index: 10000;
              width: 180px;
              border-radius: 5px;
              padding: 5px;
              background: #fff;
              border: 1px solid #CCCCCC;
              a {
                display: flex;
                align-self: center;
                text-align: left;
                align-items: center;
                width: 100%;
                font-family: "SF UI Text", sans-serif;
                font-size: 0.875rem;
                line-height: 1.0625;
                font-weight: 400;
                color: #2F3744;
                height: 48px;
                padding-left: 12px;
                &:hover {
                  background: #c9c9c93b;
                }
              }
              &::before {
                content: '';
                position: absolute;
                width: 10px;
                height: 10px;
                transform: rotate(45deg);
                border-top: 1px solid #CCCCCC;
                border-left: 1px solid #CCCCCC;
                background: #fff;
                left: 20px;
                top: -7px;
                z-index: 1;
              }
            }
            a {
              height: 100%;
              display: flex;
              align-items: center;
            }
            &:hover {
              border-bottom: 2px solid #ff4639;
            }
          }
        }
        .buttons {
          width: auto;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .custom-button {
            display: none;
            margin-left: 10px;
          }
          .custom-button.show {
            display: block;
          }
        }
      }
    }
  }
  .dropdown-links {
    position: absolute;
    top: 100%
  }
  @media (max-width: 769px) {
    .header {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1001;
      .header-container {
        .burger {
          display: block;
        }
        .menu {
          width: 260px;
          transition: 0.4s;
          position: fixed;
          flex-direction: column;
          left: -260px;
          top: 0;
          background: #fff;
          z-index: 1001;
          margin-left: 0;
          &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            width: 100%;
            min-height: 70px;
            padding: 0 10px 0 20px;
            .logo {
              display: flex;
            }
            .close-icon {
              img {
                width: 24px;
              }
            }
          }
          .menu-overlay {
            display: none;
            top: 0;
            left: 0;
            position: fixed;
            width: 100vw;
            height: 100%;
            z-index: -1;
            background: #00000070;
          }
          &-list {
            width: 260px;
            flex-direction: column;
            align-items: flex-start;
            background: #fff;
            padding: 40px 12px 0 5px;
            &-item {
              flex-direction: column;
              align-items: flex-start;
              border-left: 2px solid transparent;
              height: auto;
              padding: 0;
              width: 100%;
              display: flex;
              justify-content: flex-start;
              .not-link {
                padding: 0 13px;
                height: 42px;
                border-left: 2px solid transparent;
                .chevron-icon {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-start;
                  padding: 0 0 0 8px;
                }
                &:hover {
                  border-left: 2px solid #ff4639
                }
              }
              a {
                height: 42px;
                padding: 0 15px;
                width: 100%;
                text-align: left;
                display: flex;
                justify-content: flex-start;
              }
              &:hover {
                border-bottom: 2px solid transparent;
                border-left: 2px solid #ff4639;
              }
              .submenu {
                position: relative;
                display: block;
                top: 0;
                border: none;
                height: 0;
                overflow: hidden;
                padding: 0 15px 0 25px;
                width: 100%;
                &:before {
                  display: none;
                }
                a {
                  padding: 0 10px;
                  height: 42px;
                  &:hover {
                    border-bottom: transparent;
                    border-left: 2px solid #ff4639;
                  }
                }
              }
              .submenu.show {
                height: auto;
              }
            }
            &-item.with-not-link {
              &:hover {
                border-bottom: 2px solid transparent;
                border-left: 2px solid transparent;
              }
            }
          }
          .buttons {
            background: #fff;
            width: 100%;
            padding: 0 12px 40px 0;
            justify-content: flex-start;
            .custom-button {
              margin: 0;
              padding: 0 30px;
            }
          }
        }
        .menu.show {
          left: 0;
          .menu-overlay {
            display: block;
          }
        }
      }
    }
  }

</style>
