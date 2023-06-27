<script setup>
import { useChallengeStore } from "stores/challenge-store";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useQuasar } from "quasar";

const challengeStore = useChallengeStore();

const {modifyChallengeDialogBtnStatus} = storeToRefs(challengeStore);

const props = defineProps({
  id: Number,
  isDone: Boolean,
  title: String,
  goal: String
});

const modifiedIsDone = ref();
const modifiedTitleT = ref();
const modifiedGoalT = ref();

watch(() => modifyChallengeDialogBtnStatus.value, (newVal) => {
  if (true === newVal) {
    modifiedIsDone.value = props.isDone;
    modifiedTitleT.value = props.title;
    modifiedGoalT.value = props.goal;
  }
})

const $q = useQuasar();

const clickModifyBtn = async () => {
  const modifyChallengePayload = {
    isDone: modifiedIsDone.value,
    title: modifiedTitleT.value,
    goal: modifiedGoalT.value
  }
  await challengeStore.modifyChallenge(props.id, modifyChallengePayload);
  await challengeStore.toggleModifyChallengeBtn(false);
  await challengeStore.getChallengeList();

  // TODO: 특정 코드 받으면 notify 띄우기
  // $q.notify("notify");
}

const clickCancelBtn = () => {
  challengeStore.toggleModifyChallengeBtn(false);
}
</script>

<template>
  <q-dialog v-model="modifyChallengeDialogBtnStatus" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <div>Modify Challenge</div>
      </q-card-section>

      <q-card-section>
        <div>isDone</div>
        <div>
          <q-checkbox v-model="modifiedIsDone"/>
        </div>
        <div>title</div>
        <div>
          <q-input outlined v-model="modifiedTitleT" dense />
        </div>
        <div>goal</div>
        <div>
          <q-input outlined v-model="modifiedGoalT" dense />
        </div>
      </q-card-section>

      <q-card-section>
        <q-btn @click="clickModifyBtn">modify</q-btn>
        <q-btn @click="clickCancelBtn">cancel</q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
