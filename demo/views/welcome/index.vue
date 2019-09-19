<template>
  <div class="page">
    <div class="demo-block">
      <div class="demo-block-hd">loop模式</div>
      <swipe
        class="swiper-03"
        :loop="true"
        direction="horizontal"
        :active-index="0"
        @index-changed="handleIndexChanged"
      >
        <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
          <div class="slide-box">{{ index }}</div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="demo-block">
      <div class="demo-block-hd">基础演示</div>
      <swipe
        class="swiper-00"
        :loop="false"
        :autoplay="false"
        direction="horizontal"
        :active-index="0"
      >
        <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
          <div class="slide-box">{{ index }}</div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="demo-block">
      <div class="demo-block-hd">水平滚动</div>
      <swipe class="swiper-01" :loop="false" direction="horizontal" :active-index="0">
        <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
          <div class="slide-box">{{ index }}</div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="demo-block">
      <div class="demo-block-hd">垂直滚动</div>
      <swipe class="swiper-02" :loop="false" direction="vertical" :active-index="0">
        <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
          <div class="slide-box">{{ index }}</div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="demo-block">
      <div class="demo-block-hd">loop模式</div>
      <swipe class="swiper-03" :loop="true" direction="horizontal" :active-index="0">
        <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
          <div class="slide-box">{{ index }}</div>
        </SwipeItem>
      </swipe>
    </div>
  </div>
</template>

<script>
import Swipe from "../../../package/swipe";
import SwipeItem from "../../../package/swipe-item";

export default {
  components: {
    Swipe,
    SwipeItem
  },

  data() {
    return {};
  },

  methods: {
    handleIndexChanged(val) {
      console.log(val);
    }
  }
};
</script>

<style>
.page {
  min-height: 100vh;
  background: #f3f3f3;
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
  margin: 10px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid;
  border-color: #e5e5e5 #d3d3d3 #b9c1c6;
}

.demo-block {
  padding: 12px;
  padding: 12px 0;
}

.demo-block-hd {
  padding: 0 12px;
  font-size: 14px;
  line-height: 24px;
  padding-bottom: 10px;
}

.swiper-00 {
  height: 160px;
  font-size: 30px;
  text-align: center;
}

.swiper-01 {
  height: 160px;
  font-size: 30px;
  text-align: center;
}

.swiper-02 {
  height: 200px;
  font-size: 30px;
  text-align: center;
}

.swiper-03 {
  height: 160px;
  font-size: 30px;
  text-align: center;
}
</style>
