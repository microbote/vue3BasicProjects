<template>
  <div class="abody">
    <h1>todos</h1>
    <form id="form" ref="form" @submit="formSubmit">
      <input
        type="text"
        class="input"
        id="input"
        ref="input"
        placeholder="Enter your todo"
        autocomplete="off"
      />

      <ul class="todos" id="todos" ref="todosUL"></ul>
    </form>
    <small
      >Left click to toggle completed. <br />
      Right click to delete todo</small
    >
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const form = ref()
const input = ref()
const todosUL = ref()

onMounted(() => {
  const todos = JSON.parse(localStorage.getItem('todos'))
  if (todos) {
    todos.forEach((todo) => addTodo(todo))
  }
})

const formSubmit = (e) => {
  e.preventDefault()
  addTodo()
}

function addTodo(todo) {
  let todoText = input.value.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    })

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      todoEl.remove()
      updateLS()
    })

    todosUL.value.appendChild(todoEl)

    input.value.value = ''

    updateLS()
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll('.todos li')

  const todos = []

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

.abody * {
  box-sizing: border-box;
}

.abody {
  background-color: #f5f5f5;
  color: #444;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

h1 {
  color: rgb(179, 131, 226);
  font-size: 10rem;
  text-align: center;
  opacity: 0.4;
}

form {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 400px;
}

.input {
  border: none;
  color: #444;
  font-size: 2rem;
  padding: 1rem 2rem;
  display: block;
  width: 100%;
}

.input::placeholder {
  color: #d5d5d5;
}

.input:focus {
  outline-color: rgb(179, 131, 226);
}

.todos {
  background-color: #fff;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

:deep(.todos li) {
  border-top: 1px solid #e5e5e5;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem 2rem;
}

:deep(.todos li.completed) {
  color: #b6b6b6;
  text-decoration: line-through;
}

small {
  color: #b5b5b5;
  margin-top: 3rem;
  text-align: center;
}
</style>
