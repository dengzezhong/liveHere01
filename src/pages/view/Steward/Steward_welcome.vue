<template>
  <div class="wrapper">
      <van-icon name="cross" class="close" @click="goback()"/>
    <div class="header">
      <h1>欢迎 : )</h1>
      <span>欢迎来到杭州魅力之城住这儿，你可以获取管家服务、参与邻里互动、体验友邻市集。</span>
    </div>
    <div class="container">
      <div class="item">
          <div class="left">
              <van-icon name="wap-home-o" />
          </div>
          <div class="center">
              <h2>我住本小区</h2>
              <p>确认房间号后，可享管家服务，参与邻里互动。</p>
          </div>
          <div class="right">
              <van-icon name="arrow" />
          </div>
      </div>
      <div class="item">
          <div class="left">
              <van-icon name="like-o" />
          </div>
          <div class="center">
              <h2>关注本小区</h2>
              <p>可获取本社区公开资讯，了解社区动态</p>
          </div>
          <div class="right">
              <van-icon name="arrow" />
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper 
  width 100%
  padding .4rem
  color #a4a4a4

.close
    font-size .3rem

.header 
  color #454545

  h1 
    font-size .54rem
    line-height 1.8rem
  span 
    font-size .3rem

.container 
  width 100%

.item
    display flex
    justify-content space-between
    color #909090
    padding .7rem 0
    border-bottom 1px solid #eaeaea

    .left
      font-size .5rem
    .center
      width 5rem
      h2
        font-size .35rem
        line-height .6rem
        color #454545
       p 
        width 3rem
        font-size .24rem
        line-height .3rem
    .right
      font-size .4rem
      align-self center


</style>