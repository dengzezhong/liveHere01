<template>
  <div class="wrapper">
    <div class="header">
      <h1>你好 : )</h1>
      <span>暂无专属管家</span>
    </div>
    <div class="container">
      <img src="../../../assets/img/hello.png" alt />
      <p>管家一键呼叫是睿服务提供的贴心功能，你可以通过住这儿快速找到你的管家，提供一对一服务。此功能需要确认门牌号才能使用，现在确认吗？</p>
      <router-link :to="{ name: 'steward_welcome' }" class="comfirm">确认门牌号</router-link>
      <!-- <router-view /> -->
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
  padding 0.4rem

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
    font-size 0.28rem
    line-height 0.4rem
    color #909090
    text-align center

  .comfirm
    width 2.5rem
    height 0.7rem
    line-height 0.7rem
    font-size 0.3rem
    color #da645d
    border 1px solid #da645d
    border-radius 0.4rem
    text-align center
</style>