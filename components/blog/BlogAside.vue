<template>
  <div class="blog__aside-container"
       :style="{'margin-top': top + 'px'}">
    <div class="blog__aside-search">
<!--      <BlogSearch/>-->
    </div>
    <div class="blog__aside-title">
      <h3>Most popular</h3>
    </div>
<!--    <pre style="color: red">-->
<!--      {{renderGetArticles.data[0]}}-->
<!--    </pre>-->
    <div class="blog__main-third-article-container"
         v-for="article in renderGetArticles.data"
         :key = article.id>
      <ArticlePreview :preloading="false"
                      :data="article.attributes">
      </ArticlePreview>
    </div>
  </div>
</template>
<script>
  import ArticlePreview from './ArticlePreview.vue';
  export default {
    name: 'BlogAside',
    components: {
      ArticlePreview
    },
    data () {
      return {
        renderGetArticles: ''
      }
    },
    props: {
      top: {
        type: Number,
        default: 0
      }
    },
    async fetch() {
      this.renderGetArticles = await this.$axios.$get('/webapi/v2/blog/best-article')

    },
    computed: {
      // renderGetArticles () {
      //   return this.$axios.$get('/webapi/v2/blog/best-article')
      // }
    }
  }
</script>
<style lang="scss">
  .blog__aside-container {
    background-color: #F8F9FB;
    padding: 40px;
    max-width: 415px;
    min-width: 415px;
    width: inherit;
    color: #F8F9FB;
    margin-bottom: 30px;
    .article-preview {
      &-image {
        width: 100%;
      }
    }
    .blog__aside-search {
      width: 100%;
      margin-bottom: 35px;
    }
    .blog__aside-title {
      border-bottom: 1px solid #DADDE1;
      h3 {
        font-weight: 500;
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 15px;
      }
    }

    @media screen and (max-width: 1750px) {
      width: 415px;
    }

    @media screen and (max-width: 1290px) {
      display: none;
    }

    h3 {
      color: #1C2445;
      font-size: 22px;
      font-weight: 500;
    }

    .blog__aside-line {
      margin-top: 15px;
      border-bottom: 1px solid #DADDE1;
    }

    .blog_aside-img-article {
      margin-top: 30px;
    }

    @media screen and (max-width: 1550px) {
      .blog__aside-content {
        width: 310px;
      }
    }

    .blog__aside-content-container {
      margin-top: 40px;

      .blog__aside-title-article {
        width: 250px;
        color: #1C2445;
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
      }

      .blog__aside-content-about {
        margin-top: 30px;
        width: 380px;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        color: #4E4E4E;

        a {
          color: #2364BE;
        }

        @media screen and (max-width: 1550px) {
          width: 270px;
        }
      }

      .blog__aside-content-create-time {
        margin-top: 20px;
        display: flex;
        align-items: center;

        p {
          color: #777;
          margin-left: 12px;
        }
      }
    }

  }
</style>
