<script setup>
import { onMounted } from "vue";
import { useChallengeStore } from "stores/challenge-store";
import { storeToRefs } from "pinia";
import ModifyChallengeDialog from "components/challenge/ModifyChallengeDialog";

const challengeStore = useChallengeStore();

const {challengeList} = storeToRefs(challengeStore);

onMounted(() => {
  challengeStore.getChallengeList();
})

const clickDeleteBtn = async (challengeId) => {
  await challengeStore.deleteChallenge(challengeId);
  await challengeStore.getChallengeList();
}

const clickModifyBtn = () => {
  challengeStore.toggleModifyChallengeBtn(true);
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
      <div style="color: blue" @click="clickModifyBtn">modify</div>
      <modify-challenge-dialog :id="challenge.id" :isDone="challenge.isDone" :title="challenge.title" :goal="challenge.goal"></modify-challenge-dialog>
    </div>
  </div>
</template>
