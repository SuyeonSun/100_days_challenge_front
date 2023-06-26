<script setup>
import { onMounted, watch } from "vue";
import { useChallengeStore } from "stores/challenge-store";
import { storeToRefs } from "pinia";

const challengeStore = useChallengeStore();

const {challengeList} = storeToRefs(challengeStore);

onMounted(() => {
  challengeStore.getChallengeList();
})
</script>
<template>
  <div>{{challengeList}}</div>
</template>
