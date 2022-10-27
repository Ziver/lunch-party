<script setup>
import { ref } from 'vue';

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
    <h3>Start Voting!</h3>
    <button type="button" @click="addRestaurant">+</button>

    <div>
      <div v-for="restaurant in restaurantList">
        {{ restaurant.name }} {{ restaurant.url }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
