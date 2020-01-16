<template>
  <div class="mywrap">
    <!-- 头像、用户名 -->
    <div class="myHeadWrap">
      <img
        src="https://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1579746163&t=ca6ecd5bda87217240e1ad9279ab0378"
        alt
      />
      <div class="top">
        <router-link to="../Home">江南强少</router-link>
        <br />
        <router-link to="../Fair">杭州魅力新城</router-link>
      </div>
      <!-- <img src="../../../assets/img/myusernamehead.jpg" alt=""> -->
    </div>
    <!-- 账户 -->
    <div class="myaccount">
      <!-- 账户余额 -->
      <div class="accountbalance">
        <div class="accountbalance00">
          <p>0.0</p>
          <p>账户余额</p>
        </div>
        <!-- <div>
          <p>进入账户</p>
        </div>-->
        <button>进入账户</button>
      </div>
      <!-- 我的房屋 4个块-->
      <div class="myhouse">
        <div>1</div> 
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {};
</script>
<style lang="stylus" scoped>
// 外部
.mywrap {
  display: flex;
  flex-direction: column;

  .myHeadWrap {
    border-bottom: 1px #eaeaea solid;
    display: flex;
    width: 100%;
    height: 2.64rem;
    float: left;
    background: url('../../../assets/img/myusernamehead.jpg') no-repeat 5.8rem;
    background-size: 1.73rem 1rem;

    img {
      margin-top: 0.28rem;
      float: left;
      width: 1.78rem;
      height: 1.78rem; 
      border-radius: 50%;
      margin-left: 0.55rem;
    }

    .top {
      margin-top: 0.48rem;
      margin-left: 0.32rem;
      float: left;

      :nth-child(1) {
        color: #454545;
        font-size: 0.6rem;
        margin-button: 0.5rem;
      }

      :nth-child(3) {
        color: #212832;
        line-height: 0.83rem;
        font-size: 0.32rem;
      }
    }
  }

  .myaccount {
    height: 6.88rem;
    width: 100%;
    // background: red;

    .accountbalance {
      // 账户余额0.0
      .accountbalance00 {
        margin-top: 0.66rem;

        :nth-child(1) {
          font-size: 0.5rem;
        }

        :nth-child(2) {
          font-size: 0.32rem;
          color: #909090;
          line-height: 0.66rem;
        }
      }

      display: flex;
      margin: 0 0.42rem;
      justify-content: space-between;

      button {
        width: 2.64rem;
        height: 0.87rem;
        border-radius: 0.75rem;
        font-size: 0.42rem;
        border:#000 solid 1px;
        margin-top: 0.72rem;
        letter-spacing: 0.02rem;
        background: #fff;
      }
    }

    .myhouse {
        margin-top 0.94rem
        margin-left 0.44rem
        display: flex;
        div{
            width 2.7rem
            height 3rem
            margin-right 0.28rem
            border-radius 0.15rem
        }
        :nth-child(1){
            background #f29d9a
        }
        :nth-child(2){
            background #f8b298
        }
        :nth-child(3){
            background #fecf8b
        }
        :nth-child(4){
            margin-right 0
            background #9cafd7
        }
    }
  }
}
</style>