<script setup lang="ts">
import { reactive } from 'vue';

interface Props {
  primary?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
});

const { primary } = reactive(props);
</script>

<template>
  <button
    class="z-button"
    :class="{ primary }"
  >
    <slot />
  </button>
</template>

<style scoped>
.z-button {
  padding: 0.5rem 1rem;
}
.z-button.primary {
  background: hsl(239, 100%, 27%);
  color: #fff;
}
.z-button.secondary {
  background: hsl(325, 100%, 21%);
  color: #fff;
}
</style>