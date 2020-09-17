<template>
  <div>
    <Header />
    <router-link to="/foo">Foo</router-link> |
    <router-link to="/bar">Bar</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '@/components/Header.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Header,
    },
  });
</script>
