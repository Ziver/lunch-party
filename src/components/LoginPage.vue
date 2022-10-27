<script setup>
import { ref } from 'vue';

const groupName = ref('');
const userName = ref('');

function doLogin() {
  console.log(
    'We are logging in: Group=' + groupName.value + ', User=' + userName.value
  );
}
</script>

<template>
  <h1>Lunch Party!!</h1>
  <h3>Login Page</h3>

  <div>
    <label for="group">Group Name: </label>
    <input type="text" id="group" name="group" v-model="groupName" required />
  </div>
  <div>
    <label for="name">Your User Name: </label>
    <input type="text" id="name" name="name" v-model="userName" required />
  </div>
  <div>
    <button type="button" @click="doLogin">Login</button>
  </div>
</template>

<style scoped></style>
