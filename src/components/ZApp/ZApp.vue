<script setup lang="ts">
import { toRefs, computed } from 'vue';

interface Props {
  theme?: 'light' | 'dark';
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'light',
});

const { theme } = toRefs(props);

const classObject = computed(() => ({
  'z-app': true,
  'z-app_theme_light': !theme.value || theme.value === 'light',
  'z-app_theme_dark': theme.value === 'dark',
}));
</script>

<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>