import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import gsap from 'gsap'
import ViewUIPlus from 'view-ui-plus'

import '@/style/main.scss';
import 'animate.css';
import 'view-ui-plus/dist/styles/viewuiplus.css';
import '@/style/swiper/swiper.scss';

resizeWeb();
window.addEventListener('resize',()=>{
  resizeWeb();
});

function resizeWeb(){
  var wH = window.innerHeight; // 当前窗口的高度
    var wW = window.innerWidth; // 当前窗口的宽度
    var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
    var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    if(wW>980){
      var html = document.documentElement;
      html.style.fontSize = rem + "px"; //适用于PC网站
    };
};

const app=createApp(App);

app.use(store);
app.use(router);
app.use(ViewUIPlus);
app.use(gsap)
gsap.install(window);
app.mount('#app')
