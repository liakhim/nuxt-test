<template>
  <div style="width: 100%;">
    <section class="blog__header">
      <div class="blog-container">
        <h1>#Blog</h1>
      </div>
    </section>
    <!--        <router-link to="article">-->
    <!--            To article-->
    <!--        </router-link>-->
    <div class="blog__latest-news-container blog-container">
      <h3>Latest News</h3>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BlogHeader'
  }
</script>
<style lang="scss">
  .blog__header {
    // padding: 0 105px;
    height: 230px;
    width: 100%;
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 690px) {
      height: 160px;
    }

    h1 {
      color: #1C2445;
      // margin-top: 55px;
      font-size: 100px;
      line-height: 133px;
      font-weight: 700;

      @media screen and (max-width: 770px) {
        font-size: 80px;
        line-height: 100px;
      }

      @media screen and (max-width: 690px) {
        font-size: 60px;
        line-height: 80px;
      }
    }

  }

  .blog__latest-news-container {
    width: 100%;
    border-bottom: 1px solid #DADDE1;
    h3 {
      font-size: 26px;
      line-height: 31px;
      padding: 45px 0 25px;
      font-weight: 500;
    }
  }
</style>
