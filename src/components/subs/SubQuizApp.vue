<template>
  <div class="abody">
    <div class="quiz-container" id="quiz" ref="quiz">
      <div class="quiz-header">
        <h2 id="question" ref="question">Question text</h2>
        <ul>
          <li>
            <input type="radio" name="answer" id="a" class="answer" />
            <label for="a" id="a_text" ref="a_text">Question</label>
          </li>

          <li>
            <input type="radio" name="answer" id="b" class="answer" />
            <label for="b" id="b_text" ref="b_text">Question</label>
          </li>

          <li>
            <input type="radio" name="answer" id="c" class="answer" />
            <label for="c" id="c_text" ref="c_text">Question</label>
          </li>

          <li>
            <input type="radio" name="answer" id="d" class="answer" />
            <label for="d" id="d_text" ref="d_text">Question</label>
          </li>
        </ul>
      </div>
      <button id="submit" ref="submitBtn" @click="submitBtnClick">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd'
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b'
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a'
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b'
  }
]

const quiz = ref()
const answerEls = ref()

const question = ref()
const a_text = ref()
const b_text = ref()
const c_text = ref()
const d_text = ref()
const submitBtn = ref()

let currentQuiz = 0
let score = 0

onMounted(() => {
  answerEls.value = document.querySelectorAll('.answer')
  loadQuiz()
})

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  question.value.innerText = currentQuizData.question
  a_text.value.innerText = currentQuizData.a
  b_text.value.innerText = currentQuizData.b
  c_text.value.innerText = currentQuizData.c
  d_text.value.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.value.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.value.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

const submitBtnClick = () => {
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.value.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

.abody * {
  box-sizing: border-box;
}

.abody {
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.quiz-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
  width: 600px;
  overflow: hidden;
}

.quiz-header {
  padding: 4rem;
}

:deep(h2) {
  padding: 1rem;
  text-align: center;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.2rem;
  margin: 1rem 0;
}

ul li label {
  cursor: pointer;
}

:deep(button) {
  background-color: #8e44ad;
  color: #fff;
  border: none;
  display: block;
  width: 100%;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: inherit;
  padding: 1.3rem;
}

button:hover {
  background-color: #732d91;
}

button:focus {
  outline: none;
  background-color: #5e3370;
}
</style>
