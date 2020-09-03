<template>
  <div>
    <div class="newApp">
      Hello!
    </div>
    <Counter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from './components/Counter.vue';

export default defineComponent({
  name: 'App',
  components: {
    Counter,
  },
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
