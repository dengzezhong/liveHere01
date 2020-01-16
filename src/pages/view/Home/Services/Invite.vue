<template>
  <div class="wrapper">
    <van-icon name="arrow-left" class="goback" @click="goback()"/>
    <div class="header">
      <h1>访客邀请</h1>
      <span>杭州金沙阳光公寓</span>
    </div>
    <div class="container">
      <img src="../../../../assets/img/invite.png" alt />
      <p>暂无邀请记录</p>
    </div>
    <div class="bottom">
      <router-link to="/toInvite" class="box">
      <van-icon name="plus" class="invite"/>
      <span>去邀请</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.wrapper 
  width 100%
  padding .4rem

.goback
  font-size .3rem

.header 
  color #454545

  h1 
    font-size 0.54rem
    line-height 0.8rem

  span 
    font-size 0.26rem

.container
  width 72%
  height 50%
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  margin auto
  display flex
  flex-direction column
  justify-content space-between
  align-items center

  img 
    width 100%

  p
    font-size 0.35rem
    line-height 0.4rem
    color #909090
    text-align center

.bottom
    width 100%
    height 1.45rem
    position fixed
    left 0
    bottom 0
    border-top 1px solid #eaeaea
    display flex


  .box
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    .invite
      font-size  .6rem
      color #e86861
    span
      font-size .3rem
      line-height .5rem
      color #454545
</style>