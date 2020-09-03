<template>
  <div class="newApp">
    Hello!
  </div>
</template>

<script lang="ts">
export default ({
  name: 'App',
});
</script>

<style scoped lang="scss">
  .newApp {
    background: red;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    padding: 10px;

    &:hover {
      cursor: pointer;
    }
  }
</style>
