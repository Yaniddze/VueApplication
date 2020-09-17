<template>
  <div>
    <Header />
    <nav>
      <router-link to="/foo">Foo</router-link> |
      <router-link to="/bar">Bar</router-link>
    </nav>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Header,
      Footer,
    },
  });
</script>

<style>
  html, body, #app, #app > div {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .main {
    flex: 1 0 auto;
  }

  .footer {
    flex-shrink: 0;
  }
</style>
