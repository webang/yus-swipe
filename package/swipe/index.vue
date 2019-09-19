<template>
  <div
    class="yus-swipe"
    ref="wrapperEl"
    :class="[
    'effect-' + effect,
    {
      'is-vertical': !isHorizontal,
    },]"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @mousedown="onTouchStart"
    @mousemove="onTouchMove"
    @mouseup="onTouchEnd"
  >
    <div class="yus-swipe-container" ref="containerEl" :style="containerStl">
      <slot></slot>
    </div>
    <slot name="pagination">
      <div class="yus-swipe-pagination">
        <span
          class="yus-swipe-pagination-item"
          v-for="(item, index) in realLength"
          :key="index"
          :class="{'yus-swipe-pagination-item-active': index === currentIndex}"
        ></span>
      </div>
    </slot>
  </div>
</template>

<script>
const Utils = {
  now: function() {
    return +new Date();
  },
  noop: function() {},
  nextTick: function(fn, delay) {
    setTimeout(fn || this.noop, delay || 0);
  },
  addEvent: function(element, type, handler, bool) {
    element.addEventListener(type, handler, bool || false);
  },
  removeEvent: function() {
    element.removeEventListener(type, handler, bool || false);
  }
};

export const SHORT_TOUCH = 250;
export const VERTICAL = 'vertical';
export const HORIZONTAL = 'horizontal';
export const RATIO = 0.3;

export default {
  props: {
    // 轮播方向
    direction: {
      type: String,
      default: VERTICAL,
      validator: value => [VERTICAL, HORIZONTAL].indexOf(value) > -1
    },

    // 是否无限模式
    loop: {
      type: Boolean,
      default: false
    },

    // 轮播速度
    speed: {
      type: Number,
      default: 300
    },

    // 初始索引
    activeIndex: {
      type: Number,
      default: 0
    },

    // 是否自动轮播
    autoplay: {
      type: Boolean,
      default: false
    },

    // 轮播间隔
    delay: {
      type: Number,
      default: 4000
    },

    // 切换效果
    effect: {
      type: String,
      default: 'slide'
    }
  },

  data() {
    return {
      wrapperEl: null,
      containerEl: null,
      width: undefined,
      height: undefined,
      slides: [],
      isScrolling: undefined,
      length: undefined,
      size: undefined,
      touches: {
        startX: undefined,
        startY: undefined,
        endX: undefined,
        endY: undefined,
        diff: undefined,
        diffX: undefined,
        diddY: undefined,
        currentX: undefined,
        currentY: undefined,
        startTranslate: undefined,
        time: undefined,
        isMoved: undefined
      },
      gridIndex: 0,
      slidesGrid: [],
      translate: 0,
      currentIndex: this.activeIndex,
      transitionDuration: 0,
      rectProp: '',
      maxGridIndex: 0,
      minGridIndex: 0,
      maxTranslate: 0,
      minTranslate: 0,
      interval: null,
      realLength: 0
    };
  },

  computed: {
    isHorizontal() {
      return this.direction === HORIZONTAL;
    },
    isLoop() {
      return !!this.loop;
    },
    containerStl() {
      if (this.isHorizontal) {
        return {
          width: `${this.slides.length * this.size}px`,
          transform: `translate3d(${this.translate}px, 0, 0)`,
          'transition-duration': `${this.transitionDuration}ms`
        };
      } else {
        return {
          height: `${this.slides.length * this.size}px`,
          transform: `translate3d(0, ${this.translate}px, 0)`,
          'transition-duration': `${this.transitionDuration}ms`
        };
      }
    }
  },

  watch: {
    gridIndex(val) {
      if (this.isLoop) {
        if (val === 0) {
          this.currentIndex = this.maxGridIndex - 1;
        } else if (val === this.maxGridIndex) {
          this.currentIndex = 0;
        } else {
          this.currentIndex = val - 1;
        }
      } else {
        this.currentIndex = val;
      }
    },
    currentIndex(val) {
      this.$emit('index-changed', val);
    }
  },

  mounted() {
    this.setup();
  },

  methods: {
    setup() {
      // setup size and el
      const { wrapperEl, containerEl } = this.$refs;
      const { width, height } = wrapperEl.getBoundingClientRect();

      this.width = width;
      this.height = height;
      this.rectProp = this.isHorizontal ? 'width' : 'height';
      this.size = this.isHorizontal ? +this.width : +this.height;
      this.wrapperEl = wrapperEl;
      this.containerEl = containerEl;
      this.realLength = containerEl.children.length;

      // create loop
      if (this.isLoop) {
        this.createLoopEl();
      }

      // setup slides
      this.slides = containerEl.children;
      this.slidesGrid = new Array(this.slides.length);

      // setup slide item style
      [].forEach.call(this.slides, (element, index) => {
        element.style[this.rectProp] = this.size + 'px';
        this.slidesGrid[index] = index * this.size;
      });

      this.minGridIndex = 0;
      this.maxGridIndex = this.slides.length - 1;
      this.minTranslate = this.slidesGrid[this.minGridIndex];
      this.maxTranslate = this.slidesGrid[this.maxGridIndex];

      // setup initial gridIndex
      if (this.isLoop) this.gridIndex = this.activeIndex + 1;

      // setup initial postion
      this.slideTo(this.gridIndex, 0);

      // setup autoplay
      if (this.autoplay) {
        this.start();
      }
    },

    onTouchStart(event) {
      const touch = this.getEventTouch(event);

      this.touches.diff = 0;
      this.isScrolling = undefined;
      this.touches.time = Utils.now();
      this.touches.startX = touch.pageX;
      this.touches.startY = touch.pageY;
      this.touches.startTranslate = this.translate;
      this.touches.isMoved = false;
      this.transitionDuration = 0;

      if (this.autoplay) this.stop();
    },

    onTouchMove(event) {
      const { touches, isHorizontal } = this;
      const touch = this.getEventTouch(event);

      touches.currentX = touch.pageX;
      touches.currentY = touch.pageY;
      touches.diffX = touch.pageX - touches.startX;
      touches.diffY = touch.pageY - touches.startY;
      touches.diff = isHorizontal ? touches.diffX : touches.diffY;

      // determine isScrolling
      if (typeof this.isScrolling === 'undefined') {
        if (isHorizontal) {
          this.isScrolling = Math.abs(touches.diffX) < Math.abs(touches.diffY);
        } else {
          this.isScrolling = Math.abs(touches.diffX) > Math.abs(touches.diffY);
        }
      }

      // do not move when it is isScrolling
      if (this.isScrolling) return;

      event.preventDefault();

      let translate = touches.diff + this.touches.startTranslate;

      if (this.isLoop) {
        if (Math.abs(translate) >= this.maxTranslate) {
          this.slideTo(1, 0);
          touches.startX = touch.pageX;
          touches.startY = touch.pageY;
          touches.diff = 0;
          this.touches.startTranslate = touches.diff + 1 * this.size * -1;
          this.setTranslate(touches.diff + 1 * this.size * -1);
        } else if (translate >= 0) {
          this.slideTo(this.slidesGrid.length - 2, 0);
          touches.startX = touch.pageX;
          touches.startY = touch.pageY;
          touches.diff = 0;
          let translate = touches.diff + (this.slidesGrid.length - 2) * this.size * -1;
          this.touches.startTranslate = translate;
          this.setTranslate(translate);
        } else {
          this.setTranslate(translate);
        }
      } else {
        if (Math.abs(translate) >= this.maxTranslate) {
          translate = touches.diff * RATIO + this.touches.startTranslate;
        }
        if (translate >= 0) {
          translate = touches.diff * RATIO + this.touches.startTranslate;
        }
        this.setTranslate(translate);
      }
    },

    onTouchEnd() {
      const { touches } = this;
      if (this.isScrolling || touches.diff === 0) {
        return;
      }

      // determine touch is from right to left
      let rtl = touches.diff < 0;

      // calclate new gridIndex
      let diffTime = Utils.now() - touches.time;
      let isShortTouch = diffTime < SHORT_TOUCH;
      let gridIndex = this.gridIndex;
      let isValidTouch = isShortTouch || Math.abs(touches.diff) > this.size / 2;

      if (rtl && isValidTouch) {
        gridIndex++;
      } else if (!rtl && isValidTouch) {
        gridIndex--;
      }

      this.slideTo(gridIndex, this.speed);

      if (this.autoplay) {
        setTimeout(this.start, this.speed);
      }
    },

    getEventTouch(e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    },

    // index
    slideTo(index, speed) {
      if (this.isLoop) {
        if (index > this.maxGridIndex) {
          this.transitionDuration = 0;
          this.gridIndex = 1;
          this.setTranslate(-this.size);
          index = 2;
        }
        if (index < this.minGridIndex) {
          this.transitionDuration = 0;
          this.gridIndex = this.maxGridIndex - 1;
          this.setTranslate(-(this.maxGridIndex - 1) * this.size);
          index = this.maxGridIndex - 2;
        }
      }

      setTimeout(() => {
        if (typeof speed === 'undefined') {
          speed = this.speed;
        }

        this.transitionDuration = speed;

        if (!this.isLoop) {
          if (index < 0) index = 0;
          if (index > this.maxGridIndex) index = this.maxGridIndex;
        }

        this.gridIndex = index;
        this.setTranslate(-index * this.size);

        [].forEach.call(this.slides, (element, index) => {
          var cls = element.className.replace(' swipe-item-active', '');
          if (index === this.gridIndex) {
            element.className = cls + ' swipe-item-active';
          } else {
            element.className = cls;
          }
        });
      });
    },

    // slide to next
    slideNext() {
      this.slideTo(this.gridIndex + 1, this.speed);
    },

    // slide to prev
    slidePrev() {
      this.slideTo(this.gridIndex - 1, this.speed);
    },

    // get current translate
    getTranslate() {
      return this.translate;
    },

    // start autoplay
    start() {
      this.stop();
      this.interval = setInterval(this.slideNext, this.delay);
    },

    // stop autoplay
    stop() {
      clearInterval(this.interval);
    },

    // update translate
    setTranslate(val) {
      if (this.isLoop) {
        if (val > 0) val = 0;
        if (val < -this.maxTranslate) val = -this.maxTranslate;
      }
      this.translate = val;
    },

    // create element for loop mode
    createLoopEl() {
      const { containerEl } = this;
      let firstEl = containerEl.firstElementChild.cloneNode(true);
      firstEl.setAttribute('data-index', 0);

      let lastEl = containerEl.lastElementChild.cloneNode(true);
      lastEl.setAttribute('data-index', containerEl.children.length - 1);

      [].forEach.call(containerEl.children, (element, index) => {
        element.setAttribute('data-index', index);
      });

      containerEl.insertBefore(lastEl, containerEl.firstElementChild);
      containerEl.appendChild(firstEl);
    }
  }
};
</script>

<style>
.yus-swipe {
  overflow: hidden;
  position: relative;
}

.yus-swipe-container {
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  will-change: transform;
  transition: transform 300ms ease;
}

.yus-swipe-pagination {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.yus-swipe-pagination-item {
  display: inline-block;
  width: 8px;
  height: 3px;
  background: #cec4c4;
  margin: 0 3px;
  border-radius: 4px;
  transition: all 300ms;
}

.yus-swipe-pagination-item-active {
  width: 14px;
  background: #eaf1f5;
}

/* vertical */
.yus-swipe.is-vertical .yus-swipe-container {
  flex-direction: column;
}

/* effect slide */
.effect-scale .yus-swipe-item {
  transform: scaleY(0.85);
  transition: transform 300ms;
}
.effect-scale .swipe-item-active {
  transform: scaleY(1);
}
</style>
