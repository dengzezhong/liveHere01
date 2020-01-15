<template>
    <footer>
        <router-link to='home'><van-icon name="wap-home-o" /><br> 首页</router-link>
        <router-link to='fair'><van-icon name="cart-circle-o" /><br>友邻市集555</router-link>
        <router-link to='steward'><van-icon name="comment-o" /><br>管家你好</router-link>
        <router-link to='community'><van-icon name="send-gift-o" /><br>社区</router-link>
        <router-link to='my'><van-icon name="user-o" /><br>我</router-link>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
footer 
    width 100%
    height .58rem
    padding-bottom .04rem
    display flex
    justify-content space-around
    align-items flex-end
    border-top .01rem solid #d8d8d8
    position fixed
    bottom 0
    left 0
    background #fff
    a
        text-align center
        font-size .1rem
        color #696969
        text-decoration none
        .van-icon
            font-size .32rem
 a.router-link-active{
    color: #f66;
  }
</style>