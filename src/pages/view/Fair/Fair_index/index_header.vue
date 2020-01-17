<template>
  <div class="search_box">
    <div>
      <router-link class="page_search" to='/search'>
        <van-icon name="search" />搜索商品

      </router-link>
      <!-- <div class="page_search">
        <van-icon name="search" />搜索商品
      </div> -->
    </div>
    <div>
      <router-link class="search_btn_cart1" to='home'>
        <van-icon name="cart-o" />
      </router-link>

      <router-link class="search_btn_cart2" to='home'>
         <van-icon name="cart-o" />
      </router-link>
<router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    console.log(this.$route.params.sid);
}
}
</script>
<style lang="stylus" scoped>
.search_box
  display flex
  background red
  width 100%
  padding 0 0.4rem
  height 0.8rem
  flex 1
  align-items center
  div:nth-of-type(1)
    width 5rem
    height 0.6rem
    .page_search
      display inline-block
      font-size 0.28rem
      width 100%
      height 100%
      border-radius 0.25rem
      border 0
      background #ededed
      color #d0d0d0
      text-align center
      line-height 0.6rem
  div:nth-of-type(2)
    width 1.7rem
    height 0.6rem
    .search_btn_cart1, .search_btn_cart2
      display inline-block
      width 50%
      height 100%
      text-align center
      line-height 0.6rem
      color #454545
      font-size 0.5rem
</style>