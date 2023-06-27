<script setup>
import { onMounted } from "vue";
import { useChallengeStore } from "stores/challenge-store";
import { storeToRefs } from "pinia";

const challengeStore = useChallengeStore();

const {challengeList} = storeToRefs(challengeStore);

onMounted(() => {
  challengeStore.getChallengeList();
})

const clickDeleteBtn = async (challengeId) => {
  await challengeStore.deleteChallenge(challengeId);
  await challengeStore.getChallengeList();
}
</script>
<template>
  <div v-for="(challenge, idx) in challengeList" v-bind:key="idx">
    <div class="q-pb-md">
      <div>{{challenge.title}}</div>
      <div>{{challenge.goal}}</div>
      <div>{{challenge.isDone}}</div>

      <!-- 삭제하기 -->
      <div style="color: blue" @click="clickDeleteBtn(challenge.id)">delete</div>
      <!-- 수정하기 -->
      <div style="color: blue" >modify</div>
    </div>
  </div>
</template>
