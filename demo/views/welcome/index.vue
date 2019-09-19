<template>
  <div class="page">
    <a class="slogan" href="https://github.com/Webang/yus-swipe">
      <h3>yus-swipe</h3>
      <p>基于 vue 轻量优雅的swiper组件</p>
      <svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        aria-hidden="true"
        style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255); position: absolute; top: 0px; border: 0px; right: 0px;"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          class="octo-arm"
          style="transform-origin: 130px 106px 0px;"
        />
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        />
      </svg>
    </a>

    <div class="demo-block">
      <div class="demo-block-hd">常用方式</div>
      <swipe
        class="swiper-00"
        :loop="true"
        direction="horizontal"
        :active-index="0"
        @index-changed="handleIndexChanged"
      >
        <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
          <div class="slide-box" :class="['bg'+index]">{{ index }}</div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="demo-block">
      <div class="demo-block-hd">水平滚动</div>
      <swipe
        class="swiper-01"
        :loop="false"
        :autoplay="false"
        direction="horizontal"
        :active-index="0"
      >
        <SwipeItem class="swipe-slide" v-for="(item, index) in imgs" :key="index">
          <div class="slide-box">
            <img :src="item" alt />
          </div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="demo-block">
      <div class="demo-block-hd">垂直滚动</div>
      <swipe class="swiper-02" :loop="false" direction="vertical" :active-index="0">
        <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
          <div class="slide-box" :class="['bg'+index]">{{ index }}</div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="demo-block">
      <div class="demo-block-hd">loop模式</div>
      <swipe class="swiper-03" :loop="true" direction="horizontal" :active-index="0">
        <SwipeItem class="swipe-slide" v-for="(item, index) in imgs" :key="index">
          <div class="slide-box">
            <img :src="item" alt />
          </div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="demo-block">
      <div class="demo-block-hd">切换效果</div>
      <swipe class="swiper-04" :loop="true" direction="horizontal" :active-index="0" effect="scale">
        <SwipeItem class="swipe-slide" v-for="(item, index) in imgs" :key="index">
          <div class="slide-box">
            <img :src="item" alt />
          </div>
        </SwipeItem>
      </swipe>
    </div>
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
      imgs
    };
  },

  methods: {
    handleIndexChanged(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="less">
.page {
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

.slogan {
  display: block;
  height: 100px;
  padding: 20px 0;
  text-align: center;
  color: #fff;
  background: #2196f3;
  text-decoration: none;
}

.slogan h3 {
  font-size: 30px;
  padding-top: 10px;
}

.slogan p {
  font-size: 14px;
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
}

.demo-block {
  padding: 12px;
  padding: 12px 0;
}

.demo-block-hd {
  padding: 0 12px;
  font-size: 16px;
  line-height: 24px;
  color: #333;
  font-weight: bold;
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

.swiper-04,
.swiper-03,
.swiper-01 {
  height: 140px;
  img {
    display: block;
    width: 100%;
  }
}

.swiper-04 {
  margin: 12px;
  .slide-box {
    margin: 0px;
    border: 0;
    border-radius: 6px;
    background: transparent;
  }
  img {
    border-radius: 6px;
  }
}
</style>
