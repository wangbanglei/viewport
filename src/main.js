import Vue from 'vue';
import App from './App';
import { router } from './router';
import 'vant/lib/index.less';
import { Button, Icon, Popup, Field } from 'vant';

Vue.use(Button)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Field)


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
