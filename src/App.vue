<script setup>
import { ref } from 'vue';
import { localStore } from './store/local.js';
import LoginPage from './components/LoginPage.vue';
import VotingPage from './components/VotingPage.vue';

const store = localStore();

const showLogin = ref(true);
const showVoting = ref(false);

function loginDone(data) {
  console.log('Main app login done.');

  console.log(data);
  store.user.group = data.groupName;
  store.user.name = data.userName;

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
