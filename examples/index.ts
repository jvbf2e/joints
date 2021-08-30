/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-08-29 15:03:28
 * @LastEditTime: 2021-08-30 14:38:16
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\examples\index.ts
 */
import '@babel/polyfill'
import '../packages/components/style'
import { createApp, version } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import joints from '../packages/components/index'

// eslint-disable-next-line no-console
console.log('Vue version: ', version)

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

const app = createApp(App)
app.use(router).use(joints).mount('#app')
