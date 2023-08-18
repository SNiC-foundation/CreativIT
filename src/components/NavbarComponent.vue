<template>
  <nav>
    <ul class="main-nav">
      <li class="logo">
        <routerLink to="/">
          <img src="@/assets/images/logo.svg" alt="" />
        </routerLink>
        <span @click="toggleNav">{{ navOpen ? "x" : "&#8801;" }}</span>
      </li>
      <li>
        <routerLink
          to="/speakers"
          :class="{ open: navOpen }"
          @click="toggleNav"
          exact-active-class="selected-item"
          >Speakers</routerLink
        >
      </li>
      <li>
        <routerLink
          to="/partners"
          :class="{ open: navOpen }"
          @click="toggleNav"
          exact-active-class="selected-item"
          >Partners</routerLink
        >
      </li>
      <li>
        <routerLink
          to="/program"
          :class="{ open: navOpen }"
          @click="toggleNav"
          exact-active-class="selected-item"
          >Program</routerLink
        >
      </li>
      <li>
        <routerLink
          to="/about"
          :class="{ open: navOpen }"
          @click="toggleNav"
          exact-active-class="selected-item"
          >About</routerLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const navOpen = ref<boolean>(false);

function toggleNav() {
  navOpen.value = !navOpen.value;
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";

.main-nav {
  display: -webkit-flex;
  display: flex;
  list-style-type: none;
  background-color: $second-background;
  border-radius: 5px;
  box-shadow: 2px 4px 5px 4px #00000040;

  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .selected-item {
    &::after {
      display: block;
    }
  }
}
.main-nav li:first-child {
  margin-right: auto;
}
.main-nav a {
  margin: 10px;
  color: #fff;
  display: block;
  padding: 15px;
  text-decoration: none;
  font-size: 20px;

  position: relative;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: -0.75rem;
    left: 10px;
    width: 90%;
    height: 50px;
    background-image: url("../assets/images/lines/menuLine.svg");
    background-repeat: no-repeat;
    background-position: center;

    display: none;
  }
}
.main-nav .logo {
  span {
    display: none;
    font-size: 24px;

    &:hover {
      color: $background;
    }
  }

  img {
    height: 12rem;
    width: auto;

    position: absolute;
    left: -3rem;
    top: -3.75rem;
    z-index: 3;
  }
}

@media (max-width: 925px) {
  .main-nav {
    display: block;

    a {
      text-align: center;
      border: 1px black solid;
      margin: 0;
      border-radius: 5px;

      &::after {
        bottom: -0.75rem;
        left: calc(50% - 3.5ch);
        width: 8ch;
        height: 50px;
      }
    }

    a {
      display: none;
    }

    .open {
      display: block;
    }
  }
  .main-nav .logo {
    display: flex;
    height: 4rem;

    a {
      display: block;
      border: none;
    }

    img {
      height: 8rem;
      width: auto;

      left: -2.5rem;
      top: 50%;

      transform: translate(0, -50%);
    }

    span {
      display: block;
      position: absolute;
      right: 2rem;
      top: 2rem;
      cursor: pointer;

      transform: translate(0, -50%);
    }
  }
}
</style>
