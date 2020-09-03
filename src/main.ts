// Core
import { createApp } from 'vue';

// Libraries
import { router } from '@/config';

// Application
import App from './App.vue';

createApp(App)
  .use(router)
  .mount('#app');
