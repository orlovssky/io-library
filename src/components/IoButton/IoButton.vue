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
  'io-button__wrapper': true,
  'io-button__wrapper_disabled': disabled.value,
}));

const buttonClassObject = computed(() => ({
  'io-button': true,
  'io-button_filled': type.value === 'filled',
  'io-button_elevated': type.value === 'elevated',
  'io-button_outlined': type.value === 'outlined',
  'io-button_text': type.value === 'text',

  'io-button_round': round.value,
  'io-button_size_medium': !size.value || size.value === 'medium',
  'io-button_size_small': size.value === 'small',
  'io-button_size_large': size.value === 'large',
  'io-button_disabled': disabled.value,
  
  'io-button_color_primary': !color.value || color.value === 'primary',
  'io-button_color_secondary': color.value === 'secondary',
  'io-button_color_tertiary': color.value === 'tertiary',
  'io-button_color_error': color.value === 'error',
  
  'io-button_elevation_1': type.value === 'elevated' || [1, '1'].includes(elevation.value),
  'io-button_elevation_2': [2, '2'].includes(elevation.value),
  'io-button_elevation_3': [3, '3'].includes(elevation.value),
  'io-button_elevation_4': [4, '4'].includes(elevation.value),
  'io-button_elevation_5': [5, '5'].includes(elevation.value),
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