<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';

import {
  IoSnackbarColor,
  IoSnackbarOnClose,
} from './types';

interface Props {
  color?: IoSnackbarColor;
  onClose?: IoSnackbarOnClose;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  onClose: undefined,
});

const hidden = ref(false);
const { color } = toRefs(props);
const emit = defineEmits(['close']);

setTimeout(() => {
  hidden.value = true;
  emit('close');
}, 5000);

const classObject = computed(() => ({
  'io-snackbar': true,
  'io-snackbar_hidden': hidden.value,

  'io-snackbar_color_primary': !color.value || color.value === 'primary',
  'io-snackbar_color_secondary': color.value === 'secondary',
  'io-snackbar_color_tertiary': color.value === 'tertiary',
  'io-snackbar_color_error': color.value === 'error',
  'io-snackbar_color_success': color.value === 'success',
}));
</script>

<template>
  <div :class="classObject">
    <span class="io-snackbar__slot">
      <slot />
    </span>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>