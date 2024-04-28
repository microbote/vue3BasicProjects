<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { getCurrentInstance } from 'vue'
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const applause = ref(null)
const boo = ref(null)
const gasp = ref(null)
const tada = ref(null)
const victory = ref(null)
const wrong = ref(null)
const currentInstance = getCurrentInstance()
const rs = {
  applause,
  boo,
  gasp,
  tada,
  victory,
  wrong
}
let btnClick
onMounted(() => {
  const setSrc = () => {
    sounds.forEach((sound) => {
      var path = '../../assets/sounds/' + sound + '.mp3'
      var url = new URL(path, import.meta.url).href
      const item = document.getElementById(sound)
      item.src = url
      console.log(item.src)
    })
  }
  setSrc()

  btnClick = (event) => {
    console.log('event', event)
    if (event) {
      var sound = event.target.textContent
      /*
      console.log(sound)
      var path = '../../assets/sounds/' + sound + '.mp3'
      var url = new URL(path, import.meta.url).href
      console.log(url)
      console.log(currentInstance.ctx.$refs)
      console.log(rs[sound])
      */
      const item = document.getElementById(sound)
      //item.src = url
      stopSongs()
      item.play()
      //rs[sound].src.value = url
      //console.log(rs[sound].src.value)

      //nextTick(() => {
      //  rs[sound].value?.play()
      //})
    }
  }

  function stopSongs() {
    sounds.forEach((sound) => {
      const item = document.getElementById(sound)
      item.pause()
      item.currentTime = 0
      //rs[sound].value.pause()
      //rs[sound].value.currentTime = 0
    })
  }
})
</script>

<template>
  <div class="abody">
    <audio v-for="item in sounds" :key="item" ref="item" :id="item"></audio>

    <div id="buttons">
      <button v-for="item in sounds" :key="item" class="btn" @click="btnClick">
        {{ item }}
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

* {
  box-sizing: border-box;
}

.abody {
  background-color: rgb(161, 100, 223);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.btn {
  background-color: rebeccapurple;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  font-family: inherit;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}

.btn:focus {
  outline: none;
}
</style>
