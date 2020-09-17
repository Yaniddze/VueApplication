import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CounterPage from '@/pages/CounterPage.vue';
import ButtonsPage from '@/pages/ButtonsPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/foo',
    component: CounterPage,
    name: 'foo,',
  },
  {
    path: '/bar',
    component: ButtonsPage,
    name: 'bar',
    props: {
      myProp: 123,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
