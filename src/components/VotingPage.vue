<script setup>
import { ref } from 'vue';
import { localStore } from '../store/local.js';
import RestaurantComponent from './RestaurantComponent.vue';

const store = localStore();

var restaurantList = ref([
  {
    name: 'Tele2 Kista',
    url: 'https://www.foodandco.se/restauranger/restauranger/kista/',
  },
  { name: 'Restaurang 88', url: 'https://restaurang88.se/' },
  { name: 'Upper East', url: 'https://uppereast.gastrogate.com/lunch/' },
  {
    name: 'Tastory',
    url: 'https://www.tastory.com/sv/vara-restauranger--cafeer/restauranger/tastory-kista/',
  },
  { name: 'The Place(World Class)', url: 'https://theplace.kvartersmenyn.se/' },
  { name: 'Glaze', url: 'https://vasakronan.foodbycoor.se/glaze' },
  {
    name: 'Nordic Forum',
    url: 'https://nordicforum.gastrogate.com/lunchmeny/',
  },
  { name: 'Heat', url: 'https://heatrestauranger.se/veckans-lunchmeny/' },
  { name: 'Wild Kitchen', url: 'https://www.kvartersmenyn.se/rest/16057' },
]);

function addRestaurant() {
  var restaurantName = prompt('Enter the name of a restaurant:');

  restaurantList.value.push({ name: restaurantName, url: '' });
}
</script>

<template>
  <div>
    <div class="row">
      <div class="col-sm-8">
        <h3 class="fw-normal text-primary">
          Start Voting! ({{ store.user.name }})
        </h3>
      </div>
      <div class="col-sm-4">
        <button
          type="button"
          class="btn btn-sm btn-primary"
          @click="addRestaurant"
        >
          Add Restaurant
        </button>
      </div>
    </div>

    <div>
      <div v-for="restaurant in restaurantList">
        <RestaurantComponent :name="restaurant.name" :url="restaurant.url" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
