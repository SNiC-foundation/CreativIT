<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="require(`@/assets/images/${data.image}`)" alt="" />
      <p v-for="alinea in data.description" :key="alinea">{{ alinea }}</p>
      <a :href="data.link">Go to website</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["closeModal"]);
defineProps(["data"]);

function closeModal() {
  emit("closeModal");
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";
.modal {
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */

  display: grid;
  justify-items: center;
  align-items: center;
}

/* Modal Content/Box */
.modal-content {
  background-color: $background;
  padding: 20px;
  border: 1px solid #888;
  width: 75%; /* Could be more or less, depending on screen size */
  position: relative;

  display: grid;
  justify-items: center;
  max-width: 650px;
}

p {
  margin-bottom: 2rem;
  font-size: 14px;
}

img {
  width: 75%;
}

a {
  text-decoration: none;
  color: $second-background;
  padding: 0.5rem 1rem;
  background-color: $primary;
  box-shadow: 2px 4px 5px 4px #00000040;
  border-radius: 10px;

  &:hover {
    color: $primary;
    background-color: $background;
  }
}

.close {
  color: $primary;
  position: absolute;
  right: 1rem;
  top: 5px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: $background;
  text-decoration: none;
  cursor: pointer;
}
</style>
