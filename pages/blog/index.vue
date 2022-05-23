<template>
  <LandingLayout>
    <template>
      <p>BLOG</p>
      <div v-for="(article, index) in list" style="border: 1px solid red">
        <a :href="'blog/' + article.attributes.url">{{article.attributes.url}}</a>
      </div>
    </template>
  </LandingLayout>
</template>
<script>
  export default {
    name: 'BlogMain',
    async asyncData({ $axios, $config }) {
      const list = await $axios.$get(`webapi/v2/blog?page=1&per_page=4`)
      return { list: list.data }
    },
  }
</script>
