// 组件总入口文件，单一页面

<template>
 <div id="app">
    <router-view></router-view>
    <Footer v-if="$route.meta.footerShow"/>
 </div>
</template>

<script>
import Footer from './pages/Footer/Footer'
export default {
  components:{
    Footer,
  }
}
</script>

<style lang="stylus" scoped>

</style>