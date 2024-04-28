<script setup lang="ts">
import SidePopMenu from './components/SidePopMenu.vue'
</script>

<template>
  <SidePopMenu />
  <RouterView />
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}

header {
  line-height: 1.5;
}

html,
body {
  background-color: #232323;
}

@media (min-width: 1024px) {
  #app {
    margin: 0;
    padding: 0;

    /* make it look decent enough */
    background-color: #232323;
    color: #cdcdcd;
    font-family: 'Avenir Next', 'Avenir', sans-serif;
    display: flex;
    width: 100%;
    height: 100%;
  }
}
</style>
