import Content from './components/Content.vue'
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/:tabId*',
    component: Content,
    props: true
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
