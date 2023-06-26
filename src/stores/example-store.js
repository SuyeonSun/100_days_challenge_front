import { defineStore } from 'pinia';
import { api } from "boot/axios";

export const exampleStore = defineStore('example', {
  state: () => ({
  }),

  actions: {
    async example() {
      try {
        const response = await api.get("/challenge/list");
      } catch (error) {
        console.log("error");
      }
    },
  },
});
