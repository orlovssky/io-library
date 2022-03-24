<script setup lang="ts">
import { IoApp, IoButton } from '@/index';
import { ref }             from 'vue';

const clickedButton = ref('');
</script>

<template>
  <io-app
    theme="light"
    style="padding: 20px;"
  >
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
            @click="clickedButton = 'Sizes small'"
          >
            small
          </io-button>
        </div>
        <div>
          <io-button
            @click="clickedButton = 'Sizes medium (default)'"
          >
            medium (default)
          </io-button>
        </div>
        <div>
          <io-button
            size="large"
            @click="clickedButton = 'Sizes large'"
          >
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
          <io-button @click="clickedButton = 'Filled primary'">
            primary
          </io-button>
        </div>
        <div>
          <io-button
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