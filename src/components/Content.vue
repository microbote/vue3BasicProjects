<script setup lang="ts">
import ContentTab from '@/components/ContentTab.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

import { computed, shallowRef } from 'vue'
import { items } from './SubItems'
const props = defineProps(['tabId'])

//console.log('tabId', props.tabId, typeof props.tabId)
const id = computed(() => {
  if (typeof props.tabId == 'undefined' || isNaN(props.tabId) || props.tabId == '') {
    return items.value.length
  }
  var i = parseInt(props.tabId)
  return i
})
console.log('id:', id.value)
const emptyItem = { template: '' }
const item = computed(() => {
  if (id.value == -1 || id.value == items.value.length) {
    return {
      icon: DocumentationIcon,
      url: '',
      titleCn: '共有' + items.value.length + '个Demo',
      titleEn: 'Demos',
      component: shallowRef(emptyItem),
      category: ''
    }
  }
  return items.value[id.value]
})
</script>

<template>
  <div class="content-wrapper">
    <ContentTab>
      <template #icon> <item.icon /> </template>
      <template #heading>
        <a :href="item.url">{{ id }}.{{ item.category }}/{{ item.titleCn }}({{ item.titleEn }})</a>
      </template>
      <template #content>
        <item.component />
      </template>
    </ContentTab>
  </div>
</template>
<style scoped>
.content-wrapper {
  width: 100%;
  min-height: 800px;
  margin: 50px 60px;
  border: 1px solid yellowgreen;
  > h3 {
    font-size: 33px;
  }
}

a {
  text-decoration: none;
  color: #cdcdcd;
}
</style>
