<script setup lang="ts">
import ZApp    from '@/components/ZApp';
import ZButton from '@/components/ZButton';
import { ref } from 'vue';

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
    <z-button
      color="primary"
      type="elevated"
    >
      primary
    </z-button>
    <z-button color="secondary">
      secondary
    </z-button>
    <z-button color="tertiary">
      tertiary
    </z-button>
    <z-button color="error">
      error
    </z-button>
    <z-button @click="changeTheme">
      changeTheme
    </z-button>
  </z-app>
</template>