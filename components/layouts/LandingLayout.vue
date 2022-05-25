<template>
  <div>
    <Header/>
    <div class="content">
      <slot></slot>
    </div>
    <Footer/>
  </div>
</template>
<style lang="scss">
  @import "styles/_settings.scss";
  @import "styles/_slide.scss";
  .content {
    margin-top: 70px;
    @media (max-width: 769px) {
      margin-top: 0;
    }
  }
</style>
