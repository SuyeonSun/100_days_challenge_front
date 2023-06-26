<script setup>
import AddChallengeDialog from "components/challenge/AddChallengeDialog";
import { useChallengeStore } from "stores/challenge-store";

const challengeStore = useChallengeStore();

const clickAddChallengeBtn = () => {
  challengeStore.toggleAddChallengeBtn(true);
}
</script>

<template>
  <div>
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>Quasar Framework</q-toolbar-title>
          <q-btn flat round dense icon="add" @click="clickAddChallengeBtn"/>
          <add-challenge-dialog></add-challenge-dialog>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
