/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-08-29 17:24:36
 * @LastEditTime: 2021-08-30 14:42:27
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  root: './examples',
  resolve: {
    alias: {
      'joints/': pathResolve('/packages/'),
      '@/': pathResolve('/packages/'),
    },
  },
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
