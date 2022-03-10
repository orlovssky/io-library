<script setup lang="ts">
import { toRefs, computed, ref } from 'vue';

interface Props {
  outlined?: boolean;
  type?: string;
  label?: string;
  error?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
  outlined: false,
  error: false,
});

const focused = ref(false);
const { type, label, outlined, error } = toRefs(props);

const wrapperClassObject = computed(() => ({
  'io-text-field__wrapper': true,
  'io-text-field__wrapper_focused': focused.value,
  'io-text-field__wrapper_filled': !outlined.value,
  'io-text-field__wrapper_error': error.value,
}));
</script>

<template>
  <div :class="wrapperClassObject">
    <div
      v-if="!!label"
      class="io-text-field__label"
    >
      {{ label }}
    </div>
    <input
      class="io-text-field"
      :type="type"
      @focus="focused = true"
      @blur="focused = false"
    >
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>