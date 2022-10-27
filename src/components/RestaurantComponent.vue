<script setup>
import { ref } from 'vue';

const props = defineProps({
  name: String,
  url: String,
});

const votes = ref(0);
</script>

<template>
  <div class="restaurant-box">
    {{ name }}
    <button type="button" @click="votes++">{{ votes }}</button>
    <p>
      {{ url }}
    </p>
  </div>
</template>

<style scoped>
.restaurant-box {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background: #393f47;
  width: 400px;
  height: 60px;
  padding: 10px;
  border: 2px solid gray;
  margin: 5px;
  overflow: hidden;
}
</style>
