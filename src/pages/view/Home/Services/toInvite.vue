<template>
  <div>
    <div class="header">
      <div class="header-top">
        <van-icon name="arrow-left" />
        <button>完成</button>
      </div>
      <div class="title">
        <h1>新邀请</h1>
        <span>杭州金沙阳光公寓</span>
      </div>
      <div>
        <!-- 访客姓名 -->
        <van-cell-group>
        <van-field v-model="name" placeholder="请输入" label="访客姓名"/>

        <van-radio-group v-model="radio">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
        </van-radio-group>
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
      radio: '1',
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
    }
  }
};
</script>

<style lang="stylus" scoped></style>