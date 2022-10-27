<script setup>
import { ref } from 'vue';
import LoginPage from './components/LoginPage.vue';
import VotingPage from './components/VotingPage.vue';

const showLogin = ref(true);
const showVoting = ref(false);

function loginDone(data) {
  console.log('Main app login done.');

  showLogin.value = false;
  showVoting.value = true;
}
</script>

<template>
  <div>
    <h1>Lunch Party!!</h1>

    <LoginPage v-show="showLogin" @response="loginDone" />
    <VotingPage v-show="showVoting" />
  </div>
</template>

<style scoped></style>
