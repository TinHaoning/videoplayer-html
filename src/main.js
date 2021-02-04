import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';

Vue.use(VueVideoPlayer);
// 引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 映入videoPlayer插件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
