<template>
  <div>
     <router-view name="market" ></router-view>
     <router-view name="community"></router-view>
     <router-view name="convenience"></router-view>
  </div>
</template>
<script>
export default {
  created(){
    console.log(this.$route.meta.footerShow);
  }
}
</script>
<style lang="stylus" scoped></style>