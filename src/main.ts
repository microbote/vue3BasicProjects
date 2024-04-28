import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './routes'

const app = createApp(App)

setupRouter(app)

app.mount('#app')
