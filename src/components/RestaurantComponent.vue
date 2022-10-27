<script setup>
import { ref } from 'vue';

const props = defineProps({
  name: String,
  url: String,
});
</script>

<template>
  <div>{{ name }} {{ url }}</div>
</template>

<style scoped></style>
