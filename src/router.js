import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/curriculum'
  },
  {
    name: 'curriculum',
    component: () => import('./view/curriculum/index'),
    meta: {
      title: '课程页面'
    }
  },
  {
    name: 'view',
    component: () => import('./view/curriculum/view'),
    meta: {
      title: '作品查看'
    }
  },
  {
    name: 'template',
    component: () => import('./view/curriculum/template'),
    meta: {
      title: '课程模板'
    }
  },
  {
    name: 'works',
    component: () => import('./view/works/index'),
    meta: {
      title: '作品集编辑'
    }
  },
  {
    name: 'preview',
    component: () => import('./view/works/preview'),
    meta: {
      title: '作品集预览'
    }
  },
  {
    name: 'individuation',
    component: () => import('./view/works/individuation'),
    meta: {
      title: '作品集个性化'
    }
  },
  {
    name: 'timeaxis',
    component: () => import('./view/create/timeaxis'),
    meta: {
      title: '创作时光轴'
    }
  },
  {
    name: 'map',
    component: () => import('./view/create/map'),
    meta: {
      title: '学习地图'
    }
  },
  {
    name: 'create',
    component: () => import('./view/create/index'),
    meta: {
      title: '动态创作'
    }
  },
  {
    name: 'expertlist',
    component: () => import('./view/expert/list'),
    meta: {
      title: '专家列表'
    }
  },
  {
    name: 'expertdetail',
    component: () => import('./view/expert/detail'),
    meta: {
      title: '专家详情'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
