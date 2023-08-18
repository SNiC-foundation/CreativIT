<template>
  <PartnerModal
    v-if="displayModal"
    :data="modalData"
    @closeModal="closeModal"
  ></PartnerModal>
  <infoItem :title="'Platinum Partner'" :header="true" :line="'purple_right'" />

  <div class="platinum">
    <PartnerItem
      style="margin-bottom: 4rem"
      @click="openModal(partnerData.platinum)"
      ><img
        :src="require(`@/assets/images/${partnerData.platinum.image}`)"
        :alt="`Image of partner ${partnerData.platinum.name}`"
    /></PartnerItem>
  </div>

  <infoItem :title="'Gold Partners'" :header="true" :line="'purple2_right'" />
  <div class="gold">
    <PartnerItem
      v-for="goldPartner in partnerData.gold"
      :key="goldPartner.name"
      @click="openModal(goldPartner)"
      ><img
        :src="require(`@/assets/images/${goldPartner.image}`)"
        :alt="`Image of partner ${goldPartner.name}`"
    /></PartnerItem>
  </div>
  <infoItem :title="'Silver Partners'" :header="true" :line="'purple_right'" />
  <div class="silver">
    <PartnerItem
      v-for="silverPartner in partnerData.silver"
      :key="silverPartner.name"
      @click="openModal(silverPartner, false)"
      ><img
        :src="require(`@/assets/images/${silverPartner.image}`)"
        :alt="`Image of partner ${silverPartner.name}`"
    /></PartnerItem>
  </div>
</template>

<script setup lang="ts">
import PartnerModal from "@/components/PartnerModalComponent.vue";
import infoItem from "@/components/InfoItemComponent.vue";
import PartnerItem from "@/components/PartnerComponent.vue";
import partnerData from "@/utils/partners.json";
import { ref } from "vue";

const displayModal = ref<boolean>(false);
const modalData = ref({
  image: "",
  description: [],
  link: "",
});

function openModal(input: any, showDescription = true) {
  modalData.value.image = input.image;
  modalData.value.description = showDescription ? input.description : [];
  modalData.value.link = input.link;

  displayModal.value = true;
}

function closeModal() {
  displayModal.value = false;
}
</script>

<style scoped lang="scss">
.platinum {
  width: 75%;
  margin: 0 auto;
}

.gold {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 4rem;
}

.silver {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 4rem;
}

@media screen and (max-width: 768px) {
  .silver {
    margin-bottom: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .gold {
    margin-bottom: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
