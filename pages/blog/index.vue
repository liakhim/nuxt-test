<template>
  <BlogLayout>
    <template>
      <div class="Blog">
        <div class="blog__main">
          <div class="blog__main-content">
<!--            <div class="blog__main-search">-->
<!--              <section class="blog__search-container" role="search">-->
<!--                <form  v-on:submit.prevent="initSearch()">-->
<!--                  <label for="blog__search">-->
<!--                    <input class="blog__search-input"-->
<!--                           type="search"-->
<!--                           id="blog__search"-->
<!--                           v-model="searchQueryValue"-->
<!--                           placeholder="Search" />-->
<!--                  </label>-->
<!--                  <button :disabled="searchQueryValue && searchQueryValue.length === 0"-->
<!--                          type="button"-->
<!--                          @click="initSearch()"-->
<!--                          class="blog___search-btn"-->
<!--                          title="Search article">-->
<!--                    <img src="../../assets/img/blog/search-icon.svg" alt="">-->
<!--                  </button>-->
<!--                </form>-->
<!--              </section>-->
<!--            </div>-->
            <CirclePreloader v-if="loading" :depth="5" :size="100"/>
<!--            <div v-if="!loading && articles.length === 0 && !resultSearch && resultSearch !== null" class="not-found-block">-->
<!--              <div class="icon">-->
<!--                <img src="../../assets/img/blog/not-found.svg" alt="">-->
<!--              </div>-->
<!--              <div class="text">-->
<!--                <h4>Not found</h4>-->
<!--                <p>No results “{{searchQueryValue}}” were found for your search.</p>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div v-if="!loading" class="blog__main-title-article">-->
<!--              <BlogLatestArticlePreview v-if="getLatestArticles.length > 0 && !loading && articles.length !== 0"-->
<!--                                        :preloading="false"-->
<!--                                        :data="getLatestArticles[0].attributes"-->
<!--                                        :main="true"/>-->
<!--            </div>-->
<!--            <div v-if="!loading && getLatestArticles.length > 1" class="blog__main-subtitle-article">-->
<!--              <BlogLatestArticlePreview v-for="article in articles.splice(1, getLatestArticles.length)"-->
<!--                                        :key="article.id"-->
<!--                                        :preloading="!getLatestArticles.length > 0"-->
<!--                                        :data="article.attributes"-->
<!--                                        :main="false"/>-->
<!--            </div>-->
            <div v-if="!loading" class="blog__main-thirds-article-container">
              <div class="blog__main-third-article-container"
                   v-for="article in articles.data"
                   :key = article.id>
                <ArticlePreview :preloading="articles.data.length === 0"
                                :data="article.attributes"/>
              </div>
            </div>
            <div class="blog-pagination">
              <Pagination v-if="true"
                          @change-page="changePage($event)"
                          :current-page="articles.meta.pagination.current_page"
                          :total-pages="articles.meta.pagination.count"/>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BlogLayout>
</template>
<script>
  import ArticlePreview from '../../components/blog/ArticlePreview.vue';
  import CirclePreloader from '../../components/base/CirclePreloader';
  import Pagination from "../../components/base/Pagination.vue";
  import axios from "../../.nuxt/axios";
  export default {
    name: 'BlogMain',
    head () {
      return {
        title: 'Blog'
      }
    },
    components: {
      ArticlePreview,
      CirclePreloader,
      Pagination
    },
    data () {
      return {
        loading: false
      }
    },
    async asyncData({ $axios, $config }) {
      try {
        const articles = await $axios.$get(`webapi/v2/blog?page=1&per_page=4`)
        return { articles: articles }
      } catch {
        console.log('error')
      }
    },
    methods: {
      changePage (page) {
        this.$axios.$get('https://api.convertbomb.com/webapi/v2/blog?page=' + page + '&per_page=4')
          .then((response) => {
            this.articles = response
          })
      }
    }
  }
</script>
<style lang="scss">
  .Blog {
    margin-bottom: 80px;
    width: 100%;
    // width: calc(100% - 415px);
    // padding: 0 100px 0 0;
    @media screen and (max-width: 1290px) {
      width: 100%;
      padding: 0;
    }
    .blog-line {
      border-bottom: 1px solid #DADDE1;

      @media screen and (max-width: 880px) {
        display: none;
      }

    }

    .default-link {
      color: #2364BE;
    }

    .default-text {
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      color: #4E4E4E;
      width: 100%;
    }

    .default-h2 {
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      color: #1C2445;
    }

    .blog-create-time {
      display: flex;

      p {
        margin-left: 20px;
        margin-top: 2px;
      }

      @media screen and (max-width: 500px) {
        margin-top: 5px;
      }

      @media screen and (max-width: 350px) {
        margin-top: 10px;
      }

    }

    .blog__main {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .blog__main-title-article {
        border-bottom: 1px solid #DADDE1;
        // padding: 0 100px 0 0;
        max-width: 1140px;
        @media (max-width: 769px) {
          display: none;
        }
      }
      .blog__main-subtitle-article {
        border-bottom: 1px solid #DADDE1;
        padding: 40px 100px 40px 0;
        max-width: 1140px;
        @media (max-width: 769px) {
          display: none;
        }
      }

      .blog__main-search {
        margin-top: 45px;
        width: 450px;
        .blog___search-btn {
          img {
            width: 18px;
          }
        }
        @media screen and (min-width: 1291px) {
          display: none;
        }
        @media screen and (max-width: 690px) {
          width: 100%;
          max-width: 100%;
          min-width: 280px;
        }

        @media screen and (max-width: 320px) {
          width: 100%;
          min-width: 260px;
        }

      }

      .blog__main-content {
        width: calc(100% - 20px);
        @media (max-width: 1290px) {
          width: 100%;
        }
      }

      .blog__main-head-article-container {
        margin-top: 45px;
        width: 100%;
        max-width: 1140px;
        min-width: 305px;
        h2 {
          margin-top: 40px;
        }

        >p {
          margin-top: 30px;
        }

        @media screen and (max-width: 1550px) {
          // width: 850px;

          >img {
            width: 850px;
          }
        }

        @media screen and (max-width: 880px) {
          // width: 650px;

          >img {
            width: 650px;
          }
        }

        @media screen and (max-width: 350px) {
          width: 290px;

          >img {
            width: 290px;
          }
        }
      }

      .blog__main-seconds-article-container {
        margin-top: 80px;

        .blog__main-second-article {
          display: flex;

          @media screen and (max-width: 500px) {
            display: block;

            >img {
              width: 290px;
            }
          }

          .blog__main-second-article-content-text-container {
            margin-left: 30px;

            @media screen and (max-width: 1550px) {
              width: 500px;
            }

            @media screen and (max-width: 880px) {
              width: 400px;
            }

            @media screen and (max-width: 500px) {
              width: 305px;
              margin-left: 0;

              h2 {
                margin-top: 40px;
              }
            }

            @media screen and (max-width: 350px) {
              width: 290px;
            }

            >p {
              margin-top: 30px;
            }
          }
        }
      }
      .blog__main-thirds-article-container {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        .blog__main-third-article-container {
          max-width: calc(50% - 20px);
          min-width: 310px;
          width: 50%;
          margin: 0 20px 0 0;
          @media (max-width: 821px) {
            max-width: calc(50% - 20px);
            margin: 0 20px 0 0;
          }
          @media (max-width: 761px) {
            max-width: 100%;
            min-width: 100%;
            width: 100%;
          }
        }
      }
      .not-found-block {
        height: 140px;
        padding: 20px 0;
        width: auto;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .icon {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 100%;
          }
        }
        .text {
          padding-left: 30px;
          h4 {
            font-weight: 500;
            font-size: 22px;
            line-height: 48px;
            color: #1C2445;
            padding-bottom: 10px;
          }
          p {
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: #4E4E4E;
          }
        }
      }
    }

    .blog__latest-news-aside {
      width: 460px;
    }
  }

</style>
