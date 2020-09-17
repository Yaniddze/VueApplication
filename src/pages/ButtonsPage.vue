<template>
  <div>
    Buttons Page
  </div>
  <div>
    <button>
      Cool button!
    </button>
    <p>
      Prop text: {{ myProp }}
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ButtonsPage',
    props: {
      myProp: String,
    },
  });
</script>

<style>

</style>
