import Vue from 'vue';
import App from './App';
import { router } from './router';
import 'vant/lib/index.less';
import '#/styles/reset.css';
import { Button, Icon, Popup, Field, Steps, Step } from 'vant';

Vue.use(Button)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Field)
Vue.use(Steps)
Vue.use(Step)


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
