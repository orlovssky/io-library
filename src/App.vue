<script setup lang="ts">
import { ZApp, ZTextField, ZButton } from '@/index';
import { ref }                       from 'vue';

const theme = ref('light');

const changeTheme = () => {
  if (theme.value === 'light') {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }
};
</script>

<template>
  <z-app :theme="theme">
    <z-text-field
      style="margin: 100px;"
      outlined
      label="asdas"
    />

    <z-button @click="changeTheme">
      changeTheme
    </z-button>
  </z-app>
</template>