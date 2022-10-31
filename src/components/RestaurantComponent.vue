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
      upVotes.value++;
      hasUpVoted = true;
    }
  } else if (direction == 'down') {
    if (hasDownVoted === true) {
      downVotes.value--;
      hasDownVoted = false;
    } else {
      downVotes.value++;
      hasDownVoted = true;
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="row">
      <div class="col-md-4 d-none d-md-block">
        <svg
          class="bd-placeholder-img img-fluid rounded-start"
          width="100%"
          height="250"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Image"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text>
        </svg>
      </div>
      <div class="col-md-8">
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

<style scoped></style>
