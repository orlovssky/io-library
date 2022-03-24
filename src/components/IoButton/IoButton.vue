<script setup lang="ts">
import { toRefs, computed } from 'vue';

import {
  IoButtonType,
  IoButtonColor,
  IoButtonElevation,
  IoButtonSize,
  IoButtonOnClick,
} from './types';

interface Props {
  type?: IoButtonType;
  color?: IoButtonColor;
  elevation?: IoButtonElevation;
  round?: boolean;
  size?: IoButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: IoButtonOnClick,
}

const props = withDefaults(defineProps<Props>(), {
  type: 'filled',
  color: 'primary',
  elevation: 0,
  round: false,
  size: 'medium',
  disabled: false,
  loading: false,
  onClick: undefined,
});

const { color, elevation, type, round, size, disabled, loading } = toRefs(props);

const wrapperClassObject = computed(() => ({
  'io-button__wrapper': true,
  'io-button__wrapper_disabled': disabled.value || loading.value,
}));

const buttonClassObject = computed(() => ({
  'io-button': true,

  'io-button_filled': !type.value || type.value === 'filled',
  'io-button_elevated': type.value === 'elevated',
  'io-button_outlined': type.value === 'outlined',
  'io-button_text': type.value === 'text',

  'io-button_round': round.value,
  'io-button_size_medium': !size.value || size.value === 'medium',
  'io-button_size_small': size.value === 'small',
  'io-button_size_large': size.value === 'large',
  'io-button_disabled': disabled.value || loading.value,
  'io-button_loading': loading.value,
  
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
      <slot name="icon" />
      <slot />

      <div
        v-if="loading"
        class="io-button__loader"
      >
        <svg viewBox="25 25 50 50">
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
          />
        </svg>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>