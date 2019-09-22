<template>
  <div class="page">
    <div class="mod-hd">spaceBetween=18</div>
    <swipe
      ref="swipe"
      class="swipe-160"
      :loop="true"
      :autoplay="true"
      direction="horizontal"
      :active-index="0"
      :space-between="18"
      @index-changed="handleIndexChanged"
    >
      <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
        <div class="slide-box" :class="['bg'+index]">{{ index }}</div>
      </SwipeItem>
    </swipe>

    <div class="mod-hd">spaceBetween=10</div>
    <swipe
      ref="swipe"
      class="swiper"
      :loop="true"
      :autoplay="true"
      direction="horizontal"
      :active-index="0"
      :space-between="10"
      @index-changed="handleIndexChanged"
    >
      <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
        <img :src="imgs[index]" alt="">
      </SwipeItem>
    </swipe>
  </div>
</template>

<script>
import Swipe from '../../../package/swipe';
import SwipeItem from '../../../package/swipe-item';
const imgs = [
  '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/54239/34/11063/135392/5d81ee9eE1d1c7e93/5c773e3b05fc114f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
  '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/69641/33/10421/146122/5d8050f9E1eb95850/85b9a7d76aa72260.jpg!cr_1125x445_0_171!q70.jpg.dpg',
  '//imgcps.jd.com/ling4/4477655/5rSB6Z2i5YWo5Z-O54Ot5Yqo/54iG5qy-6ZKc5oOg/p-5c1224c882acdd181d12307f/6886bbbb/cr_1125x445_0_171/s1125x690/q70.jpg'
];

export default {
  components: {
    Swipe,
    SwipeItem
  },

  data() {
    return {
      imgs,
      slides: [0, 1, 2],
      spaceBetween: 20
    };
  },

  watch: {
    spaceBetween(val) {
      this.$refs.swipe.setup();
    }
  },

  methods: {
    handleIndexChanged(val) {
      // console.log(val);
    },
    handleIndexChanged1(val) {
      this.index1 = val;
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 12px;
  min-height: 100vh;
  background: #f5f5f9;
  .bg0 {
    color: #fff;
    background: #f8591a;
  }
  .bg1 {
    color: #fff;
    background: #3adbac;
  }
  .bg2 {
    color: #fff;
    background: #0d8fdb;
  }
}

.swipe-slide {
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  box-sizing: border-box;
}

.mod-hd {
  height: 40px;
  padding: 0 12px;
  padding-top: 10px;
  font-size: 14px;
  line-height: 40px;
  color: #455a6499;
}

.swipe-160 {
  height: 160px;
  font-size: 30px;
  text-align: center;
}

img {
  display: block;
  width: 100%;
}

input {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  outline: 0;
}
</style>
