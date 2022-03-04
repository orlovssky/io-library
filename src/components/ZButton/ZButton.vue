<script setup lang="ts">
import { toRefs }       from 'vue';

import { defaultProps } from './props';

interface Props {
  primary?: boolean;
}

const props = withDefaults(defineProps<Props>(), {...defaultProps});

const { primary } = toRefs(props);
</script>

<template>
  <button
    class="z-button"
    :class="{ primary }"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>