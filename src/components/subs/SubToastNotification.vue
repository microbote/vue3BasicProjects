<template>
  <div class="abody">
    <div id="toasts" ref="toasts"></div>

    <button class="btn" id="button" ref="button" @click="() => createNotification()">
      Show Notification
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const button = ref()
const toasts = ref()

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four']

const types = ['info', 'success', 'error']

function createNotification(message = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message : getRandomMessage()

  toasts.value.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

.abody * {
  box-sizing: border-box;
}

.abody {
  background-color: rebeccapurple;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.btn {
  background-color: #ffffff;
  color: rebeccapurple;
  font-family: inherit;
  font-weight: bold;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

#toasts {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

:deep(.toast) {
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 0.5rem;
}
:deep(.toast.info) {
  color: rebeccapurple;
}
:deep(.toast.success) {
  color: green;
}
:deep(.toast.error) {
  color: red;
}
</style>
