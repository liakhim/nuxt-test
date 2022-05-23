<template>
  <div>
<!--    <div v-html="article.data.attributes.body"></div>-->
<!--    <Header></Header>-->
    <LandingLayout>
      <template>
        <div class="content" style="background: linear-gradient(97deg,#4b3691 0,#383057 75%); height: 400px;">
          <button @click="show()">
            Show modal
          </button>
        </div>
      </template>
    </LandingLayout>
    <client-only>
      <modal name="example">This is an example</modal>
    </client-only>
<!--    <client-only :placeholder="'Loading...'">-->
<!--      <agile :initial-slide="1"-->
<!--             :slidesToShow="3"-->
<!--             :centerMode="true">-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <img class="slide"-->
<!--             src="https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"-->
<!--             alt=""/>-->
<!--        <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>-->
<!--        <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>-->
<!--      </agile>-->
<!--    </client-only>-->
    <div style="max-width: 300px">
      <v-select
        :options="[1, 2, 3]"
        :searchable="false"
        :clearable="false"
        v-model="val"
        label="title"
      ></v-select>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'test name',
        val: 1
      }
    },
    async asyncData({ $axios, $config }) {
      const list = await $axios.$get(`webapi/v2/contact-us-categories`)
      return { list }
    },
    methods: {
      show () {
        this.$modal.show('example')
      }
    },
    mounted () {
      this.$modal.show('example')
    }
  }
</script>
<style lang="sass">
  // VueAgile styles
  .agile
    &__nav-button
      background: transparent
      border: none
      color: #fff
      cursor: pointer
      font-size: 24px
      height: 100%
      position: absolute
      top: 0
      transition-duration: .3s
      width: 80px

      &:hover
        background-color: rgba(#000, .5)
        opacity: 1

      &--prev
        left: 0

      &--next
        right: 0

    &__dots
      bottom: 10px
      left: 50%
      position: absolute
      transform: translateX(-50%)

    &__dot
      margin: 0 10px

      button
        background-color: transparent
        border: 1px solid #fff
        border-radius: 50%
        cursor: pointer
        display: block
        height: 10px
        font-size: 0
        line-height: 0
        margin: 0
        padding: 0
        transition-duration: .3s
        width: 10px

      &--current,
      &:hover
        button
          background-color: #fff

  // Slides styles
  .slide
    display: block
    height: 500px
    object-fit: cover
    width: 100%
</style>
