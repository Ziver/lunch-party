<script setup>
import { ref } from 'vue';
import LoginPage from './components/LoginPage.vue';

const showLogin = ref(true);

function loginDone(data) {
  console.log('Main app login done.');

  showLogin.value = false;
}
</script>

<template>
  <LoginPage v-show="showLogin" @response="loginDone" />
</template>

<style scoped></style>
