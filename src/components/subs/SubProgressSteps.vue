<template>
  <div class="abody">
    <div class="container">
      <div class="progress-container">
        <div class="progress" id="progress" ref="progress"></div>
        <div class="circle active">1</div>
        <div class="circle">2</div>
        <div class="circle">3</div>
        <div class="circle">4</div>
      </div>

      <button class="btn" id="prev" ref="prev" @click="prevClick" disabled>Prev</button>
      <button class="btn" id="next" ref="next" @click="nextClick">Next</button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const progress = ref()
const prev = ref()
const next = ref()
const circles = ref()

let currentActive = 1
onMounted(() => {
  circles.value = document.querySelectorAll('.circle')
})

const nextClick = () => {
  currentActive++

  if (currentActive > circles.value.length) {
    currentActive = circles.value.length
  }

  update()
}

const prevClick = () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
}

function update() {
  circles.value.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.value.style.width = ((actives.length - 1) / (circles.value.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.value.disabled = true
  } else if (currentActive === circles.value.length) {
    next.value.disabled = true
  } else {
    prev.value.disabled = false
    next.value.disabled = false
  }
}
const theme = {
  lineBorderFill: '#3498db',
  lineBorderEmpty: '#383838'
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.abody * {
  box-sizing: border-box;
}

.abody {
  background-color: #f1f1f1;
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  text-align: center;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

.progress-container::before {
  content: '';
  background-color: v-bind('theme.lineBorderEmpty');
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: 0;
}

.progress {
  background-color: v-bind('theme.lineBorderFill');
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: 0;
  transition: 0.4s ease;
}

.circle {
  background-color: #f1f1f1;
  color: #e2e2e2;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid v-bind('theme.lineBorderEmpty');
  transition: 0.4s ease;
  z-index: 1;
}

.circle.active {
  border-color: v-bind('theme.lineBorderFill');
}

.btn {
  background-color: v-bind('theme.lineBorderFill');
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}

.btn:disabled {
  background-color: v-bind('theme.lineBorderEmpty');
  cursor: not-allowed;
}
</style>
