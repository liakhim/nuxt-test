<template>
  <div>
    <client-only>
      <vue-paginate-al
        :totalPage="totalPages"
        :currentPage="currentPage"
        :nextText="'Next'"
        :prevText="'Previous'"
        :customActiveBGColor="'#8378EC'"
        @btnClick="goToFunction"></vue-paginate-al>
    </client-only>
  </div>
</template>

<script>
  import VuePaginateAl from 'vue-paginate-al'

  export default {
    name: 'App',
    components: {
      VuePaginateAl
    },
    props: {
      totalPages: {
        default: 1
      },
      currentPage: {
        default: 1
      }
    },
    methods : {
      goToFunction : function(n)
      {
        this.$emit('change-page', n)
      }
    }
  }
</script>
<style lang="scss">
  .pagination {
    // border: 1px solid red;
    display: flex!important;
    align-items: center!important;
    justify-content: flex-start!important;
    height: 40px!important;
    & li {
      display: flex;
      align-items: center;
      width: 40px!important;
      height: 40px;
      a {
        border: 1px solid #D2D6DE!important;
        float: inherit!important;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        line-height: 1!important;
        margin: 0!important;
      }
    }
    & .active {
      a {
        border: 1px solid #8378EC!important;
      }
    }
    & li:first-child {
      width: auto!important;
      a {
        border: none!important;
        &:hover {
          background: none!important;
        }
      }
    }
    & li:nth-child(2) {
      a {
        border-radius: 12px 0 0 12px!important;
      }
    }
    & li:nth-last-child(-n+2){
      a {
        border-radius: 0 12px 12px 0!important;
      }
    }
    & li:last-child {
      width: auto!important;
      a {
        border: none!important;
        &:hover {
          background: none!important;
        }
      }
    }
  }
</style>
