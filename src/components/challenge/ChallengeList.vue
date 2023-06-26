<script setup>
import { onMounted } from "vue";
import { useChallengeStore } from "stores/challenge-store";
import { storeToRefs } from "pinia";

const challengeStore = useChallengeStore();

const {challengeList} = storeToRefs(challengeStore);

onMounted(() => {
  challengeStore.getChallengeList();
})
</script>
<template>
  <div v-for="(challenge, idx) in challengeList" v-bind:key="idx">
    <div>
      <div>{{challenge.title}}</div>
      <div>{{challenge.goal}}</div>
      <div>{{challenge.isDone}}</div>
    </div>
  </div>
</template>
