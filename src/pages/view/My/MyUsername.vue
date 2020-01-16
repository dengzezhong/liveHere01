<template>
  <div>
    <img
      src="https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1579746163&t=ca6ecd5bda87217240e1ad9279ab0378"
      alt
    />
    <div class="top">
       <router-link to="../Home">江南强少</router-link>
       <br>
       <router-link to="../Fair">杭州魅力新城</router-link>
    </div>
  </div>
</template>
<script>
export default {
   
}
</script>
<style lang="stylus" scoped>
div {
  float: left; 

  img {
    float: left;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
  }

  .top {
    float: left;
  }
}
</style>