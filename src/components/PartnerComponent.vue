<template>
  <div class="content">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";

.content {
  background-color: $second-background;
  border-radius: 5px;
  box-shadow: 4px 5px 4px #0000;

  padding: 1rem;
  cursor: pointer;

  :slotted(img) {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
}
</style>
