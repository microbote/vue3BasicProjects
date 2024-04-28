<template>
  <div class="abody">
    <div class="counter-container">
      <i class="fab fa-twitter fa-3x"></i>
      <div class="counter" data-target="12000"></div>
      <span>Twitter Followers</span>
    </div>

    <div class="counter-container">
      <i class="fab fa-youtube fa-3x"></i>
      <div class="counter" data-target="5000"></div>
      <span>YouTube Subscribers</span>
    </div>

    <div class="counter-container">
      <i class="fab fa-facebook fa-3x"></i>
      <div class="counter" data-target="7500"></div>
      <span>Facebook Fans</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const counters = document.querySelectorAll('.counter')

  counters.forEach((counter) => {
    counter.innerText = '0'

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target')
      const c = +counter.innerText

      const increment = target / 1000

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`
        setTimeout(updateCounter, 100)
      } else {
        counter.innerText = target
      }
    }

    updateCounter()
  })
})
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css);
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

.abody * {
  box-sizing: border-box;
}

.abody {
  background-color: #8e44ad;
  color: #fff;
  font-family: 'Roboto Mono', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.counter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 30px 50px;
}

.counter {
  font-size: 60px;
  margin-top: 10px;
}

@media (max-width: 580px) {
  body {
    flex-direction: column;
  }
}
</style>
