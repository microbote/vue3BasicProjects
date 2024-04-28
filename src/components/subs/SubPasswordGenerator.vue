<template>
  <div class="abody">
    <div class="container">
      <h2>Password Generator</h2>
      <div class="result-container">
        <span id="result" ref="resultEl"></span>
        <button class="btn" id="clipboard" ref="clipboardEl" @click="clipboardClick">
          <i class="far fa-clipboard"></i>
        </button>
      </div>
      <div class="settings">
        <div class="setting">
          <label>Password Length</label>
          <input type="number" id="length" ref="lengthEl" min="4" max="20" value="20" />
        </div>
        <div class="setting">
          <label>Include uppercase letters</label>
          <input type="checkbox" id="uppercase" ref="uppercaseEl" checked />
        </div>
        <div class="setting">
          <label>Include lowercase letters</label>
          <input type="checkbox" id="lowercase" ref="lowercaseEl" checked />
        </div>
        <div class="setting">
          <label>Include numbers</label>
          <input type="checkbox" id="numbers" ref="numbersEl" checked />
        </div>
        <div class="setting">
          <label>Include symbols</label>
          <input type="checkbox" id="symbols" ref="symbolsEl" checked />
        </div>
      </div>

      <button class="btn btn-large" id="generate" ref="generateEl" @click="generateClick">
        Generate Password
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const resultEl = ref()
const lengthEl = ref()
const uppercaseEl = ref()
const lowercaseEl = ref()
const numbersEl = ref()
const symbolsEl = ref()
const generateEl = ref()
const clipboardEl = ref()

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

onMounted(() => {})
const clipboardClick = () => {
  const password = resultEl?.value.innerText
  if (!password) {
    return
  }
  navigator.clipboard.writeText(password)
  alert('Password copied to clipboard!')
}

const generateClick = () => {
  const length = +lengthEl.value.value
  const hasLower = lowercaseEl.value.checked
  const hasUpper = uppercaseEl.value.checked
  const hasNumber = numbersEl.value.checked
  const hasSymbol = symbolsEl.value.checked

  resultEl.value.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  )

  if (typesCount === 0) {
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }

  const finalPassword = generatedPassword.slice(0, length)

  return finalPassword
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css);

@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.abody * {
  box-sizing: border-box;
}

.abody {
  background-color: #3b3b98;
  color: #fff;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.abody h2 {
  margin: 10px 0 20px;
  text-align: center;
}

.container {
  background-color: #23235b;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
  padding: 20px;
  width: 350px;
  max-width: 100%;
}

.result-container {
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 12px 10px;
  height: 50px;
  width: 100%;
}

.result-container #result {
  word-wrap: break-word;
  max-width: calc(100% - 40px);
  overflow-y: scroll;
  height: 100%;
}

#result::-webkit-scrollbar {
  width: 1rem;
}

.result-container .btn {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  font-size: 20px;
}

.btn {
  border: none;
  background-color: #3b3b98;
  color: #fff;
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
}

.btn-large {
  display: block;
  width: 100%;
}

.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}
</style>
