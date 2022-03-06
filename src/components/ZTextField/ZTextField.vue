<script setup lang="ts">
import { toRefs, computed, ref } from 'vue';

interface Props {
  outlined?: boolean;
  label?: string;
  password?: boolean;
}
const focused = ref(false);
const props = withDefaults(defineProps<Props>(), {
  outlined: false,
  label: '',
  password: false,
});

const { outlined, label, password } = toRefs(props);
const textFieldclassObject = computed(() => ({
  'z-text-field_outlined': outlined.value,
}));
const wrapperClassObject = computed(() => ({
  'z-text-field__wrapper_focused': focused.value,
  'z-text-field__wrapper_outlined': outlined.value,
}));
</script>

<template>
  <div
    class="z-text-field__wrapper" 
    :class="wrapperClassObject"
  >
    <div
      v-if="label"
      class="z-text-field__label"
    >
      {{ label }}
    </div>
    <input
      class="z-text-field"
      :class="textFieldclassObject"
      :type="password ? 'password' : 'text'"
      @focus="focused = true"
      @blur="focused = false"
    >
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>