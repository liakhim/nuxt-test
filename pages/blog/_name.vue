<template>
  <BlogLayout>
    <template>
      <div class="Article">
        <div class="article-container">
          <div v-if="article.attributes"
               class="article-container-header">
            <button @click="$router.push('/')">
              <img src="/assets/img/blog/arrow-back.jpg"
                   alt="go back button">
            </button>
            <h2 :class="{'text-preloading-mode': articlePreload}">
              <span v-if="!articlePreload">{{article.attributes.title}}</span>
            </h2>
          </div>
          <div v-if="article.attributes">
            <div v-if="!articlePreload"
                 class="d-flex align-items-center justify-content-start">
              <div v-if="article.attributes.created_at"
                   class="article-container-create-time">
                <div class="icon">
                  <img src="/assets/img/blog/clock-icon.svg"
                       alt="clock icon">
                </div>
                <div class="text">
<!--                  <p>{{convertDate(article.attributes.created_at)}}</p>-->
                </div>
              </div>
              <div class="article-container-create-views-counter">
                <div class="icon">
                  <img src="../../assets/img/blog/eye.svg"
                       alt="clock icon">
                </div>
                <div class="text">
                  <p>{{article.attributes.views_counter}}</p>
                </div>
              </div>
            </div>
            <div class="article-container-main-photo"
                 :class="{'empty-image': articlePreload || !article.attributes.image, 'preloading-mode': articlePreload}" >
              <img v-if="article.attributes.image"
                   :src="imageUrl"
                   alt="main photo article">
            </div>
          </div>
          <div v-if="article.attributes && !articlePreload"
               class="article-container-main-content"
               v-html="article.attributes.body"></div>
          <div v-else class="empty-text-block">
            <div :class="{'text-preloading-mode': articlePreload}" class="line"></div>
            <div :class="{'text-preloading-mode': articlePreload}" class="line"></div>
            <div :class="{'text-preloading-mode': articlePreload}" class="line"></div>
          </div>
        </div>
      </div>
    </template>
  </BlogLayout>
</template>
<script>
  export default {
    name: 'ArticlePage',
    head () {
      return {
        title: this.article.attributes.title,
        meta: [
          {property: 'og:title', content: this.article.attributes.title},
          {property: 'og:image', content: process.env.NUXT_BASE_URL + 'a_img/' + this.article.attributes.image},
        ],
      }
    },
    data () {
      return {
        url: ''
      }
    },
    computed: {
      imageUrl () {
        return process.env.NUXT_BASE_URL + 'a_img/' + this.article.attributes.image
      }
    },
    async asyncData({ $axios, params }) {
      const article = await $axios.$get(`webapi/v2/blog/show/` + params.name)
      return { article: article.data }
    },
  }
</script>
<style lang="scss">
  .empty-text-block {
    margin-top: 50px;
    .line {
      width: 100%;
      height: 30px;
      background: #f8f9fb;
      margin-bottom: 20px;
    }
  }
  .article-container-main-content {
    color: #4E4E4E!important;
    p, a, li, ul, span, b {
      white-space: break-spaces!important;
      text-align: justify!important;
      font-family: 'SF UI Text', sans-serif!important;
      line-height: 1.6!important;
    }
    a {
      color: #1155cc;
      text-decoration: underline;
      a > * {
        color: #1155cc!important;
        text-decoration: underline;
      }
    }
    h1, h2, h3, h4, h5, h6 {
      text-align: inherit!important;
      margin: 15px 0;
    }
    span, p, li {
      font-size: inherit!important;
    }
    ul {
      line-height: 1!important;
      li {
        list-style-type: disc!important;
      }
    }
    ol {
      margin: 15px 0 15px 30px!important;
    }
    img {
      margin: 15px 0;
      max-width: 100%;
      height: auto;
    }
  }
  @media (max-width: 690px) {
    img {
      width: 100%;
    }
  }
</style>
