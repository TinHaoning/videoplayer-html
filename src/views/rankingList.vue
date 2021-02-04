<template>
  <div>
    <div class="background">
      <img :src="bgimg" width="100%" height="100%" alt="">
    </div>
    <div class="warp">
      <van-tabs color="#FF80A8" background="#8655DE" type="card">
        <van-tab title="收益达人">
          <van-row>
            <van-col span="9">
              <img class="num2" :src=num2 alt="">
            </van-col>
            <van-col span="6">
              <img class="num1" :src=num1 alt="">
            </van-col>
            <van-col span="6" offset="1">
              <img class="num3" :src=num3 alt="">
            </van-col>
          </van-row>
          <div>
            <img class="podium" :src=podium alt="">
            <div style="height:150px"></div>
          </div>
          <van-row>
            <van-col>
              <van-list>
                <van-cell v-for="item in revenueList" :key="item" />
              </van-list>
            </van-col>
          </van-row>
        </van-tab>
        <van-tab title="竞拍达人">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgimg: require('@/assets/background.jpg'),
      num1: require('@/assets/num1.png'),
      num2: require('@/assets/num2.png'),
      num3: require('@/assets/num3.png'),
      podium: require('../assets/podium.png'),
      revenueList: [
        {
          username: '张三',
          cash: 2000,
        },
      ],
    }
  },
}
</script>

<style scoped lang='less'>
// 背景
.background {
  width: 100%;
  height: 50%;
  z-index: -1;
  position: absolute;
}
.warp {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  text-align: center;
}
// van-tabs选择器
/deep/.van-tabs--card > .van-tabs__wrap {
  margin-top: 50px;
}
/deep/.van-tabs__nav--card {
  border-radius: 25px;
}
/deep/.van-tab.van-tab--active {
  border-radius: 24px;
}
//冠军亚军季军头像框
.num1 {
  height: 85px;
  width: 80px;
  margin-top: 57px;
}
.num2 {
  height: 80px;
  width: 75px;
  margin-top: 100px;
}
.num3 {
  height: 80px;
  width: 75px;
  margin-top: 111px;
}
//讲台
.podium {
  z-index: -1;
  position: fixed;
  height: 200px;
  width: 340px;
  left: 5%;
  top: 27%;
}
</style>
