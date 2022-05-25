<template>
  <div class="article-preview-wrapper">
    <div v-if="!preloading" class="article-preview">
      <div style="max-width: 450px; display:flex;justify-content: center">
        <div class="article-preview-image">
          <router-link :to="'/blog/' + data.url">
            <img :src="imageUrl"
                 alt="cat-photo">
          </router-link>
        </div>
      </div>
      <div class="article-preview-content">
        <div class="article-preview-content-title">
          <router-link :to="data.url">
            <h2>
              {{data.title}}
            </h2>
          </router-link>
        </div>
        <div class="article-preview-content-text">
          <p>
            {{data.announcement}}
          </p>
        </div>
        <div class="redirect-button">
          <router-link class="custom-button violet"
                       @click="load()"
                       :to="'/blog/' + data.url"
                       tag="a">
                        <span>
                            Read more
                        </span>
          </router-link>
        </div>
        <div class="d-flex justify-content-start">
          <div class="article-preview-content-time">
            <img src="../../assets/img/blog/clock-icon.svg" alt="clock icon">
<!--            <p>{{convertDate(data.created_at)}}</p>-->
            <p>{{data.created_at}}</p>
          </div>
          <div class="article-preview-content-views-counter">
            <img src="../../assets/img/blog/eye.svg" alt="clock icon">
            <p>{{data.views_counter}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="preloading article-preview" v-if="preloading">
      <img src="/assets/img/blog/empty-image.svg" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'BlogArticlePreview',
    props: {
      preloading: {
        type: Boolean,
        default: true
      },
      data: {
        default: {
          title: '',
          url: '',
          image: null,
          announcement: ''
        }
      },
    },
    methods: {
      load () {
        if (Object.keys(this.$route.params).length !== 0 ) {
          window.scrollTo(0,0);
        }
      }
    },
    computed: {
      imageUrl () {
        return process.env.NUXT_BASE_URL + 'a_img/' + this.data.image
      }
    }
  }
</script>
<style lang="scss">
  .article-preview-wrapper {
    .article-preview {
      margin: 40px 0 20px;
      max-width: 560px;
      &-image {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        aspect-ratio: 955/377;
        height: 200px;
        @media (max-width: 1500px) {
          width: 100%;
          min-width: 100%
        }
        @media (max-width: 1024px) {
          width: 100%;
          min-width: 100%
        }
        @media (max-width: 1025px) {
          width: 100%;
          min-width: 100%
        }
        @media (max-width: 768px) {
          width: 100%;
          min-width: 100%;
          /*min-height: 200px;*/
          max-height: 200px;
          height: auto;
          /*height: 200px;*/
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          @media (max-width: 690px) {
            height: 100%;
          }
          img {
            width: auto;
            height: 100%;
            margin-right: auto;
          }
        }
      }

      &-content {
        color: #4E4E4E;
        max-width: 450px;
        &-title {
          margin-top: 25px;
          height: 60px;
          overflow: hidden;
          @media (max-width: 690px) {
            height: auto;
          }

          a {
            width: 100%;

            h2 {
              font-weight: 500;
              font-size: 20px;
              line-height: 28px;
            }

            &:hover {
              h2 {
                opacity: 0.85;
              }
            }
          }
        }

        &-text {
          height: 80px;
          overflow: hidden;
          margin: 15px 0 20px;
          @media (max-width: 690px) {
            min-height: auto;
            height: auto;
          }

          p {
            font-size: 15px;
            line-height: 24px;

            a {
              color: #2364be;
              white-space: nowrap;
            }
          }
        }

        &-time {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          img {
            width: 14px;
            height: 14px;
            min-width: 14px;
            max-width: 14px;
          }

          p {
            font-size: 15px;
            line-height: 38px;
            padding: 0 12px;
          }
        }

        &-views-counter {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          img {
            width: 14px;
            height: 14px;
            min-width: 14px;
            max-width: 14px;
          }

          p {
            padding: 0 8px;
            line-height: 1;
          }
        }
      }

      .redirect-button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
      }
    }
    .preloading {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F9F9F9;
      border-radius: 10px;
      height: 200px;
      border: 1px solid #e1e1e1;
      img {
        width: 160px;
      }
    }
  }
</style>
