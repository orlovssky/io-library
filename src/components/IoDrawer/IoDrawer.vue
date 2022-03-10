<script setup lang="ts">
import { toRefs, computed, ref } from 'vue';

interface Props {
  permanent?: boolean;
  permanentMini?: boolean;
  mini?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  permanent: true,
  permanentMini: false,
  mini: false,
});

const ioDrawer = ref<HTMLElement>();
const ioDrawerContent = ref<HTMLDivElement>();
const { permanent, permanentMini, mini } = toRefs(props);

const drawerClassObject = computed(() => ({
  'io-drawer': true,
  'io-drawer_permanent': permanent.value,
  'io-drawer_permanent-mini': permanentMini.value,
  'io-drawer_mini': mini.value,
}));

const handleIoDrawerMouseEnter = () => {
  if (mini.value && ioDrawer.value && ioDrawerContent.value) {
    const width = ioDrawerContent.value.scrollWidth + 8 + 48;
    const halfScreen = document.body.clientWidth / 2;

    ioDrawer.value.style.width = `${width >= halfScreen ? halfScreen : width}px`;
    ioDrawer.value.classList.add('io-drawer_hovered');
  }
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
      class="io-drawer__content"
    >
      <slot />
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>