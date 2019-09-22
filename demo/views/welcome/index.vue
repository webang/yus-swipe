<template>
  <div class="page">
    <a class="slogan" href="https://github.com/Webang/yus-swipe">
      <h3>yus-swipe</h3>
      <p>基于 vue 轻量优雅的swiper组件</p>
      <github></github>
    </a>

    <div class="mod">
      <div class="mod-hd">常用方式</div>
      <swipe
        class="swiper-00"
        :loop="true"
        :autoplay="true"
        direction="horizontal"
        :active-index="0"
        @index-changed="handleIndexChanged"
      >
        <SwipeItem class="swipe-slide" v-for="(item, index) in 3" :key="index">
          <div class="slide-box" :class="['bg'+index]">{{ index }}</div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="mod">
      <div class="mod-hd">水平滚动</div>
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

    <div class="mod">
      <div class="mod-hd">垂直滚动</div>
      <swipe class="swiper-02" :loop="false" direction="vertical" :active-index="0">
        <SwipeItem class="swipe-slide" v-for="(item, index) in slides" :key="index">
          <div class="slide-box" :class="['bg'+index]">{{ index }}</div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="mod">
      <div class="mod-hd">loop模式</div>
      <swipe class="swiper-03" :loop="true" direction="horizontal" :active-index="0">
        <SwipeItem class="swipe-slide" v-for="(item, index) in imgs" :key="index">
          <div class="slide-box">
            <img :src="item" alt />
          </div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="mod">
      <div class="mod-hd">切换效果+autoplay</div>
      <swipe class="swiper-04" :loop="true" :autoplay="true" effect="scale">
        <SwipeItem class="swipe-slide" v-for="(item, index) in imgs" :key="index">
          <div class="slide-box">
            <img :src="item" alt />
          </div>
        </SwipeItem>
      </swipe>
    </div>

    <div class="mod">
      <div class="mod-hd">动态添加</div>
      <swipe class="swiper-02" :active-index="0" :loop="true">
        <SwipeItem class="swipe-slide" v-for="(item, index) in slides2" :key="index">
          <div class="slide-box" :class="['bg'+index]">{{ index }}</div>
        </SwipeItem>
      </swipe>
      <button @click="slides2.push(slides2.length)">添加</button>
      <button @click="slides2.splice(slides2.length - 1, 1)">删除</button>
    </div>

    <div class="mod">
      <div class="mod-hd">监听index-changed事件</div>
      <swipe class="swiper-03" :loop="true" :autoplay="true" :active-index="index1" @index-changed="handleIndexChanged1">
        <SwipeItem class="swipe-slide" v-for="(item, index) in imgs" :key="index">
          <div class="slide-box">
            <img :src="item" alt />
          </div>
        </SwipeItem>
      </swipe>
      <p>当前索引：{{ index1 }}</p>
    </div>

    <div class="mod">
    <div class="mod-hd">space-between=10</div>
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
  </div>
</template>

<script>
import Swipe from '../../../package/swipe';
import SwipeItem from '../../../package/swipe-item';
import github from '../../components/github';

const imgs = [
  '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/54239/34/11063/135392/5d81ee9eE1d1c7e93/5c773e3b05fc114f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
  '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/69641/33/10421/146122/5d8050f9E1eb95850/85b9a7d76aa72260.jpg!cr_1125x445_0_171!q70.jpg.dpg',
  '//imgcps.jd.com/ling4/4477655/5rSB6Z2i5YWo5Z-O54Ot5Yqo/54iG5qy-6ZKc5oOg/p-5c1224c882acdd181d12307f/6886bbbb/cr_1125x445_0_171/s1125x690/q70.jpg'
];

export default {
  components: {
    Swipe,
    SwipeItem,
    github
  },

  data() {
    return {
      imgs,
      slides: [0, 1, 2],
      slides2: [0, 1, 2],
      index1: 0
    };
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
  min-height: 100vh;
  padding-bottom: 10px;
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
  box-sizing: border-box;
}

.mod {
  padding: 0 12px;
}

.mod-hd {
  font-size: 14px;
  line-height: 30px;
  padding-top: 15px;
  padding-bottom: 10px;
  color: #929090;
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
  height: 150px;
  img {
    display: block;
    width: 100%;
    height: 150px;
  }
}

.swiper-04 {
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

button {
  display: block;
  margin: 10px 0;
  width: calc(100%);
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  outline: 0;
  border: 0;
  font-size: 16px;
  background: #0d8fdb;
}

img {
  width: 100%;
}

p {
  margin-top: 10px;
}
</style>
