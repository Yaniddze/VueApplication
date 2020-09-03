<template>
  <div>
    <div class="counter">
      {{ counter }}
    </div>
    <button @click="increment">
      +
    </button>
    <button @click="decrement">
      -
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Counter',
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    increment() {
      this.counter += 1;
    },
    decrement() {
      this.counter -= 1;
    },
  },
});
</script>

<style scoped>
  .counter {
    font-size: 1rem;
    margin: 20px;
    padding: 10px;
  }
</style>
