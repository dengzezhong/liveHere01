<template>
  <div class="wrapper">
    <div class="top">
      <span class="cancel" @click="goBack()">取消</span>
      <span class="send" @click="send()">发送</span>

    </div>
    <div class="container">
      <h2>维修</h2>
      <textarea class="text" name id cols="30" rows="10" placeholder="请输入问题详情，以便我们更好地处理。"></textarea>
      <span>添加图片</span>
      <!-- 添加图片 -->
      <div class="fileList">
        <van-uploader v-model="fileList" multiple :max-count="3" />
      </div>
      <!-- 期望上门时段 -->
      <van-cell-group>
        <van-cell title="期望上门时段" 
          is-link readonly
          clickable
          arrow-direction="down"
          :value="time"
          placeholder="选择上门时段"
          @click="showPicker = true"/>

        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </van-cell-group>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      time:'',
      date: '',
      show: false,
      showPicker: false,
       columns: ['尽快上门', '9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00','13:00-14:00','14:00-15:00','15:00-16:00',"16:00-17:00","17:00-18:00","18:00-19:00"]
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    onConfirm(time) {
      this.time = time;
      this.showPicker = false;
    },
    onConfirmDate(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    goBack(){
      this.$router.go(-1)
    },
    send(){
      this.$notify('发送成功');
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  padding: 0 0.4rem;
  width: 100%;
  height: 100%;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;

  .cancel {
    color: #8a8a8a;
  }

  .send {
    color: #da645d;
    font-weight: bold;
  }
}

.container {
  color: #cbcbcb;

  h2 {
    font-size: 0.6rem;
    color: #454545;
    line-height: 1.2rem;
  }

  span {
    font-size: 0.26rem;
    line-height: 0.3rem;
  }

  .text {
    resize: none;
    outline: 0;
    border: 0;
    width: 100%;
    padding: 0.2rem 0;
    font-size: 0.3rem;
    line-height: 0.5rem;
    color: #454545;
  }

  textarea::-webkit-input-placeholder {
    color: #cbcbcb;
  }

  .fileList {
    width: 100%;
    height: 1.8rem;
    display: flex;
    justify-content: space-between;
    margin: 0.2rem 0;
  }
}
</style>