import { defineStore } from 'pinia';
import { api } from "boot/axios";

export const useChallengeStore = defineStore('challenge-store', {
  state: () => ({
    challengeList: [],
    addChallengeDialogBtnStatus: false,
    modifyChallengeDialogBtnStatus: false
  }),

  actions: {
    async getChallengeList () {
      try {
        const response = await api.get("/challenge/list");
        this.challengeList = response.data;
      } catch (error) {
        console.log("error");
      }
    },

    toggleAddChallengeBtn (status) {
      this.addChallengeDialogBtnStatus = status;
    },

    toggleModifyChallengeBtn (status) {
      this.modifyChallengeDialogBtnStatus = status;
    },

    async addChallenge (addChallengePayload) {
      try {
        await api.post("/challenge", addChallengePayload);
        // await api.get("/challenge/list");
      } catch (error) {
        console.log("error");
      }
    },

    async deleteChallenge (challengeId) {
      try {
        await api.delete(`/challenge/${challengeId}`);
      } catch (error) {
        console.log("error");
      }
    },

    async modifyChallenge (challengeId, modifyChallengePayload) {
      try {
        await api.put(`/challenge/${challengeId}`, modifyChallengePayload);
      } catch (error) {
        console.log("error");
      }
    }
  }
})
