<template>
  <div>
    <div class="header">
      <div class="header-top">
        <van-icon name="arrow-left" class="goback" @click="goBack()"/>
        <van-button  class="finished">完成</van-button>
      </div>
      <div class="title">
        <h1>新邀请</h1>
        <span>杭州金沙阳光公寓</span>
      </div>
      <div class="form">
        <!-- 访客姓名 -->
        <van-cell-group>
          <van-field v-model="name" placeholder="请输入" label="访客姓名"/>
          <div class="radio" :v-model="radio">
            <div name="1" class="sex">女士</div>
            <div name="2" class="sex">先生</div>
          </div>
        </van-cell-group>
        <!-- 访客来人 -->
        <van-cell title="来访人数" 
          is-link readonly
          clickable
          :value="number"
          placeholder="选择人数"
          @click="showPicker = true"/>

        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
        <!-- 来访事由 -->
        <van-cell title="来访事由" 
          is-link readonly
          clickable
          :value="thing"
          placeholder="选择事由"
          @click="showThingPicker = true"/>

        <van-popup v-model="showThingPicker" position="bottom">
          <van-picker
            show-toolbar
            :things="things"
            @cancel="showThingPicker = false"
            @confirm="onConfirms"
          />
        </van-popup>
        <!-- 有效期至 -->
        <van-cell title="有效期至" :value="date" @click="show = true" is-link />

<van-calendar v-model="show" @confirm="onConfirmDate" />
        <!-- 是否驾车 -->
        <van-cell center title="是否驾车">
          <van-switch v-model="checked" slot="right-icon" size="24" />
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1', //单选项
      checked: true,
      name:'',
      number:'',
      thing:'',
      date: '',
      show: false,
      showPicker: false,
      showThingPicker: false,
      columns: ["1人", "2人", "3人", "4人", "5人及以上"],
      things:["访友","探亲","其它"]
    };
  },
  methods: {
    onConfirm(number) {
      this.number = number;
      this.showPicker = false;
    },
    onConfirms(thing) {
      this.thing = thing;
      this.showThingPicker = false;
    },
    formatDate(date) {
      return `${date.getFullYear()}年0${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirmDate(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    goBack(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="stylus" scoped>
.header 
  color #454545
  margin-top .2rem
  padding 0 .4rem

  .header-top
    display flex
    justify-content space-between
    align-items center
    .goback
      font-size .3rem
      font-weight bolder
    .finished
      width 1.2rem
      height .6rem
      font-size .28rem
      line-height .6rem
      background #eaeaea
      color #999
      border-radius .15rem
  .title
    h1 
      font-size .54rem
      line-height .8rem
    span 
      font-size .3rem
      color #b7b7b7
  .form
    width 100%
    .van-cell
      padding 0
    .van-cell__right-icon
      line-height 1.1rem
    .van-cell--clickable
      color #454545
      font-size .32rem
      padding:0
      height 1.1rem
      line-height 1.1rem

    .van-cell--center
      color #454545
      font-size .32rem
      padding:0
      height 1.1rem
      line-height 1.1rem
      
    .van-cell-group
      position relative
      .van-cell
        color #454545
        font-size .32rem
        padding:0
        height 1.1rem
        line-height 1.1rem
        display flex
        align-items center
        position relative
      input 
        color #c4c4c6
      .radio
        display flex
        align-items center
        justify-content space-around
        width 3rem
        height 100%
        position absolute
        right 0 
        top 0
        .sex 
          width 1.2rem
          height .6rem
          border 1px solid #454545
          border-radius .5rem
          color #454545
          font-size .28rem
          text-align center
          line-height .6rem


</style>