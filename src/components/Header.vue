<template>
  <div class="header">
    My header!
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Header',
  });
</script>

<style scoped>
  .header {
    padding: 10px;
    border: none;
  }
</style>
