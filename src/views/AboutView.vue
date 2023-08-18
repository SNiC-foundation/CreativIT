<template>
  <infoItem :title="'SNiC'" :line="'purple_left'">
    <p>
      SNiC is an acronym for Stichting Nationaal informatica Congres (Foundation
      National Computer Science Conference). This organisation was established
      in 2004 with the purpose of stimulating the interest in IT knowledge, IT
      applications and the business side of IT. Every year, a conference with an
      IT related subject is organised. For each conference one study association
      is chosen to take care of the organsisation.
    </p>
    <p>
      Visitors are enthusiastic Computer Science and Artificial Intelligence
      bachelor and master students from all over the country. Over the past
      years the conference has grown considerably. Where in 2017 the conference
      was visited by 450 students, we expect around 775 visitors in 2022.
      Various talks will be held at the conference by speakers from both the
      business world and the academic world. The students are challenged to dive
      into a specific topic from different perspectives. We want to inspire them
      and invite them to think further than their current views. This year's
      SNiC is organized by students from GEWIS.
    </p>
  </infoItem>
  <infoItem :title="'Committee'" :line="'purple2_right'">
    <img src="@/assets/images/committee.jpg" alt="Image of the committee" />
  </infoItem>
</template>

<script setup lang="ts">
import infoItem from "@/components/InfoItemComponent.vue";
</script>
