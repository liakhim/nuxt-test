<template>
  <div>
    <Header></Header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
  .content {
    margin-top: 70px;
    @media (max-width: 769px) {
      margin-top: 0;
    }
  }
</style>
