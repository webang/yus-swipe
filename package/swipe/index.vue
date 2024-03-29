<template>
  <div
    class="yus-swipe"
    ref="wrapperEl"
    :class="wrapperCls"
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
      <div class="yus-swipe-dots" :class="{
        'yus-swipe-dots--vertical': !isHorizontal
      }">
        <span
          class="yus-swipe-dot"
          v-for="(item, index) in realLength"
          :key="index"
          :class="{
            'yus-swipe-dot--active': index === currentIndex
          }"
        />
      </div>
    </slot>
  </div>
</template>

<script>
import Utils from '../utils';

const RATIO = 0.3;
const SHORT_TOUCH = 250;
const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal';

export default {
  props: {
    // 轮播方向
    direction: {
      type: String,
      default: HORIZONTAL,
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
      default: 'slide' // slide scale
    },
    // slide之间间隔
    spaceBetween: {
      default: 0,
      type: Number
    },
    width: Number,
    height: Number
  },

  data() {
    return {
      wrapperEl: null,
      containerEl: null,
      curWidth: undefined,
      curHeight: undefined,
      slides: [],
      isScrolling: undefined,
      size: undefined,
      touches: {
        startX: undefined,
        startY: undefined,
        diff: undefined,
        diffX: undefined,
        currentX: undefined,
        currentY: undefined,
        startTranslate: undefined,
        time: undefined,
        isMoved: undefined,
        isTouched: undefined
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
      realLength: 0,
      initialized: false,
      children: []
    };
  },

  computed: {
    isHorizontal() {
      return this.direction === HORIZONTAL;
    },
    isLoop() {
      return !!this.loop;
    },
    wrapperCls() {
      return [
        'effect-' + this.effect,
        {
          'is-vertical': !this.isHorizontal,
          'is-horizontal': this.isHorizontal
        }
      ]
    },
    containerStl() {
      return {
        'transition-duration': `${this.transitionDuration}ms`,
        [this.rectProp]: `${this.maxTranslate + this.size}px`,
        transform: this.isHorizontal
          ? `translate3d(${this.translate}px, 0, 0)`
          : `translate3d(0, ${this.translate}px, 0)`
      };
    }
  },

  watch: {
    gridIndex(val) {
      if (!this.isLoop) {
        this.currentIndex = val;
        return;
      }
      if (val === 0) {
        this.currentIndex = this.maxGridIndex - 1;
      } else if (val === this.maxGridIndex) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = val - 1;
      }
    },
    currentIndex(val) {
      this.$emit('index-changed', val);
    },
    'children.length'() {
      this.setup();
    }
  },

  mounted() {
    this.setup();
    Utils.addEvent(window, 'resize', this.setup);
  },

  destroyed() {
    Utils.removeEvent(window, 'resize', this.setup);
  },

  methods: {
    setup() {
      // setup size and el
      const { wrapperEl, containerEl } = this.$refs;
      const { width, height } = wrapperEl.getBoundingClientRect();
      const spaceBetween = +this.spaceBetween || 0;

      this.curWidth = this.width || width
      this.curHeight = this.height || height
      this.rectProp = this.isHorizontal ? 'width' : 'height';
      this.size = this.isHorizontal ? +this.curWidth : +this.curHeight;
      this.wrapperEl = wrapperEl;
      this.containerEl = containerEl;
      this.realLength = this.children.length;

      if (this.width) {
        this.wrapperEl.style.width = this.width + 'px';
      }

      if (this.height) {
        this.wrapperEl.style.height = this.height + 'px';
      }

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
        if (index !== this.slides.length - 1) {
          if (this.isHorizontal) {
            element.style['margin-right'] = spaceBetween + 'px';
          } else {
            element.style['margin-bottom'] = spaceBetween + 'px';
          }
        }
        this.slidesGrid[index] = index * this.size + index * spaceBetween;
      });

      this.minGridIndex = 0;
      this.maxGridIndex = this.slides.length - 1;
      this.minTranslate = this.slidesGrid[this.minGridIndex];
      this.maxTranslate = this.slidesGrid[this.maxGridIndex];

      // setup initial gridIndex
      if (this.isLoop && !this.initialized) {
        this.gridIndex = this.activeIndex + 1;
      }

      // setup initial position
      this.slideTo(this.gridIndex, 0);

      // setup autoplay
      if (this.autoplay) {
        this.start();
      }

      this.initialized = true;
    },

    onTouchStart(event) {
      const touch = this.getEventTouch(event);

      this.touches.diff = 0;
      this.isScrolling = undefined;
      this.touches.time = Utils.now();
      this.touches.startX = touch.pageX;
      this.touches.startY = touch.pageY;
      this.touches.startTranslate = this.translate;
      this.touches.isTouched = true;
      this.transitionDuration = 0;

      if (this.autoplay) {
        this.stop();
      }
    },

    onTouchMove(event) {
      if (!this.touches.isTouched) return;

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
      let resetTouch = () => {
        touches.startX = touch.pageX;
        touches.startY = touch.pageY;
        touches.diff = 0;
      };

      if (this.isLoop) {
        if (Math.abs(translate) >= this.maxTranslate) {
          this.slideTo(1, 0);
          resetTouch();
          translate = touches.diff + this.getPosByGridIndex(1);
          this.touches.startTranslate = translate;
        } else if (translate >= 0) {
          this.slideTo(this.slidesGrid.length - 2, 0);
          resetTouch();
          translate = touches.diff + this.getPosByGridIndex(this.slidesGrid.length - 2);
          this.touches.startTranslate = translate;
        }
      } else {
        if (Math.abs(translate) >= this.maxTranslate || translate >= 0) {
          translate = touches.diff * RATIO + this.touches.startTranslate;
        }
      }
      this.setTranslate(translate);
    },

    onTouchEnd() {
      const { touches } = this;
      if (this.isScrolling || touches.diff === 0) {
        return;
      }

      this.touches.isTouched = false;

      // determine touch is from right to left
      let rtl = touches.diff < 0;

      // calculate new gridIndex
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

    // 通过 gridIndex 获取偏移距离
    getPosByGridIndex(index) {
      return -this.slidesGrid[index];
    },

    // index
    slideTo(index, speed) {
      if (this.isLoop && index > this.maxGridIndex) {
        this.transitionDuration = 0;
        this.gridIndex = 1;
        this.setTranslate(this.getPosByGridIndex(1));
        index = 2;
      }

      if (this.isLoop && index < this.minGridIndex) {
        this.transitionDuration = 0;
        this.gridIndex = this.maxGridIndex - 1;
        let translate = this.getPosByGridIndex(this.maxGridIndex - 1)
        this.setTranslate(translate);
        index = this.maxGridIndex - 2;
      }

      if (typeof speed === 'undefined') {
        speed = this.speed;
      }

      if (!this.isLoop) {
        if (index < 0) {
          index = 0;
        }
        if (index > this.maxGridIndex) {
          index = this.maxGridIndex;
        }
      }

      setTimeout(() => {
        this.transitionDuration = speed;
        this.gridIndex = index;
        this.setTranslate(this.getPosByGridIndex(index));
        
        [].forEach.call(this.slides, (element, index) => {
          let cls = element.className.replace(' swipe-item-active', '');
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

      let firstCloneEl = containerEl.getElementsByClassName('is-first')[0];
      let lastCloneEl = containerEl.getElementsByClassName('is-last')[0];
      if (firstCloneEl) containerEl.removeChild(firstCloneEl);
      if (lastCloneEl) containerEl.removeChild(lastCloneEl);

      let firstEl = containerEl.firstElementChild.cloneNode(true);
      firstEl.setAttribute('data-index', 0);
      firstEl.className = firstEl.className + ' is-first';

      let lastEl = containerEl.lastElementChild.cloneNode(true);
      lastEl.setAttribute('data-index', containerEl.children.length - 1);
      lastEl.className = lastEl.className + ' is-last';

      [].forEach.call(containerEl.children, (element, index) => {
        element.setAttribute('data-index', index);
      });

      containerEl.insertBefore(lastEl, containerEl.firstElementChild);
      containerEl.appendChild(firstEl);
    }
  }
};
</script>

<style src="./index.css"></style>
