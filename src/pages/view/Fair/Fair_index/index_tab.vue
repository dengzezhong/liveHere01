<template>
  <div class="tab">
    <router-link :to="{name: 'market'}" tag="p" ><p>集市</p></router-link>
    <router-link :to="{name: 'community'}" tag="p"><p>社区拼团</p></router-link>
    <router-link :to="{name: 'convenience'}" tag="p"><p>便利</p></router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.tab
  width 100%
  height 0.8rem
  padding 0 0.4rem
  p
    display inline-block
    line-height 0.8rem
    color #bfbfbf
    height 100%
    font-size 0.28rem
    margin-right 0.4rem
    font-weight 600
  .router-link-exact-active p
    color black
    border-bottom 1px solid black
</style>