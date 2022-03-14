<script setup lang="ts">
import { toRefs, computed, ref } from 'vue';

interface Props {
  outlined?: boolean;
  type?: string;
  label?: string;
  error?: boolean;
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
  outlined: false,
  error: false,
  modelValue: '',
});

const focused = ref(false);
const { type, label, outlined, error, modelValue } = toRefs(props);

const wrapperClassObject = computed(() => ({
  'io-text-field__wrapper': true,
  'io-text-field__wrapper_focused': focused.value,
  'io-text-field__wrapper_filled': !outlined.value,
  'io-text-field__wrapper_error': error.value,
}));

const emit = defineEmits(['update:modelValue']);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target) {
    emit('update:modelValue', target.value);
  }
};
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
      :value="modelValue"
      class="io-text-field"
      :type="type"
      @focus="focused = true"
      @blur="focused = false"
      @input="handleInput"
    >
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>