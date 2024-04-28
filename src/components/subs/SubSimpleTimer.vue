<template>
  <div class="abody, bg-gray-700 flex justify-center items-center min-h-screen">
    <div class="bg-gray-900 p-16 rounded-2xl shadow w-full max-w-sm">
      <h1 class="text-4xl text-center text-white">Timer</h1>

      <!-- Create the circle -->
      <div
        id="conic"
        class="bg-conic flex items-center justify-center w-60 h-60 mx-auto my-10 rounded-full relative"
      >
        <p id="timer" ref="timerEl" class="text-blue-200 relative text-5xl z-10">00:00</p>

        <!-- Create the inner cirlce and line -->
        <div
          class="w-[calc(100%-4px)] aspect-square bg-gray-800 rounded-full absolute inset-[2px]"
        ></div>
        <!-- Create the hand/marker -->
        <div class="hand h-1/2 absolute top-0">
          <span class="w-2 h-2 bg-white rounded-full absolute -top-1 -left-1"></span>
        </div>
      </div>

      <div class="flex justify-center gap-6">
        <button
          id="reset"
          ref="resetBtn"
          @click="resetAll"
          class="flex justify-center items-center w-10 h-10 bg-blue-300 rounded-full"
        >
          <i class="fas fa-refresh"></i>
        </button>

        <button
          id="play"
          ref="playBtn"
          @click="playAction"
          class="flex justify-center items-center w-10 h-10 bg-blue-300 rounded-full group"
        >
          <i class="fas fa-play"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const resetBtn = ref()
const playBtn = ref()
const timerEl = ref()
//const root = ref() //document.querySelector(':root');

// Initial setup
const totalSeconds = 60
let playing = false
let currentSeconds = totalSeconds
let timerInterval = 1000
const theme = ref({
  degrees: '0deg'
})

onMounted(() => {
  const tailwind = document.createElement('script')
  tailwind.setAttribute('src', 'https://cdn.tailwindcss.com')
  document.head.appendChild(tailwind)

  timerEl.value.innerText = formatTime(totalSeconds)
  timerInterval = setInterval(run, timerInterval)
})

const playAction = () => {
  playing = !playing
  playBtn.value.classList.toggle('play')
  playBtn.value.classList.toggle('bg-green-500') // Toggle the color class
  const playIcon = playBtn.value.querySelector('i')
  playIcon.classList.toggle('fa-play') // Toggle the play icon
  playIcon.classList.toggle('fa-pause') // Toggle the pause icon
}

// Run the timer
function run() {
  if (playing) {
    currentSeconds -= 1
    if (currentSeconds <= 0) {
      clearInterval(timerInterval)
      resetAll()
    }

    timerEl.value.innerText = formatTime(currentSeconds)
    //root.value.style.setProperty('--degrees', calcDeg())
    theme.value.degrees = calcDeg()
  }
}

// Format the time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const newSeconds = seconds % 60

  return `${minutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
}

// Calculate the degrees
function calcDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`
}

// Reset all the values
function resetAll() {
  playing = false
  playBtn.value.classList.remove('play')
  playBtn.value.classList.remove('bg-green-500') // Remove the color class
  const playIcon = playBtn.value.querySelector('i')
  playIcon.classList.remove('fa-pause') // Remove the pause icon
  playIcon.classList.add('fa-play') // Add the play icon
  currentSeconds = totalSeconds
  timerEl.value.innerText = formatTime(totalSeconds)
  //root.value.style.setProperty('--degrees', '0deg')
  theme.value.degrees = '0deg'
}
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

.bg-conic {
  background: conic-gradient(
    transparent 0deg,
    transparent v-bind('theme.degrees'),
    white v-bind('theme.degrees'),
    white 360deg
  );
}

.hand {
  transform-origin: bottom center;
  transform: rotate(v-bind('theme.degrees'));
}
</style>
