<template>
  <div class="content" :class="[header ? 'margin1' : 'margin4']">
    <div class="title">
      <img
        v-if="line"
        :src="require(`@/assets/images/lines/${line}.svg`)"
        alt=""
      />
      <h1 v-if="line">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  title: { type: String },
  header: { type: Boolean, default: false },
  line: { type: String, default: null },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";

.margin4 {
  margin-bottom: 4rem;
}

.margin1 {
  margin-bottom: 1rem;
}

.content {
  background-color: $second-background;
  border-radius: 5px;
  box-shadow: 2px 4px 5px 4px #00000040;

  padding: 1rem;

  .title {
    position: relative;

    img {
      position: absolute;
      left: 0;
      top: -1rem;
      width: 100%;
      height: 115px;

      z-index: 1;
    }

    h1 {
      position: relative;
      z-index: 2;

      text-align: center;
      font-size: 54px;

      margin-bottom: 1rem;
      padding-bottom: 1rem;
    }
  }

  :slotted(p) {
    font-size: 14px;
    margin: 1rem;
  }

  :slotted(img) {
    display: block;
    width: 75%;
    height: auto;
    margin: 1rem auto 0;
  }
}

@media screen and (max-width: 768px) {
  .content {
    .title {
      h1 {
        font-size: 39px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .content {
    .title {
      h1 {
        font-size: 26px;
      }
    }
  }
}
</style>
