<script setup lang="ts">
import { 
  ZApp,
  ZDrawer,
  ZButton,
  ZList,
  ZListItem,
  ZListItemIcon,
  ZListItemContent
} from '@/index';
import { ref } from 'vue';

const theme = ref<'light' | 'dark' | undefined>('light');

const changeTheme = () => {
  if (theme.value === 'light') {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }
};
</script>

<template>
  <z-app
    :theme="theme"
    style="padding: 100px;"
  >
    <z-drawer mini>
      <z-list>
        <z-list-item>
          <z-list-item-icon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                fill="#141B2C"
              />
            </svg>
          </z-list-item-icon>
          content
        </z-list-item>
        <z-list-item>
          <z-list-item-icon>
            asd
          </z-list-item-icon>asd asdasd as dasaas
        </z-list-item>
        <z-list-item>asasdasdasddas</z-list-item>
      </z-list>  
    </z-drawer>

    <z-button
      disabled
      @click="changeTheme"
    >
      changeTheme
    </z-button>
  </z-app>
</template>