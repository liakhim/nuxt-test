<template>
  <div v-html="article.data.attributes.body"></div>
</template>

<script>
  export default {
    async asyncData({ $axios, $config }) {
      const article = await $axios.$get(`webapi/v2/blog/show/agfdafgsd`)
      return { article }
    }
  }
</script>
