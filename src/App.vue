<script setup lang="ts">
import { 
  IoApp,
  IoDrawer,
  IoButton,
  IoList,
  IoListItem,
  IoListItemIcon,
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
  <io-app
    :theme="theme"
    style="padding: 100px;"
  >
    <io-drawer mini>
      <io-list>
        <io-list-item>
          <io-list-item-icon>
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
          </io-list-item-icon>
          content
        </io-list-item>
        <io-list-item>
          <io-list-item-icon>
            asd
          </io-list-item-icon>asd asdasd as dasaas
        </io-list-item>
        <io-list-item>asasdasdasddas</io-list-item>
      </io-list>  
    </io-drawer>

    <io-button
      disabled
      @click="changeTheme"
    >
      changeTheme
    </io-button>
  </io-app>
</template>