<template>
  <div>
    <div class="header">
      Hello!
    </div>
    <router-link to="/foo">Foo</router-link> |
    <router-link to="/bar">Bar</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
  });
</script>

<style scoped lang="scss">
  .header {
    background: red;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    padding: 10px;
    margin: 10px;

    &:hover {
      cursor: pointer;
    }
  }
</style>
