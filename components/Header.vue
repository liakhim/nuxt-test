<template>
  <div class="header">
    <div class="cb-container">
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
            <span>Solutions</span>
            <div class="submenu">
              <ul>
                <li><a href="#">First</a></li>
                <li><a href="#">Second</a></li>
                <li><a href="#">Third</a></li>
              </ul>
            </div>
          </li>
          <li class="menu-list-item"><NuxtLink to="/pricing">Pricing</NuxtLink></li>
          <li class="menu-list-item"><NuxtLink to="/contact-us">Contact us</NuxtLink></li>
          <li class="menu-list-item"><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
        <div class="buttons">
          <button>test1</button>
          <button>test2</button>
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
