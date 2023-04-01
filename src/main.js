import Vue from 'vue';
import App from './App';
import { router } from './router';
import 'vant/lib/index.less';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
