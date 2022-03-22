<script setup lang="ts">
import { toRefs, computed, ref } from 'vue';

import {
  IoTextFieldType,
  IoTextFieldLabel,
  IoTextFieldOutlined,
  IoTextFieldError,
  IoTextFieldModelValue,
  IoTextFieldReadonly,
  IoTextFieldOnFocus,
} from './types';

interface Props {
  type?: IoTextFieldType;
  label?: IoTextFieldLabel;
  outlined?: IoTextFieldOutlined;
  error?: IoTextFieldError;
  modelValue?: IoTextFieldModelValue;
  readonly?: IoTextFieldReadonly;
  onFocus?: IoTextFieldOnFocus;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
  outlined: false,
  error: false,
  modelValue: '',
  readonly: false,
  onFocus: undefined,
});

const focused = ref(false);
const { type, label, outlined, error, modelValue } = toRefs(props);

const wrapperClassObject = computed(() => ({
  'io-text-field__wrapper': true,
  'io-text-field__wrapper_filled': !outlined.value,
  'io-text-field__wrapper_outlined': outlined.value,
  'io-text-field__wrapper_focused': focused.value,
  'io-text-field__wrapper_error': error.value,
  'io-text-field__wrapper_not-empty': modelValue.value,
}));

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target) emit('update:modelValue', target.value);
};
const handleFocus = (e: FocusEvent) => {
  emit('focus', e);
  focused.value = true;
};
const handleBlur = (e: FocusEvent) => {
  emit('blur', e);
  focused.value = false;
};
</script>

<template>
  <div :class="wrapperClassObject">
    <div
      v-if="label"
      class="io-text-field__label"
    >
      {{ label }}
    </div>
    <input
      :value="modelValue"
      class="io-text-field"
      :type="type"
      :readonly="readonly"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    >
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>