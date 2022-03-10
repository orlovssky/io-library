<script setup lang="ts">
import { toRefs, computed } from 'vue';

interface Props {
  type?: 'filled' | 'elevated' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2' | '3' | '4' | '5' ;
  round?: boolean;
  size?: 'medium' | 'small' | 'large';
  disabled?: boolean;
  onClick?: (e: MouseEvent) => void,
}

const props = withDefaults(defineProps<Props>(), {
  type: 'filled',
  color: 'primary',
  elevation: 0,
  round: false,
  size: 'medium',
  disabled: false,
  onClick: undefined,
});

const { color, elevation, type, round, size, disabled } = toRefs(props);

const wrapperClassObject = computed(() => ({
  'z-button__wrapper': true,
  'z-button__wrapper_disabled': disabled.value,
}));

const buttonClassObject = computed(() => ({
  'z-button': true,
  'z-button_filled': type.value === 'filled',
  'z-button_elevated': type.value === 'elevated',
  'z-button_outlined': type.value === 'outlined',
  'z-button_text': type.value === 'text',

  'z-button_round': round.value,
  'z-button_size_medium': !size.value || size.value === 'medium',
  'z-button_size_small': size.value === 'small',
  'z-button_size_large': size.value === 'large',
  'z-button_disabled': disabled.value,
  
  'z-button_color_primary': !color.value || color.value === 'primary',
  'z-button_color_secondary': color.value === 'secondary',
  'z-button_color_tertiary': color.value === 'tertiary',
  'z-button_color_error': color.value === 'error',
  
  'z-button_elevation_1': type.value === 'elevated' || [1, '1'].includes(elevation.value),
  'z-button_elevation_2': [2, '2'].includes(elevation.value),
  'z-button_elevation_3': [3, '3'].includes(elevation.value),
  'z-button_elevation_4': [4, '4'].includes(elevation.value),
  'z-button_elevation_5': [5, '5'].includes(elevation.value),
}));
</script>

<template>
  <div :class="wrapperClassObject">
    <button
      :class="buttonClassObject"
      @click="onClick"
    >
      <slot />
    </button>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>