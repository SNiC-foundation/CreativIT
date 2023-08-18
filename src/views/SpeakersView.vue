<template>
  <div class="speakers">
    <h1 v-if="speakersData.length == 0" style="margin-top: 4rem">
      Speakers will be announced shortly
    </h1>
    <speakerCard
      v-for="(speaker, index) in speakersData"
      :key="speaker.name"
      :img-src="speaker.image"
      :speaker="speaker.name"
      :color="index % 2 == 0 ? purple : purple2"
      ><p v-for="alinea in speaker.description" :key="alinea">
        {{ alinea }}
      </p></speakerCard
    >
  </div>
</template>

<script setup lang="ts">
import speakerCard from "@/components/SpeakerCardComponent.vue";
import speakersData from "@/utils/speakers.json";

const purple = "#483291";
const purple2 = "#91288D";
</script>

<style scoped lang="scss">
.speakers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
}
</style>
