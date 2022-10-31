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
    <form>
      <h3 class="h3 mb-3 fw-normal text-danger">Please sign in</h3>

      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="groupName"
          placeholder="Group Name"
          v-model="groupName"
          required
        />
        <label for="floatingInput">Group Name</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="userName"
          placeholder="Your"
          v-model="userName"
          required
        />
        <label for="floatingPassword">Your Name</label>
      </div>

      <br />
      <button
        class="w-100 btn btn-lg btn-primary"
        type="button"
        @click="doLogin"
      >
        Sign in
      </button>
    </form>
  </div>
</template>

<style scoped></style>
