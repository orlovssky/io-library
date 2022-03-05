<script setup lang="ts">
import { toRefs, computed } from 'vue';

interface Props {
  theme?: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'light',
});

const { theme } = toRefs(props);

const classObject = computed(() => ({
  'z-app_theme_light': !theme.value || theme.value === 'light',
  'z-app_theme_dark': theme.value === 'dark',
}));
</script>

<template>
  <div
    class="z-app" 
    :class="classObject"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>