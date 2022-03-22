<script setup lang="ts">
import { toRefs, computed } from 'vue';

import { IoAppTheme }       from './types';

interface Props {
  theme?: IoAppTheme;
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'light',
});

const { theme } = toRefs(props);

const classObject = computed(() => ({
  'io-app': true,
  'io-app_theme_light': !theme.value || theme.value === 'light',
  'io-app_theme_dark': theme.value === 'dark',
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