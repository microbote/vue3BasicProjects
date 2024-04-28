<script setup lang="ts">
import { ref } from 'vue'
import { items } from './SubItems'
const toggle = ref(false)
console.log('items size:', items.value.length)
</script>

<template>
  <nav role="navigation">
    <div id="menuToggle">
      <div class="menuShow">
        <input
          type="checkbox"
          @click="
            () => {
              toggle = !toggle
            }
          "
        />
        <span class="s1"></span>
        <span class="s2"></span>
        <span class="s3"></span>
      </div>
      <ul id="menu" :class="{ show: toggle, noshow: !toggle }">
        <router-link v-for="(item, index) in items" :key="index" :index="index" :to="`/${index}`">
          <li>{{ index }} {{ item.titleCn }}</li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/*from https://codepen.io/erikterwan/pen/EVzeRP */
#menuToggle {
  display: block;
  position: relative;
  top: 65px;
  left: 50px;
  z-index: 99;
  -webkit-user-select: none;
  user-select: none;
}

.menuShow input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 100;
  -webkit-touch-callout: none;
}

.menuShow span {
  display: block;
  width: 33px;
  height: 4px;
  z-index: 99;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  transform-origin: 4px 0px;
  transition:
    transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease;
}

/*原来用第几个第几个span来选择, 次序很怪异, 用class更明确*/
.menuShow .s1 {
  background: burlywood;
  transform-origin: 0% 0%;
}

.menuShow .s2 {
  background-color: yellowgreen;
}

.menuShow .s3 {
  background-color: skyblue;
  transform-origin: 0% 100%;
}

/*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
.menuShow input:checked ~ .s1 {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  /*background: #232323;*/
}
.menuShow input:checked ~ .s2 {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
/*
 * Ohyeah and the last one should go the other direction
 */
.menuShow input:checked ~ .s3 {
  transform: rotate(-45deg) translate(0px, -1px);
}

#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}
#menuToggle a:hover,
#menuToggle a.router-link-active {
  color: tomato;
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: absolute;
  width: 150px;
  margin: -100px 0 0 -50px;
  padding: 10px;
  padding-top: 125px;

  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  z-index: 98;

  transform-origin: 0% 0%;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  height: 1000px;
  overflow-y: scroll;
}
#menu li {
  padding: 10px 0;
  font-size: 18px;
}
/*
 * And let's slide it in from the left
 */
.show {
  transform: none;
}
.noshow {
  transform: translate(-100%, 0);
}
/*原来是这样, 但我在input上加了一层封装后, ul与input非同父层级, 不可用~了*/
#menuToggle input:checked ~ ul {
  transform: none;
}
</style>
