<template>
  <div class="content">
    <div class="img">
      <img
        :src="require(`@/assets/images/speakers/${imgSrc}`)"
        :alt="`image of speaker: ${speaker}`"
      />
      <div class="background"></div>
    </div>
    <p class="speaker">{{ speaker }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  imgSrc: { type: String, required: true },
  speaker: { type: String, required: true },
  color: { type: String, required: true },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";

.content {
  background-color: $second-background;
  border-radius: 5px;
  box-shadow: 2px 4px 5px 4px #00000040;

  width: 400px;
  margin-top: 2rem;

  .img {
    position: relative;
    display: flex;
    justify-content: center;

    img {
      display: inline-block;
      border-radius: 50%;
      width: 250px;
      height: 250px;
      margin: 1rem;

      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;

      position: relative;
      z-index: 2;
    }

    .background {
      background-color: v-bind(color);

      width: 250px;
      height: 250px;
      border-radius: 50%;
      margin: 1rem;

      position: absolute;
      top: 5px;
      left: calc(50% - 15px);

      transform: translate(-50%, 0);

      z-index: 1;
    }
  }

  .speaker {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin: 1rem;
  }

  :slotted(p) {
    font-size: 14px;
    margin: 1rem;
  }
}
</style>
