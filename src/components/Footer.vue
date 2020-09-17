<template>
  <div class="footer">
    My Footer!
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Footer',
  });
</script>

<style scoped>
  .footer {
    background: black;
    color: white;
    padding: 10px
  }
</style>
