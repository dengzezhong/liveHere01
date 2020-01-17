<template>
  <div class="wrapper">
      <div class="top">
          <span class="cancel">取消</span>
          <span class="send">发送</span>
      </div>
      <div class="container">
          <h2>维修</h2>
          <textarea class="text" name="" id="" cols="30" rows="10" placeholder="请输入问题详情，以便我们更好地处理">
          </textarea>
          <p>添加图片</p>
          <!-- 添加图片 -->
          <div class="fileList">
              <van-uploader
                v-model="fileList"
                multiple
                :max-count="3"
             />
          </div>
          <!-- 期望上门时段 -->
          
          
          <!-- <van-uploader :before-read="beforeRead" /> -->


      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        fileList: []
        }
    },
    methods: {
        afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        }
    }
  }
</script>

<style lang="stylus" scoped>
.wrapper
    padding 0 .4rem
    width 100%
    height 100%

.top
    display flex
    justify-content space-between
    align-items center
    font-size .3rem
    .cancel
        color #454545
    .send
        color #da645d
        font-weight bold
.container
    h2
        font-size 
    .text
        resize none
        outline 0
        background #eaeaea
    .fileList
        width 100%
        height 1.8rem
        display flex
        justify-content space-between
    

</style>