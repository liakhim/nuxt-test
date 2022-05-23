<template>
  <LandingLayout>
    <template>
      <pre>
        {{article}}
      </pre>
    </template>
  </LandingLayout>
</template>
<script>
  export default {
    name: 'ArticlePage',
    head () {
      return {
        title: this.article.attributes.title,
        meta: [
          {property: 'og:title', content: this.article.attributes.title},
          {property: 'og:image', content: this.article.attributes.image},
        ],
      }
    },
    async asyncData({ $axios, params }) {
      const article = await $axios.$get(`webapi/v2/blog/show/` + params.name)
      return { article: article.data }
    },
  }
</script>
