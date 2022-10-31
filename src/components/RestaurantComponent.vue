<script setup>
import { ref } from 'vue';

const props = defineProps({
  name: String,
  url: String,
});

const upVotes = ref(0);
const downVotes = ref(0);
var hasUpVoted = false;
var hasDownVoted = false;

function doVote(direction) {
  if (direction == 'up') {
    if (hasUpVoted === true) {
      upVotes.value--;
      hasUpVoted = false;
    } else {
      if (hasDownVoted === true) doVote('down'); // toggle down vote
      upVotes.value++;
      hasUpVoted = true;
    }
  } else if (direction == 'down') {
    if (hasDownVoted === true) {
      downVotes.value--;
      hasDownVoted = false;
    } else {
      if (hasUpVoted === true) doVote('up'); // toggle up vote
      downVotes.value++;
      hasDownVoted = true;
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-md-12">
        <h5
          class="card-header d-flex justify-content-between align-items-center"
        >
          <a :href="url" target="_blank">{{ name }}</a>

          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-outline-success btn-sm"
              @click="doVote('up')"
            >
              {{ upVotes }} <i class="bi bi-hand-thumbs-up-fill"></i>
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="doVote('down')"
            >
              {{ downVotes }} <i class="bi bi-hand-thumbs-down-fill"></i>
            </button>
          </div>
        </h5>
        <div class="card-body">
          <p class="card-text text-start">
            Some random text about hte restaurant.
          </p>

          <p class="card-text text-end">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 1em;
}
</style>
