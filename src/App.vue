<script setup lang="ts">
import ZButton from '@/components/ZButton';
import { ref } from 'vue';

const isPrimary = ref(false);
</script>

<template>
  <div style="margin: 100px;">
    <z-button :primary="isPrimary">
      ZButton
    </z-button>
    <z-button @click="isPrimary = !isPrimary">
      isPrimary
    </z-button>
  </div>
</template>