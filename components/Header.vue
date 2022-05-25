<template>
  <div class="header">
    <div class="header-container">
      <div class="burger" @click="menuState = !menuState">
        <img src="http://convertbomb-landing.fakebook.press/assets/img/header/burger.svg" alt="">
      </div>
      <Logo/>
      <div class="menu" :class="{'show': menuState}">
        <div class="menu-overlay" @click="menuState = false"></div>
        <div class="menu-header">
          <Logo/>
        </div>
        <ul class="menu-list">
          <li class="menu-list-item">
            <span class="not-link">Solutions</span>
            <div class="submenu">
              <ul>
                <li><NuxtLink to="/facebook-ads-creation">Ads Manager</NuxtLink></li>
                <li><NuxtLink to="/facebook-ads-automation">Automated Rules</NuxtLink></li>
                <li><NuxtLink to="/facebook-ads-targeting">Interest Targeting</NuxtLink></li>
              </ul>
            </div>
          </li>
          <li class="menu-list-item"><NuxtLink to="/pricing">Pricing</NuxtLink></li>
          <li class="menu-list-item"><NuxtLink to="/contact-us">Contact us</NuxtLink></li>
          <li class="menu-list-item"><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
        <div class="buttons">
          <button class="custom-button violet outline">Log in</button>
          <button class="custom-button violet">Sign up</button>
          <button class="custom-button violet">Dashboard</button>
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
        menuState: false
      }
    }
  }
</script>
