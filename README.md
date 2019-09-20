# yus-swipe

基于 vue 的 轻量轮播组件。对于大部分应用来说 [swiper](https://github.com/nolimits4web/swiper) 太大了， 所以需要一款轻量的轮播组件，yus-swipe 绝对能满足你的需求。

## Examples

https://webang.github.io/yus-swipe/dist

## Install

```js
npm i yus-swipe -S
```

## Usage

```
import Vue from 'vue'
import { Swipe, SwipeItem } from 'yus-swipe'

new Vue({
  el: 'body',
  components: {
    Swiper,
    SwipeItem
  },
  data() {
    return {
      loop: false,
      autoplay: false,
      speed: 300,
      direction: 'horizontal',
      activeIndex: 0
    }
  },
  methods: {
    handleIndexChanged(index) {
      this.activeIndex = index;
    }
  }
});
```

```html
<Swipe 
  direction="horizontal"
  :activeIndex="activeIndex"
  :loop="loop"
  :speed="speed"
  :autoplay="autoplay"
  @index-changed="handleIndexChanged"
>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
</Swipe>
```

##  API

### Properties

| Name                 | Type      | Default        | Description                                         |
|----------------------|-----------|----------------|-----------------------------------------------------|
| direction            | `String`  | `"horizontal"` | 'horizontal' or 'vertical' is available             |
| activeIndex          | `Number`  | `0`            | Index number of initial slide                       |
| speed                | `Number`  | `300`          | Duration of transition between slides (in ms)       |
| autoplay             | `Boolean` | `false`        | Set true enable auto play                           |
| delay                | `Number`  | `3000`         | wait time when enable autoplay                      |
| loop                 | `Boolean` | `false`        | Set true to enable continuous loop mode             |

### Methods

| Method            | Description              |
|-------------------|--------------------------|
| slideNext()       | Go next page.            |
| slidePrev()       | Go previous page.        |
| slideTo(`Number`) | slide to number.         |

### Events

| Name              | Parameters  | Description         |
|-------------------|------------ |---------------------|
| index-changed     | `index`     | current slide index |

## Slots

| Name         | Description       |
|--------------|------------------ |
| pagination   | slide pagination  |
