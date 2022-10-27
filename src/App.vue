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
  <div>
    <h1>Lunch Party!!</h1>

    <LoginPage v-show="showLogin" @response="loginDone" />
  </div>
</template>

<style scoped></style>
