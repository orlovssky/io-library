<script setup lang="ts">
import { toRefs, computed, ref } from 'vue';

interface Props {
  mini?: boolean;
  spaceBetween?: boolean;
  spaceEvenly?: boolean;
  spaceAround?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  mini: true,
  spaceBetween: false,
  spaceEvenly: false,
  spaceAround: false,
});

const ioDrawer = ref<HTMLElement>();
const ioDrawerContent = ref<HTMLDivElement>();
const { mini, spaceBetween, spaceEvenly, spaceAround } = toRefs(props);

const drawerClassObject = computed(() => ({
  'io-drawer': true,
  'io-drawer_mini': mini.value,
}));
const contentClassObject = computed(() => ({
  'io-drawer__content': true,
  'io-drawer__content_space-between': spaceBetween.value,
  'io-drawer__content_space-evenly': spaceEvenly.value,
  'io-drawer__content_space-around': spaceAround.value,
}));

const handleIoDrawerMouseEnter = () => {
  if (!mini.value) return;
  if (!ioDrawer.value) return;
  if (!ioDrawerContent.value) return;
  if (ioDrawer.value.classList.contains('io-drawer_hovered')) return;
  
  const width = ioDrawerContent.value.scrollWidth + 16 + 16;
  const halfScreen = document.body.clientWidth / 2;

  ioDrawer.value.style.width = `${width >= halfScreen ? halfScreen : width}px`;
  ioDrawer.value.classList.add('io-drawer_hovered');
};
const handleIoDrawerMouseLeave = () => {
  if (mini.value && ioDrawer.value) {
    ioDrawer.value.style.removeProperty('width');
    ioDrawer.value.classList.remove('io-drawer_hovered');
  }
};
</script>

<template>
  <aside
    ref="ioDrawer"
    :class="drawerClassObject"
    @mouseenter="handleIoDrawerMouseEnter"
    @mouseleave="handleIoDrawerMouseLeave"
  >
    <div
      ref="ioDrawerContent" 
      :class="contentClassObject"
    >
      <slot />
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>