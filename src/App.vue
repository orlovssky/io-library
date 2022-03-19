<script setup lang="ts">
import { IoApp, IoSnackbar } from '@/index';

const handleClose = () => {
  console.log('asd');
};
</script>

<template>
  <io-app theme="light">
    <io-snackbar @close="handleClose">
      asd
    </io-snackbar>
  </io-app>
</template>