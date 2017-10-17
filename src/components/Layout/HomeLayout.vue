<template>
  <div id="app">
    <home-header :seller="seller"></home-header>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/sellers">商家</router-link></div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HomeHeader from 'components/Home/HomeHeader/HomeHeader'
  const ERR_OK = 0
  const debug = process.env.NODE_ENV !== 'production'
  export default {
    data () {
      return {
        seller: {}
      }
    },
    created () {
      const url = debug ? '/api/seller' : 'http://ustbhuangyi.com/sell/api/seller'
      this.$http.get(url).then((response) => {
        if (response.data['errno'] === ERR_OK) {
          this.seller = response.data['data']
        }
      })
    },
    components: {
      HomeHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixin.styl"
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex 1
        text-align center
        & > a
          display block
          font-size 14px
          color rgb(77,85,93)
          &.router-link-exact-active
            color rgb(240,20,20)
</style>
