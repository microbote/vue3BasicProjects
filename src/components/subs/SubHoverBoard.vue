<template>
  <div class="abody">
    <div class="container" id="container" ref="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, h, render } from 'vue'

const container = ref()
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

onMounted(() => {
  render(
    h(
      'div',
      { class: 'container' },
      Array.from({ length: SQUARES }).map((e, index) => {
        //console.log(e, index)
        return h('div', {
          class: 'square',
          id: index
        })
      })
    ),
    container.value
  )
  const squares = document.querySelectorAll('.square')
  console.log('square size:', squares.length)
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
  })
})

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
</script>

<style scoped>
.abody * {
  box-sizing: border-box;
}

.abody {
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

:deep(.container) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 400px;
}

:deep(.square) {
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  height: 16px;
  width: 16px;
  margin: 2px;
  transition: 2s ease;
}

:deep(.square:hover) {
  transition-duration: 0s;
}
</style>
