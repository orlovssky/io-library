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
  'z-text-field__wrapper': true,
  'z-text-field__wrapper_focused': focused.value,
  'z-text-field__wrapper_filled': !outlined.value,
  'z-text-field__wrapper_error': error.value,
}));
</script>

<template>
  <div :class="wrapperClassObject">
    <div
      v-if="!!label"
      class="z-text-field__label"
    >
      {{ label }}
    </div>
    <input
      class="z-text-field"
      :type="type"
      @focus="focused = true"
      @blur="focused = false"
    >
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>