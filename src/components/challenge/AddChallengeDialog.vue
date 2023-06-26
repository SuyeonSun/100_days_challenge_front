<script setup>
import { useChallengeStore } from "stores/challenge-store";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const challengeStore = useChallengeStore();

const { addChallengeDialogBtnStatus } = storeToRefs(challengeStore);

const title = ref("");
const goal = ref("");

const clickAddBtn = async () => {
  const addChallengePayload = {
    title: title.value,
    goal: goal.value,
    isDone: false
  }
  await challengeStore.addChallenge(addChallengePayload);
  await challengeStore.getChallengeList();
  // TODO: 정상 등록 시 notify 띄우기 및 dialog 닫기
}

const clickCancelBtn = () => {
  challengeStore.toggleAddChallengeBtn(false);
}
</script>

<template>
  <div class="q-pa-md">
    <q-dialog v-model="addChallengeDialogBtnStatus" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <div>Add Challenge</div>
        </q-card-section>

        <q-card-section>
          <div>title</div>
          <div>
            <q-input outlined v-model="title" dense/>
          </div>
          <div>goal</div>
          <div>
            <q-input outlined v-model="goal" dense/>
          </div>
        </q-card-section>

        <q-card-section>
          <q-btn @click="clickAddBtn">add</q-btn>
          <q-btn @click="clickCancelBtn">cancel</q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
