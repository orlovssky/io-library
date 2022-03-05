<script setup lang="ts">
import { toRefs, computed }       from 'vue';

interface Props {
  type?: string;
  color?: string;
  elevation?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'filled',
  color: 'primary',
  elevation: 1
});

const { color, elevation, type } = toRefs(props);

const classObject = computed(() => ({
  'z-button_color_primary': !color.value || color.value === 'primary',
  'z-button_color_secondary': color.value === 'secondary',
  'z-button_color_tertiary': color.value === 'tertiary',
  'z-button_color_error': color.value === 'error',

  'z-button_elevated': type.value === 'elevated',
  
  'z-button_elevation_1': type.value === 'elevated' || [1, '1'].includes(elevation.value),
  'z-button_elevation_2': [2, '2'].includes(elevation.value),
  'z-button_elevation_3': [3, '3'].includes(elevation.value),
  'z-button_elevation_4': [4, '4'].includes(elevation.value),
  'z-button_elevation_5': [5, '5'].includes(elevation.value),
}));
</script>

<template>
  <button
    class="z-button"
    :class="classObject"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>