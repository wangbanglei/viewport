import Vue from 'vue';
import App from './App';
import { router } from './router';

import axios from 'axios'

import 'vant/lib/index.less';
import '#/styles/reset.css';
import {Col, Row, Overlay, Button, Icon, Popup, Field, Steps, Step, Search, Grid, GridItem, Image, ImagePreview, List, Cell, Swipe, SwipeItem, Lazyload, Tabs, Tab, ShareSheet } from 'vant';

Vue.use(Col)
Vue.use(Row)
Vue.use(Overlay)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Field)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Search)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(ImagePreview)
Vue.use(List)
Vue.use(Cell)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(ShareSheet);
Vue.prototype.bus = new Vue();
Vue.prototype.$http = axios;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
