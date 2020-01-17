<template>
    <div class="wrapper">
        <!-- header start -->
        <div class="homeHeader">
            <span class="iconfont iconicon-"></span>
            <span>住这儿</span>
            <span><i  class="iconfont iconhuangguan"></i><i class="iconfont iconlingdang"></i></span>
        </div>
        <!-- banner start -->
        <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="../../../assets/img/banner-2.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../../../assets/img/banner-1.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../../../assets/img/banner-3.jpg" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- serve start -->
        <div class="serve">
            <router-link to='/..'>
            <p class="iconfont iconpeizhitubiaosvg-"></p>
            手机开门</router-link>
            <router-link to='/..'>
            <p class="iconfont iconzhangdan"></p>
            房屋账单</router-link>
            <router-link to='/..'>
            <p class="iconfont iconicon_huabanfuben"></p>
            访客邀请</router-link>
            <router-link to='/..'>
            <p class="iconfont iconweixiu"></p>
            维修</router-link>
            <router-link to='/..'>
            <p class="iconfont iconshuifen"></p>
            送水</router-link>
            <router-link to='/..'>
            <p class="iconfont iconcheliang"></p>
            我的车</router-link>
            <router-link to='/..'>
            <p class="iconfont iconkuaidi"></p>
            快递查询</router-link>
            <router-link to='/userserve'>查看 <br> 更多</router-link>
        </div>
        <!-- notice start -->
        <div class="notice">
            <span>物业 <br> 公告</span>
            <span>查看往期公告~</span>
            <span> &lt; </span>
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
        height 100%
        padding .1rem
        background #f5f5f5
    .homeHeader
        display flex
        padding-bottom .24rem
        border-bottom .02rem solid #f1f1f1
        justify-content space-between
        align-items center
        font-weight 500
        font-size .48rem
        span:nth-child(2)
            font-weight 900
        .iconfont
            font-size .46rem
        i:nth-child(1)
            margin-right .24rem
    .banner
        position relative
        border-top-left-radius .1rem
        border-top-right-radius .1rem
        overflow hidden
        img
            width 100%
            height 3rem
    .serve
        background #fff
        padding .24rem .18rem
        display flex
        flex-wrap: nowrap;
        overflow-x: scroll;
        a
            padding .24rem .04rem
            font-size .1rem
            display inline-block
            width 1.6rem
            text-align center
            color #333
            margin-right .2rem
            background #fff
            box-shadow 1px 1px 3px 1px #ccc
            flex-shrink 0
            p
                margin-bottom .16rem
                font-size .52rem
        a:last-of-type
            margin-right .24rem
            width 1.2rem
            color #f00
            font-size .32rem
            font-weight 900
    .notice
        padding .24rem .18rem
        background #fff
        display flex
        justify-content space-between
        align-items center
        span:nth-of-type(1)
            display inline-block
            font-size .18rem
            font-weight 900
            color #666
            padding-right .12rem
            border-right .03rem solid #ccc
        span:nth-of-type(2)
            font-size .1rem
            color #888
        span:nth-of-type(3)
            font-weight 900
            font-size .48rem
            color #888
</style>