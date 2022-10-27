<script setup>
import { ref } from 'vue';

const groupName = ref('');
const userName = ref('');

const emit = defineEmits(['response']);

function doLogin() {
  console.log(
    'We are logging in: Group=' + groupName.value + ', User=' + userName.value
  );

  emit('response', { groupName: groupName, userName: userName });
}
</script>

<template>
  <div>
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
  </div>
</template>

<style scoped></style>
