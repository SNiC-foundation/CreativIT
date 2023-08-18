<template>
  <Navbar />
  <img
    src="./assets/images/lines/menu-hor.svg"
    alt=""
    class="horizontal-background-line"
  />
  <img
    src="./assets/images/lines/back-ver.svg"
    alt=""
    class="vertical-background-line"
  />
  <router-view />
</template>

<script setup lang="ts">
import Navbar from "./components/NavbarComponent.vue";
</script>

<style scoped lang="scss">
.horizontal-background-line {
  position: absolute;
  top: 6rem;
  left: -2rem;
  width: 100%;
  height: 95px;

  padding: 0;
  margin: 0;

  z-index: -1;
}

.vertical-background-line {
  z-index: -1;

  position: absolute;
  left: -10rem;
  top: 0;

  height: 100%;
  width: auto;

  overflow-y: hidden;
}
</style>
