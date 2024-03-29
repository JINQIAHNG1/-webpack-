import { banner } from "./banner.js";
import { tab } from "./tab.js";
banner();
tab();

import "./style/index.css";
import "./style/index.less";
import gifSrc from "./assets/1.gif";
import pngSrc from "./assets/logo_small.png";
const gif = document.createElement("img");
const png = document.createElement("img");
gif.src = gifSrc;
png.src = pngSrc;
document.body.appendChild(gif);
document.body.appendChild(png);

import "./assets/fonts/iconfont.css";

const fn = () => {
  console.log("你好");
};
console.log(fn());

import App from "./app.vue";
// import Vue from "vue";

import {createApp} from 'vue';
new createApp({ 
    render: h => h(App) // 渲染函数, 渲染App组件里的标签
}).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里