import { defineStore } from 'pinia';
import { api } from "boot/axios";

export const useChallengeStore = defineStore('challenge-store', {
  state: () => ({
    challengeList: []
  }),

  actions: {
    async getChallengeList () {
      try {
        const response = await api.get("/challenge/list");
        this.challengeList = response.data;
      } catch (error) {
        console.log("error");
      }
    }
  }
})
