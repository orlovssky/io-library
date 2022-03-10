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

const zDrawer = ref<HTMLElement>();
const zDrawerContent = ref<HTMLDivElement>();
const { permanent, permanentMini, mini } = toRefs(props);

const drawerClassObject = computed(() => ({
  'z-drawer_permanent': permanent.value,
  'z-drawer_permanent-mini': permanentMini.value,
  'z-drawer_mini': mini.value,
}));

const handleZDrawerMouseEnter = () => {
  if (mini.value && zDrawer.value && zDrawerContent.value) {
    console.log(zDrawerContent.value.scrollWidth);
    const width = zDrawerContent.value.scrollWidth + 8 + 48;
    const halfScreen = document.body.clientWidth / 2;

    zDrawer.value.style.width = `${width >= halfScreen ? halfScreen : width}px`;
    zDrawer.value.classList.add('z-drawer_hovered');
  }
};
const handleZDrawerMouseLeave = () => {
  if (mini.value && zDrawer.value) {
    zDrawer.value.style.removeProperty('width');
    zDrawer.value.classList.remove('z-drawer_hovered');
  }
};
</script>

<template>
  <aside
    ref="zDrawer"
    class="z-drawer"
    :class="drawerClassObject"
    @mouseenter="handleZDrawerMouseEnter"
    @mouseleave="handleZDrawerMouseLeave"
  >
    <div
      ref="zDrawerContent" 
      class="z-drawer__content"
    >
      <slot />
    </div>
  </aside>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>