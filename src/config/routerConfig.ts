import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Counter from '@/components/Counter.vue';
import App from '@/App.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/foo',
    component: Counter,
    name: 'foo,',
  },
  {
    path: '/bar',
    component: App,
    name: 'bar',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
