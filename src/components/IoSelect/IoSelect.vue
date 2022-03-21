<script setup lang="ts">
import { IoTextField }                             from '@/index';
import { toRefs, ref, computed, DirectiveBinding } from 'vue';

interface Item {
  id: string | number;
  value: string | number;
  label: string;
}

interface Props {
  type?: string;
  label?: string;
  outlined?: boolean;
  error?: boolean;
  modelValue?: string | number;
  items?: Item[];
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
  outlined: false,
  error: false,
  modelValue: undefined,
  items: undefined,
});

const focused = ref(false);
const inputValue = ref('');
const ioSelectWrapper = ref<HTMLElement>();
const { type, label, outlined, error, items } = toRefs(props);
const emit = defineEmits(['update:modelValue']);

const wrapperClassObject = computed(() => ({
  'io-select__wrapper': true,
  'io-select__wrapper_focused': focused.value,
}));

const handleItemClick = (item: Item) => {
  emit('update:modelValue', item.value);
  focused.value = false;
  inputValue.value = item.label;
};

const getAllChildren = (el: Element): Element[] => {
  if (el.children.length === 0) return [el];

  const allChildren = [];

  for (const item of el.children) {
    const children = getAllChildren(item);
    if (children) allChildren.push(...children);
  }
  allChildren.push(el);

  return allChildren;
};

const clickOutsideEvent = (event: MouseEvent) => {
  if (!ioSelectWrapper.value) return;

  const allChildren = getAllChildren(ioSelectWrapper.value);
  for (const node of allChildren) {
    if (node === event.target) return;
  }

  focused.value = false;
};

const vClickOutside = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    if (!binding.value) return;

    document.body.addEventListener('click', clickOutsideEvent);
  },
  unmounted() {
    document.body.removeEventListener('click', clickOutsideEvent);
  }
};
</script>

<template>
  <div
    ref="ioSelectWrapper"
    v-click-outside="true"
    :class="wrapperClassObject"
  >
    <io-text-field
      v-model="inputValue"
      class="io-select"
      :type="type"
      :label="label"
      :outlined="outlined"
      :error="error"
      readonly
      @focus="focused = true"
    />
    <div class="io-select__items">
      <div
        v-for="item in items"
        :key="`IoSelect-${item.id}`"
        class="io-select__item"
        @click="handleItemClick(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>