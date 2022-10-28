import { defineStore } from 'pinia';

export const localStore = defineStore('local', {
  state: () => {
    return {
      user: {
        group: '',
        name: '',
      },
    };
  },
  actions: {},
});
