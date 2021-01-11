import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";// 引入element-ui
import "element-ui/lib/theme-chalk/index.css"; // 引入element-ui的样式
import './untils/permission.js' // 这个文件是路由跳转做判断的文件（判断是否有token等一系列操作）
import "./icons"; // 引入字体(SVG字体图标)
import './font/font.scss'; // 引入字体(font-family)
import progressive from 'progressive-image/dist/vue'; // 渐进式加载
import "./styles/progressive-image.css";// 渐进式加载Css样式文件

Vue.use(progressive, { // 使用渐进式加载
    removePreview: true,
    scale: true
})

Vue.use(ElementUI); // 使用elementUI
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
