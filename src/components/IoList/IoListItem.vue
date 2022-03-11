<script setup lang="ts">
import { toRefs, computed } from 'vue';

interface Props {
  onClick?: (e: MouseEvent) => void,
}

const props = withDefaults(defineProps<Props>(), {
  onClick: undefined,
});

const { onClick } = toRefs(props);

const itemClassObject = computed(() => ({
  'io-list-item': true,
  'io-list-item_hoverable': onClick.value !== undefined,
}));
</script>

<template>
  <div
    :class="itemClassObject"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import './styles/item.scss';
</style>