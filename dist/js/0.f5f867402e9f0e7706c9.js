webpackJsonp([0],{"/9oH":function(t,i,e){var s=e("Mr+r"),n=e("cM3n");t.exports=e("berT")?function(t,i,e){return s.f(t,i,n(1,e))}:function(t,i,e){return t[i]=e,t}},"4fRt":function(t,i){},"8leu":function(t,i,e){var s=e("BE4u"),n=e("Rv9F"),r=e("mR54"),o=e("/9oH"),a=e("l9T2"),c=function(t,i,e){var l,d,u,h=t&c.F,f=t&c.G,p=t&c.S,v=t&c.P,m=t&c.B,x=t&c.W,g=f?n:n[i]||(n[i]={}),w=g.prototype,y=f?s:p?s[i]:(s[i]||{}).prototype;for(l in f&&(e=i),e)(d=!h&&y&&void 0!==y[l])&&a(g,l)||(u=d?y[l]:e[l],g[l]=f&&"function"!=typeof y[l]?e[l]:m&&d?r(u,s):x&&y[l]==u?function(t){var i=function(i,e,s){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(i);case 2:return new t(i,e)}return new t(i,e,s)}return t.apply(this,arguments)};return i.prototype=t.prototype,i}(u):v&&"function"==typeof u?r(Function.call,u):u,v&&((g.virtual||(g.virtual={}))[l]=u,t&c.R&&w&&!w[l]&&o(w,l,u)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},"9tun":function(t,i){t.exports=function(t){try{return!!t()}catch(t){return!0}}},BE4u:function(t,i){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},BcUX:function(t,i,e){var s=e("PUvy");t.exports=function(t,i){if(!s(t))return t;var e,n;if(i&&"function"==typeof(e=t.toString)&&!s(n=e.call(t)))return n;if("function"==typeof(e=t.valueOf)&&!s(n=e.call(t)))return n;if(!i&&"function"==typeof(e=t.toString)&&!s(n=e.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},HQgd:function(t,i,e){var s=e("PUvy"),n=e("BE4u").document,r=s(n)&&s(n.createElement);t.exports=function(t){return r?n.createElement(t):{}}},Izy6:function(t,i){},"Mr+r":function(t,i,e){var s=e("fRqy"),n=e("SJYL"),r=e("BcUX"),o=Object.defineProperty;i.f=e("berT")?Object.defineProperty:function(t,i,e){if(s(t),i=r(i,!0),s(e),n)try{return o(t,i,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[i]=e.value),t}},PUvy:function(t,i){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},Rv9F:function(t,i){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},SJYL:function(t,i,e){t.exports=!e("berT")&&!e("9tun")(function(){return 7!=Object.defineProperty(e("HQgd")("div"),"a",{get:function(){return 7}}).a})},a3Yh:function(t,i,e){"use strict";i.__esModule=!0;var s,n=e("liLe"),r=(s=n)&&s.__esModule?s:{default:s};i.default=function(t,i,e){return i in t?(0,r.default)(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}},berT:function(t,i,e){t.exports=!e("9tun")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},cM3n:function(t,i){t.exports=function(t,i){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:i}}},eu6x:function(t,i){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},fRqy:function(t,i,e){var s=e("PUvy");t.exports=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t}},l9T2:function(t,i){var e={}.hasOwnProperty;t.exports=function(t,i){return e.call(t,i)}},lbsL:function(t,i,e){e("ngi5");var s=e("Rv9F").Object;t.exports=function(t,i,e){return s.defineProperty(t,i,e)}},liLe:function(t,i,e){t.exports={default:e("lbsL"),__esModule:!0}},mR54:function(t,i,e){var s=e("eu6x");t.exports=function(t,i,e){if(s(t),void 0===i)return t;switch(e){case 1:return function(e){return t.call(i,e)};case 2:return function(e,s){return t.call(i,e,s)};case 3:return function(e,s,n){return t.call(i,e,s,n)}}return function(){return t.apply(i,arguments)}}},ngi5:function(t,i,e){var s=e("8leu");s(s.S+s.F*!e("berT"),"Object",{defineProperty:e("Mr+r").f})},wFIC:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("a3Yh"),n=e.n(s),r={now:()=>+new Date,noop:()=>{},nextTick(t,i){setTimeout(t||this.noop,i||0)},addEvent(t,i,e,s){t.addEventListener(i,e,s||!1)},removeEvent(t,i,e,s){t.removeEventListener(i,e,s||!1)}},o="vertical",a="horizontal",c={props:{direction:{type:String,default:a,validator:function(t){return[o,a].indexOf(t)>-1}},loop:{type:Boolean,default:!1},speed:{type:Number,default:300},activeIndex:{type:Number,default:0},autoplay:{type:Boolean,default:!1},delay:{type:Number,default:3e3},effect:{type:String,default:"slide"},spaceBetween:{type:Number,default:20}},data:function(){return{wrapperEl:null,containerEl:null,width:void 0,height:void 0,slides:[],isScrolling:void 0,length:void 0,size:void 0,touches:{startX:void 0,startY:void 0,endX:void 0,endY:void 0,diff:void 0,diffX:void 0,diddY:void 0,currentX:void 0,currentY:void 0,startTranslate:void 0,time:void 0,isMoved:void 0,isTouched:void 0},gridIndex:0,slidesGrid:[],translate:0,currentIndex:this.activeIndex,transitionDuration:0,rectProp:"",maxGridIndex:0,minGridIndex:0,maxTranslate:0,minTranslate:0,interval:null,realLength:0,initialized:!1,children:[]}},computed:{isHorizontal:function(){return this.direction===a},isLoop:function(){return!!this.loop},containerStl:function(){var t;return t={"transition-duration":this.transitionDuration+"ms"},n()(t,this.rectProp,this.slides.length*this.size+"px"),n()(t,"transform",this.isHorizontal?"translate3d("+this.translate+"px, 0, 0)":"translate3d(0, "+this.translate+"px, 0)"),t}},watch:{gridIndex:function(t){this.isLoop?0===t?this.currentIndex=this.maxGridIndex-1:t===this.maxGridIndex?this.currentIndex=0:this.currentIndex=t-1:this.currentIndex=t},currentIndex:function(t){this.$emit("index-changed",t)},"children.length":function(){this.setup()}},mounted:function(){this.setup(),r.addEvent(window,"resize",this.setup)},destroyed:function(){r.removeEvent(window,"resize",this.setup)},methods:{setup:function(){var t=this,i=this.$refs,e=i.wrapperEl,s=i.containerEl,n=e.getBoundingClientRect(),r=n.width,o=n.height;this.width=r,this.height=o,this.rectProp=this.isHorizontal?"width":"height",this.size=this.isHorizontal?+this.width:+this.height,this.wrapperEl=e,this.containerEl=s,this.realLength=this.children.length,this.isLoop&&this.createLoopEl(),this.slides=s.children,this.slidesGrid=new Array(this.slides.length),[].forEach.call(this.slides,function(i,e){i.style[t.rectProp]=t.size+"px",t.slidesGrid[e]=e*t.size}),this.minGridIndex=0,this.maxGridIndex=this.slides.length-1,this.minTranslate=this.slidesGrid[this.minGridIndex],this.maxTranslate=this.slidesGrid[this.maxGridIndex],this.isLoop&&!this.initialized&&(this.gridIndex=this.activeIndex+1),this.slideTo(this.gridIndex,0),this.autoplay&&this.start(),this.initialized=!0},onTouchStart:function(t){var i=this.getEventTouch(t);this.touches.diff=0,this.isScrolling=void 0,this.touches.time=r.now(),this.touches.startX=i.pageX,this.touches.startY=i.pageY,this.touches.startTranslate=this.translate,this.touches.isTouched=!0,this.touches.isMoved=!1,this.transitionDuration=0,this.autoplay&&this.stop()},onTouchMove:function(t){if(this.touches.isTouched){var i=this.touches,e=this.isHorizontal,s=this.getEventTouch(t);if(i.currentX=s.pageX,i.currentY=s.pageY,i.diffX=s.pageX-i.startX,i.diffY=s.pageY-i.startY,i.diff=e?i.diffX:i.diffY,void 0===this.isScrolling&&(this.isScrolling=e?Math.abs(i.diffX)<Math.abs(i.diffY):Math.abs(i.diffX)>Math.abs(i.diffY)),!this.isScrolling){t.preventDefault();var n=i.diff+this.touches.startTranslate,r=function(){i.startX=s.pageX,i.startY=s.pageY,i.diff=0};this.isLoop?Math.abs(n)>=this.maxTranslate?(this.slideTo(1,0),r(),n=i.diff+1*this.size*-1,this.touches.startTranslate=n):n>=0&&(this.slideTo(this.slidesGrid.length-2,0),r(),n=i.diff+(this.slidesGrid.length-2)*this.size*-1,this.touches.startTranslate=n):(Math.abs(n)>=this.maxTranslate||n>=0)&&(n=.3*i.diff+this.touches.startTranslate),this.setTranslate(n)}}},onTouchEnd:function(){var t=this.touches;if(!this.isScrolling&&0!==t.diff){this.touches.isTouched=!1;var i=t.diff<0,e=r.now()-t.time<250,s=this.gridIndex,n=e||Math.abs(t.diff)>this.size/2;i&&n?s++:!i&&n&&s--,this.slideTo(s,this.speed),this.autoplay&&setTimeout(this.start,this.speed)}},getEventTouch:function(t){return t.changedTouches?t.changedTouches[0]:t},slideTo:function(t,i){var e=this;this.isLoop&&t>this.maxGridIndex&&(this.transitionDuration=0,this.gridIndex=1,this.setTranslate(-this.size),t=2),this.isLoop&&t<this.minGridIndex&&(this.transitionDuration=0,this.gridIndex=this.maxGridIndex-1,this.setTranslate(-(this.maxGridIndex-1)*this.size),t=this.maxGridIndex-2),void 0===i&&(i=this.speed),this.transitionDuration=i,this.isLoop||(t<0&&(t=0),t>this.maxGridIndex&&(t=this.maxGridIndex)),this.gridIndex=t,this.setTranslate(-t*this.size),[].forEach.call(this.slides,function(t,i){var s=t.className.replace(" swipe-item-active","");i===e.gridIndex?t.className=s+" swipe-item-active":t.className=s})},slideNext:function(){this.slideTo(this.gridIndex+1,this.speed)},slidePrev:function(){this.slideTo(this.gridIndex-1,this.speed)},getTranslate:function(){return this.translate},start:function(){this.stop(),this.interval=setInterval(this.slideNext,this.delay)},stop:function(){clearInterval(this.interval)},setTranslate:function(t){this.isLoop&&(t>0&&(t=0),t<-this.maxTranslate&&(t=-this.maxTranslate)),this.translate=t},createLoopEl:function(){var t=this.containerEl,i=t.getElementsByClassName("is-first")[0],e=t.getElementsByClassName("is-last")[0];i&&t.removeChild(i),e&&t.removeChild(e);var s=t.firstElementChild.cloneNode(!0);s.setAttribute("data-index",0),s.className=s.className+" is-first";var n=t.lastElementChild.cloneNode(!0);n.setAttribute("data-index",t.children.length-1),n.className=n.className+" is-last",[].forEach.call(t.children,function(t,i){t.setAttribute("data-index",i)}),t.insertBefore(n,t.firstElementChild),t.appendChild(s)}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"wrapperEl",staticClass:"yus-swipe",class:["effect-"+t.effect,{"is-vertical":!t.isHorizontal}],on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd,mousedown:t.onTouchStart,mousemove:t.onTouchMove,mouseup:t.onTouchEnd}},[e("div",{ref:"containerEl",staticClass:"yus-swipe-container",style:t.containerStl},[t._t("default")],2),t._v(" "),t._t("pagination",[e("div",{staticClass:"yus-swipe-pagination"},t._l(t.realLength,function(i,s){return e("span",{key:s,staticClass:"yus-swipe-pagination-item",class:{"yus-swipe-pagination-item-active":s===t.currentIndex}})}),0)])],2)},staticRenderFns:[]};var d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"yus-swipe-item"},[this._t("default")],2)},staticRenderFns:[]};var u=["//m.360buyimg.com/mobilecms/s700x280_jfs/t1/54239/34/11063/135392/5d81ee9eE1d1c7e93/5c773e3b05fc114f.jpg!cr_1125x445_0_171!q70.jpg.dpg","//m.360buyimg.com/mobilecms/s700x280_jfs/t1/69641/33/10421/146122/5d8050f9E1eb95850/85b9a7d76aa72260.jpg!cr_1125x445_0_171!q70.jpg.dpg","//imgcps.jd.com/ling4/4477655/5rSB6Z2i5YWo5Z-O54Ot5Yqo/54iG5qy-6ZKc5oOg/p-5c1224c882acdd181d12307f/6886bbbb/cr_1125x445_0_171/s1125x690/q70.jpg"],h={components:{Swipe:e("C7Lr")(c,l,!1,function(t){e("Izy6")},null,null).exports,SwipeItem:e("C7Lr")({computed:{index:function(){return this.$parent.$children.indexOf(this)}},created:function(){this.$parent.children.push(this)},destroyed:function(){this.$parent.children.splice(this.index,1)}},d,!1,function(t){e("4fRt")},null,null).exports},data:function(){return{imgs:u,slides:[0,1,2]}},methods:{handleIndexChanged:function(t){console.log(t)}}},f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page"},[e("a",{staticClass:"slogan",attrs:{href:"https://github.com/Webang/yus-swipe"}},[e("h3",[t._v("yus-swipe")]),t._v(" "),e("p",[t._v("基于 vue 轻量优雅的swiper组件")]),t._v(" "),e("svg",{staticStyle:{fill:"rgb(21, 21, 19)",color:"rgb(255, 255, 255)",position:"absolute",top:"0px",border:"0px",right:"0px"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px 0px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),t._v(" "),e("div",{staticClass:"demo-block"},[e("div",{staticClass:"demo-block-hd"},[t._v("常用方式")]),t._v(" "),e("swipe",{staticClass:"swiper-00",attrs:{loop:!0,direction:"horizontal","active-index":0},on:{"index-changed":t.handleIndexChanged}},t._l(3,function(i,s){return e("SwipeItem",{key:s,staticClass:"swipe-slide"},[e("div",{staticClass:"slide-box",class:["bg"+s]},[t._v(t._s(s))])])}),1)],1),t._v(" "),e("div",{staticClass:"demo-block"},[e("div",{staticClass:"demo-block-hd"},[t._v("水平滚动")]),t._v(" "),e("swipe",{staticClass:"swiper-01",attrs:{loop:!1,autoplay:!1,direction:"horizontal","active-index":0}},t._l(t.imgs,function(t,i){return e("SwipeItem",{key:i,staticClass:"swipe-slide"},[e("div",{staticClass:"slide-box"},[e("img",{attrs:{src:t,alt:""}})])])}),1)],1),t._v(" "),e("div",{staticClass:"demo-block"},[e("div",{staticClass:"demo-block-hd"},[t._v("垂直滚动")]),t._v(" "),e("swipe",{staticClass:"swiper-02",attrs:{loop:!1,direction:"vertical","active-index":0}},t._l(t.slides,function(i,s){return e("SwipeItem",{key:s,staticClass:"swipe-slide"},[e("div",{staticClass:"slide-box",class:["bg"+s]},[t._v(t._s(s))])])}),1)],1),t._v(" "),e("div",{staticClass:"demo-block"},[e("div",{staticClass:"demo-block-hd"},[t._v("loop模式")]),t._v(" "),e("swipe",{staticClass:"swiper-03",attrs:{loop:!0,direction:"horizontal","active-index":0}},t._l(t.imgs,function(t,i){return e("SwipeItem",{key:i,staticClass:"swipe-slide"},[e("div",{staticClass:"slide-box"},[e("img",{attrs:{src:t,alt:""}})])])}),1)],1),t._v(" "),e("div",{staticClass:"demo-block"},[e("div",{staticClass:"demo-block-hd"},[t._v("切换效果")]),t._v(" "),e("swipe",{staticClass:"swiper-04",attrs:{loop:!0,direction:"horizontal","active-index":0,effect:"scale"}},t._l(t.imgs,function(t,i){return e("SwipeItem",{key:i,staticClass:"swipe-slide"},[e("div",{staticClass:"slide-box"},[e("img",{attrs:{src:t,alt:""}})])])}),1)],1),t._v(" "),e("div",{staticClass:"demo-block"},[e("div",{staticClass:"demo-block-hd"},[t._v("动态添加")]),t._v(" "),e("swipe",{staticClass:"swiper-02",attrs:{"active-index":0,loop:!0}},t._l(t.slides,function(i,s){return e("SwipeItem",{key:s,staticClass:"swipe-slide"},[e("div",{staticClass:"slide-box",class:["bg"+s]},[t._v(t._s(s))])])}),1),t._v(" "),e("button",{on:{click:function(i){return t.slides.push(t.slides.length)}}},[t._v("添加")]),t._v(" "),e("button",{on:{click:function(i){return t.slides.splice(t.slides.length-1,1)}}},[t._v("删除")])],1)])},staticRenderFns:[]};var p=e("C7Lr")(h,f,!1,function(t){e("wY87")},"data-v-898af1fe",null);i.default=p.exports},wY87:function(t,i){}});
//# sourceMappingURL=0.f5f867402e9f0e7706c9.js.map