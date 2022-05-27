<template>
  <LandingLayout>
    <template>
      <BlogHeader v-if="!$route.params.name"/>
      <div class="blog-container" :class="{'article-container-wrap': !!$route.params.name}">
        <div v-if="!$route.params.name" class="blog__latest-news-container blog-container">
          <h3>Latest News</h3>
        </div>
        <div style="display:flex; width: 100%;">
          <div style="width: 100%;">
            <slot></slot>
          </div>
          <div>
            <BlogAside/>
          </div>
        </div>
      </div>
    </template>
  </LandingLayout>
</template>
<style lang="scss">
  @import '../../styles/Blog/blog_search.scss';
  @import '../../styles/Blog/blog';
  @import '../../styles/Blog/blog_pagination';
  @import '../../styles/Blog/blog-aside.scss';
  @import '../../styles/Blog/blog-article-page.scss';
</style>
