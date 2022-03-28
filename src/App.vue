<script setup lang="ts">
import { 
  IoApp,
  IoButton,
  IoTextField,
  IoIcon,
  IoSnackbar
} from '@/index';
import { ref }             from 'vue';

const clickedButton = ref('');
const inputValue = ref('');
const handleClose = () => {
  console.log('ioInput');
};
</script>

<template>
  <io-app
    theme="dark"
    style="padding: 20px;"
  >
    <io-snackbar
      closable
      color="error"
      @close="handleClose"
    >
      as
    </io-snackbar>
    <!-- Round Filled -->
    <div class="app__block">
      <span class="app__title">Text fields</span>
      <span class="app__subtitle">Input: {{ inputValue }}</span>
      <div class="app__buttons">
        <div>
          <io-text-field
            v-model="inputValue"
          />
        </div>
        <div>
          <io-text-field
            v-model="inputValue"
            outlined
          />
        </div>
        <div>
          <io-text-field
            v-model="inputValue"
            label="withLabel"
          />
        </div>
        <div>
          <io-text-field
            v-model="inputValue"
            label="withLabel"
            outlined
          />
        </div>
      </div>
    </div>
    <!-- Round Filled end -->

    <!-- Round Filled -->
    <div class="app__block">
      <span class="app__title">Round Filled</span>
      <span
        v-if="clickedButton.startsWith('Round Filled')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            round
            @click="clickedButton = 'Round Filled primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            round
            color="secondary"
            @click="clickedButton = 'Round Filled secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            round
            color="tertiary"
            @click="clickedButton = 'Round Filled tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            round
            color="error"
            @click="clickedButton = 'Round Filled error'"
          >
            Error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Round Filled end -->

    <!-- Sizes -->
    <div class="app__block">
      <span class="app__title">Sizes</span>
      <span
        v-if="clickedButton.startsWith('Sizes')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            size="small"
            :loading="clickedButton.startsWith('Sizes')"
            @click="clickedButton = 'Sizes small'"
          >
            <template #prepend>
              <io-icon>
                <svg
                  width="160"
                  height="214"
                  viewBox="0 0 160 214"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M135.848 43.546C129.515 43.5532 123.443 46.0723 118.966 50.5507C114.488 55.0291 111.969 61.101 111.963 67.434V126.934C112.03 131.192 111.25 135.42 109.667 139.373C108.084 143.326 105.731 146.924 102.744 149.959C99.7565 152.994 96.1956 155.404 92.2681 157.049C88.3406 158.694 84.125 159.541 79.867 159.541C75.6089 159.541 71.3934 158.694 67.4659 157.049C63.5384 155.404 59.9774 152.994 56.9904 149.959C54.0033 146.924 51.6499 143.326 50.0671 139.373C48.4843 135.42 47.7038 131.192 47.771 126.934V67.434C47.771 61.0992 45.2545 55.0238 40.7751 50.5444C36.2957 46.065 30.2203 43.5485 23.8855 43.5485C17.5507 43.5485 11.4753 46.065 6.99588 50.5444C2.51648 55.0238 0 61.0992 0 67.434V133.234C-3.12575e-07 143.722 2.06581 154.108 6.0795 163.798C10.0932 173.488 15.9762 182.292 23.3925 189.709C30.8088 197.125 39.6133 203.008 49.3032 207.022C58.9931 211.035 69.3787 213.101 79.867 213.101C90.3553 213.101 100.741 211.035 110.431 207.022C120.121 203.008 128.925 197.125 136.341 189.709C143.758 182.292 149.641 173.488 153.654 163.798C157.668 154.108 159.734 143.722 159.734 133.234V67.434C159.727 61.1009 157.209 55.029 152.731 50.5507C148.253 46.0723 142.181 43.5532 135.848 43.546ZM149.284 133.229C149.284 151.64 141.97 169.296 128.952 182.314C115.934 195.332 98.2775 202.646 79.867 202.646C61.4564 202.646 43.8 195.332 30.7818 182.314C17.7636 169.296 10.45 151.64 10.45 133.229V67.434C10.4806 63.8908 11.9095 60.5031 14.4259 58.0083C16.9422 55.5136 20.3421 54.1139 23.8855 54.1139C27.4289 54.1139 30.8288 55.5136 33.3451 58.0083C35.8614 60.5031 37.2904 63.8908 37.321 67.434V126.934C37.321 138.218 41.8035 149.04 49.7824 157.019C57.7613 164.998 68.5831 169.48 79.867 169.48C91.1509 169.48 101.973 164.998 109.952 157.019C117.93 149.04 122.413 138.218 122.413 126.934V67.434C122.413 63.8707 123.828 60.4533 126.348 57.9337C128.868 55.414 132.285 53.9985 135.848 53.9985C139.412 53.9985 142.829 55.414 145.349 57.9337C147.868 60.4533 149.284 63.8707 149.284 67.434V133.229Z"
                    fill="currentColor"
                  />
                  <path
                    d="M74.642 55.724V124.608C74.642 125.994 75.1925 127.323 76.1724 128.303C77.1522 129.283 78.4812 129.833 79.867 129.833C81.2527 129.833 82.5817 129.283 83.5616 128.303C84.5415 127.323 85.092 125.994 85.092 124.608V55.724C91.8381 54.4242 97.8575 50.6566 101.975 45.157C106.092 39.6573 108.012 32.8205 107.359 25.9814C106.706 19.1423 103.528 12.7922 98.4442 8.17081C93.3606 3.54946 86.7371 0.988769 79.867 0.988769C72.9968 0.988769 66.3733 3.54946 61.2898 8.17081C56.2063 12.7922 53.0278 19.1423 52.375 25.9814C51.7221 32.8205 53.6418 39.6573 57.7592 45.157C61.8765 50.6566 67.8959 54.4242 74.642 55.724ZM79.867 11.45C83.2625 11.45 86.5818 12.4569 89.4051 14.3434C92.2284 16.2299 94.4289 18.9112 95.7282 22.0483C97.0276 25.1854 97.3676 28.6374 96.7051 31.9677C96.0425 35.298 94.4073 38.357 92.0062 40.758C89.6051 43.1589 86.546 44.7939 83.2157 45.4562C79.8853 46.1186 76.4334 45.7784 73.2964 44.4789C70.1594 43.1793 67.4782 40.9787 65.5918 38.1553C63.7055 35.3319 62.6988 32.0126 62.699 28.617C62.7043 24.0655 64.5148 19.7019 67.7333 16.4836C70.9518 13.2653 75.3155 11.455 79.867 11.45Z"
                    fill="currentColor"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_6"
                      x1="0"
                      y1="128.324"
                      x2="159.734"
                      y2="128.324"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EC441E" />
                      <stop
                        offset="1"
                        stop-color="#EE2A4A"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2_6"
                      x1="52.2499"
                      y1="65.4109"
                      x2="107.484"
                      y2="65.4109"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EC441E" />
                      <stop
                        offset="1"
                        stop-color="#EE2A4A"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </io-icon>
            </template>
            small
          </io-button>
        </div>
        <div>
          <io-button
            @click="clickedButton = 'Sizes medium (default)'"
          >
            <template #append>
              <io-icon>
                <svg
                  width="160"
                  height="214"
                  viewBox="0 0 160 214"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M135.848 43.546C129.515 43.5532 123.443 46.0723 118.966 50.5507C114.488 55.0291 111.969 61.101 111.963 67.434V126.934C112.03 131.192 111.25 135.42 109.667 139.373C108.084 143.326 105.731 146.924 102.744 149.959C99.7565 152.994 96.1956 155.404 92.2681 157.049C88.3406 158.694 84.125 159.541 79.867 159.541C75.6089 159.541 71.3934 158.694 67.4659 157.049C63.5384 155.404 59.9774 152.994 56.9904 149.959C54.0033 146.924 51.6499 143.326 50.0671 139.373C48.4843 135.42 47.7038 131.192 47.771 126.934V67.434C47.771 61.0992 45.2545 55.0238 40.7751 50.5444C36.2957 46.065 30.2203 43.5485 23.8855 43.5485C17.5507 43.5485 11.4753 46.065 6.99588 50.5444C2.51648 55.0238 0 61.0992 0 67.434V133.234C-3.12575e-07 143.722 2.06581 154.108 6.0795 163.798C10.0932 173.488 15.9762 182.292 23.3925 189.709C30.8088 197.125 39.6133 203.008 49.3032 207.022C58.9931 211.035 69.3787 213.101 79.867 213.101C90.3553 213.101 100.741 211.035 110.431 207.022C120.121 203.008 128.925 197.125 136.341 189.709C143.758 182.292 149.641 173.488 153.654 163.798C157.668 154.108 159.734 143.722 159.734 133.234V67.434C159.727 61.1009 157.209 55.029 152.731 50.5507C148.253 46.0723 142.181 43.5532 135.848 43.546ZM149.284 133.229C149.284 151.64 141.97 169.296 128.952 182.314C115.934 195.332 98.2775 202.646 79.867 202.646C61.4564 202.646 43.8 195.332 30.7818 182.314C17.7636 169.296 10.45 151.64 10.45 133.229V67.434C10.4806 63.8908 11.9095 60.5031 14.4259 58.0083C16.9422 55.5136 20.3421 54.1139 23.8855 54.1139C27.4289 54.1139 30.8288 55.5136 33.3451 58.0083C35.8614 60.5031 37.2904 63.8908 37.321 67.434V126.934C37.321 138.218 41.8035 149.04 49.7824 157.019C57.7613 164.998 68.5831 169.48 79.867 169.48C91.1509 169.48 101.973 164.998 109.952 157.019C117.93 149.04 122.413 138.218 122.413 126.934V67.434C122.413 63.8707 123.828 60.4533 126.348 57.9337C128.868 55.414 132.285 53.9985 135.848 53.9985C139.412 53.9985 142.829 55.414 145.349 57.9337C147.868 60.4533 149.284 63.8707 149.284 67.434V133.229Z"
                    fill="currentColor"
                  />
                  <path
                    d="M74.642 55.724V124.608C74.642 125.994 75.1925 127.323 76.1724 128.303C77.1522 129.283 78.4812 129.833 79.867 129.833C81.2527 129.833 82.5817 129.283 83.5616 128.303C84.5415 127.323 85.092 125.994 85.092 124.608V55.724C91.8381 54.4242 97.8575 50.6566 101.975 45.157C106.092 39.6573 108.012 32.8205 107.359 25.9814C106.706 19.1423 103.528 12.7922 98.4442 8.17081C93.3606 3.54946 86.7371 0.988769 79.867 0.988769C72.9968 0.988769 66.3733 3.54946 61.2898 8.17081C56.2063 12.7922 53.0278 19.1423 52.375 25.9814C51.7221 32.8205 53.6418 39.6573 57.7592 45.157C61.8765 50.6566 67.8959 54.4242 74.642 55.724ZM79.867 11.45C83.2625 11.45 86.5818 12.4569 89.4051 14.3434C92.2284 16.2299 94.4289 18.9112 95.7282 22.0483C97.0276 25.1854 97.3676 28.6374 96.7051 31.9677C96.0425 35.298 94.4073 38.357 92.0062 40.758C89.6051 43.1589 86.546 44.7939 83.2157 45.4562C79.8853 46.1186 76.4334 45.7784 73.2964 44.4789C70.1594 43.1793 67.4782 40.9787 65.5918 38.1553C63.7055 35.3319 62.6988 32.0126 62.699 28.617C62.7043 24.0655 64.5148 19.7019 67.7333 16.4836C70.9518 13.2653 75.3155 11.455 79.867 11.45Z"
                    fill="currentColor"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_6"
                      x1="0"
                      y1="128.324"
                      x2="159.734"
                      y2="128.324"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EC441E" />
                      <stop
                        offset="1"
                        stop-color="#EE2A4A"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2_6"
                      x1="52.2499"
                      y1="65.4109"
                      x2="107.484"
                      y2="65.4109"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EC441E" />
                      <stop
                        offset="1"
                        stop-color="#EE2A4A"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </io-icon>
            </template>
            medium (default)
          </io-button>
        </div>
        <div>
          <io-button
            size="large"
            :loading="clickedButton.startsWith('Sizes')"
            @click="clickedButton = 'Sizes large'"
          >
            <template #prepend>
              <io-icon>
                <svg
                  width="160"
                  height="214"
                  viewBox="0 0 160 214"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M135.848 43.546C129.515 43.5532 123.443 46.0723 118.966 50.5507C114.488 55.0291 111.969 61.101 111.963 67.434V126.934C112.03 131.192 111.25 135.42 109.667 139.373C108.084 143.326 105.731 146.924 102.744 149.959C99.7565 152.994 96.1956 155.404 92.2681 157.049C88.3406 158.694 84.125 159.541 79.867 159.541C75.6089 159.541 71.3934 158.694 67.4659 157.049C63.5384 155.404 59.9774 152.994 56.9904 149.959C54.0033 146.924 51.6499 143.326 50.0671 139.373C48.4843 135.42 47.7038 131.192 47.771 126.934V67.434C47.771 61.0992 45.2545 55.0238 40.7751 50.5444C36.2957 46.065 30.2203 43.5485 23.8855 43.5485C17.5507 43.5485 11.4753 46.065 6.99588 50.5444C2.51648 55.0238 0 61.0992 0 67.434V133.234C-3.12575e-07 143.722 2.06581 154.108 6.0795 163.798C10.0932 173.488 15.9762 182.292 23.3925 189.709C30.8088 197.125 39.6133 203.008 49.3032 207.022C58.9931 211.035 69.3787 213.101 79.867 213.101C90.3553 213.101 100.741 211.035 110.431 207.022C120.121 203.008 128.925 197.125 136.341 189.709C143.758 182.292 149.641 173.488 153.654 163.798C157.668 154.108 159.734 143.722 159.734 133.234V67.434C159.727 61.1009 157.209 55.029 152.731 50.5507C148.253 46.0723 142.181 43.5532 135.848 43.546ZM149.284 133.229C149.284 151.64 141.97 169.296 128.952 182.314C115.934 195.332 98.2775 202.646 79.867 202.646C61.4564 202.646 43.8 195.332 30.7818 182.314C17.7636 169.296 10.45 151.64 10.45 133.229V67.434C10.4806 63.8908 11.9095 60.5031 14.4259 58.0083C16.9422 55.5136 20.3421 54.1139 23.8855 54.1139C27.4289 54.1139 30.8288 55.5136 33.3451 58.0083C35.8614 60.5031 37.2904 63.8908 37.321 67.434V126.934C37.321 138.218 41.8035 149.04 49.7824 157.019C57.7613 164.998 68.5831 169.48 79.867 169.48C91.1509 169.48 101.973 164.998 109.952 157.019C117.93 149.04 122.413 138.218 122.413 126.934V67.434C122.413 63.8707 123.828 60.4533 126.348 57.9337C128.868 55.414 132.285 53.9985 135.848 53.9985C139.412 53.9985 142.829 55.414 145.349 57.9337C147.868 60.4533 149.284 63.8707 149.284 67.434V133.229Z"
                    fill="currentColor"
                  />
                  <path
                    d="M74.642 55.724V124.608C74.642 125.994 75.1925 127.323 76.1724 128.303C77.1522 129.283 78.4812 129.833 79.867 129.833C81.2527 129.833 82.5817 129.283 83.5616 128.303C84.5415 127.323 85.092 125.994 85.092 124.608V55.724C91.8381 54.4242 97.8575 50.6566 101.975 45.157C106.092 39.6573 108.012 32.8205 107.359 25.9814C106.706 19.1423 103.528 12.7922 98.4442 8.17081C93.3606 3.54946 86.7371 0.988769 79.867 0.988769C72.9968 0.988769 66.3733 3.54946 61.2898 8.17081C56.2063 12.7922 53.0278 19.1423 52.375 25.9814C51.7221 32.8205 53.6418 39.6573 57.7592 45.157C61.8765 50.6566 67.8959 54.4242 74.642 55.724ZM79.867 11.45C83.2625 11.45 86.5818 12.4569 89.4051 14.3434C92.2284 16.2299 94.4289 18.9112 95.7282 22.0483C97.0276 25.1854 97.3676 28.6374 96.7051 31.9677C96.0425 35.298 94.4073 38.357 92.0062 40.758C89.6051 43.1589 86.546 44.7939 83.2157 45.4562C79.8853 46.1186 76.4334 45.7784 73.2964 44.4789C70.1594 43.1793 67.4782 40.9787 65.5918 38.1553C63.7055 35.3319 62.6988 32.0126 62.699 28.617C62.7043 24.0655 64.5148 19.7019 67.7333 16.4836C70.9518 13.2653 75.3155 11.455 79.867 11.45Z"
                    fill="currentColor"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2_6"
                      x1="0"
                      y1="128.324"
                      x2="159.734"
                      y2="128.324"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EC441E" />
                      <stop
                        offset="1"
                        stop-color="#EE2A4A"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2_6"
                      x1="52.2499"
                      y1="65.4109"
                      x2="107.484"
                      y2="65.4109"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EC441E" />
                      <stop
                        offset="1"
                        stop-color="#EE2A4A"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </io-icon>
            </template>
            large
          </io-button>
        </div>
      </div>
    </div>
    <!-- Sizes end -->
    
    <!-- Filled -->
    <div class="app__block">
      <span class="app__title">Filled (default)</span>
      <span
        v-if="clickedButton.startsWith('Filled')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button 
            size="small"
            @click="clickedButton = 'Filled primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            size="large"
            color="secondary"
            @click="clickedButton = 'Filled secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            color="tertiary"
            @click="clickedButton = 'Filled tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            color="error"
            @click="clickedButton = 'Filled error'"
          >
            Error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Filled end -->

    <!-- Disabled Filled -->
    <div class="app__block">
      <span class="app__title">Disabled Filled</span>
      <span
        v-if="clickedButton.startsWith('Disabled Filled')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            disabled
            @click="clickedButton = 'Disabled Filled primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            disabled
            color="secondary"
            @click="clickedButton = 'Disabled Filled secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            disabled
            color="tertiary"
            @click="clickedButton = 'Disabled Filled tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            disabled
            color="error"
            @click="clickedButton = 'Disabled Filled error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Disabled Filled end -->

    <!-- Loading Filled -->
    <div class="app__block">
      <span class="app__title">Loading Filled</span>
      <span
        v-if="clickedButton.startsWith('Loading Filled')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            loading
            @click="clickedButton = 'Loading Filled primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            loading
            color="secondary"
            @click="clickedButton = 'Loading Filled secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            loading
            color="tertiary"
            @click="clickedButton = 'Loading Filled tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            loading
            color="error"
            @click="clickedButton = 'Loading Filled error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Loading Filled end -->

    <!-- Outlined -->
    <div class="app__block">
      <span class="app__title">Outlined</span><span
        v-if="clickedButton.startsWith('Outlined')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            type="outlined"
            @click="clickedButton = 'Outlined primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            type="outlined"
            color="secondary"
            @click="clickedButton = 'Outlined secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            type="outlined"
            color="tertiary"
            @click="clickedButton = 'Outlined tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            type="outlined"
            color="error"
            @click="clickedButton = 'Outlined error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Outlined end -->

    <!-- Disabled Outlined -->
    <div class="app__block">
      <span class="app__title">Disabled Outlined</span>
      <span
        v-if="clickedButton.startsWith('Disabled Outlined')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            disabled
            type="outlined"
            @click="clickedButton = 'Disabled Outlined primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            type="outlined"
            color="secondary"
            disabled
            @click="clickedButton = 'Disabled Outlined secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            type="outlined"
            color="tertiary"
            disabled
            @click="clickedButton = 'Disabled Outlined tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            type="outlined"
            color="error"
            disabled
            @click="clickedButton = 'Disabled Outlined error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Disabled Outlined end -->

    <!-- Loading Outlined -->
    <div class="app__block">
      <span class="app__title">Loading Outlined</span>
      <span
        v-if="clickedButton.startsWith('Loading Outlined')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            type="outlined"
            loading
            @click="clickedButton = 'Loading Outlined primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            type="outlined"
            loading
            color="secondary"
            @click="clickedButton = 'Loading Outlined secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            type="outlined"
            loading
            color="tertiary"
            @click="clickedButton = 'Loading Outlined tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            type="outlined"
            loading
            color="error"
            @click="clickedButton = 'Loading Outlined error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Loading Outlined end -->

    <!-- Elevated -->
    <div class="app__block">
      <span class="app__title">Elevated</span>
      <span
        v-if="clickedButton.startsWith('Elevated')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            type="elevated"
            @click="clickedButton = 'Elevated primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            type="elevated"
            color="secondary"
            @click="clickedButton = 'Elevated secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            type="elevated"
            color="tertiary"
            @click="clickedButton = 'Elevated tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            type="elevated"
            color="error"
            @click="clickedButton = 'Elevated error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Elevated end -->

    <!-- Disabled Elevated -->
    <div class="app__block">
      <span class="app__title">Disabled Elevated</span>
      <span
        v-if="clickedButton.startsWith('Disabled Elevated')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            disabled
            type="elevated"
            @click="clickedButton = 'Disabled Elevated primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            type="elevated"
            color="secondary"
            disabled
            @click="clickedButton = 'Disabled Elevated secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            type="elevated"
            color="tertiary"
            disabled
            @click="clickedButton = 'Disabled Elevated tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            type="elevated"
            color="error"
            disabled
            @click="clickedButton = 'Disabled Elevated error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Disabled Elevated end -->

    <!-- Loading Elevated -->
    <div class="app__block">
      <span class="app__title">Loading Elevated</span>
      <span
        v-if="clickedButton.startsWith('Loading Elevated')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            type="elevated"
            loading
            @click="clickedButton = 'Loading Elevated primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            type="elevated"
            loading
            color="secondary"
            @click="clickedButton = 'Loading Elevated secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            type="elevated"
            loading
            color="tertiary"
            @click="clickedButton = 'Loading Elevated tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            type="elevated"
            loading
            color="error"
            @click="clickedButton = 'Loading Elevated error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Loading Elevated end -->

    <!-- Text -->
    <div class="app__block">
      <span class="app__title">Text</span>
      <span
        v-if="clickedButton.startsWith('Text')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            type="text"
            @click="clickedButton = 'Text primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            type="text"
            color="secondary"
            @click="clickedButton = 'Text secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            type="text"
            color="tertiary"
            @click="clickedButton = 'Text tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            type="text"
            color="error"
            @click="clickedButton = 'Text error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Text end -->

    <!-- Disabled Text -->
    <div class="app__block">
      <span class="app__title">Disabled Text</span>
      <span
        v-if="clickedButton.startsWith('Disabled Text')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            type="text"
            disabled
            @click="clickedButton = 'Disabled Text primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            type="text"
            color="secondary"
            disabled
            @click="clickedButton = 'Disabled Text secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            type="text"
            color="tertiary"
            disabled
            @click="clickedButton = 'Disabled Text tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            type="text"
            color="error"
            disabled
            @click="clickedButton = 'Disabled Text error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Disabled Text end -->

    <!-- Loading Text -->
    <div class="app__block">
      <span class="app__title">Loading Text</span>
      <span
        v-if="clickedButton.startsWith('Loading Text')"
        class="app__subtitle"
      >Clicked: {{ clickedButton }}</span>
      <div class="app__buttons">
        <div>
          <io-button
            type="text"
            loading
            @click="clickedButton = 'Loading Text primary'"
          >
            primary
          </io-button>
        </div>
        <div>
          <io-button
            type="text"
            loading
            color="secondary"
            @click="clickedButton = 'Loading Text secondary'"
          >
            secondary
          </io-button>
        </div>
        <div>
          <io-button
            type="text"
            loading
            color="tertiary"
            @click="clickedButton = 'Loading Text tertiary'"
          >
            tertiary
          </io-button>
        </div>
        <div>
          <io-button
            type="text"
            loading
            color="error"
            @click="clickedButton = 'Loading Text error'"
          >
            error
          </io-button>
        </div>
      </div>
    </div>
    <!-- Loading Text end -->
  </io-app>
</template>
<style scoped lang="scss">
.app__block:not(:last-child) {
  margin-bottom: 2rem;
}
.app__title {
  font-size: 1.5em;
  margin-right: 1rem;
}
.app__buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
}
</style>