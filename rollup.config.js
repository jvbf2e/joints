/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/tusktalk
 * @Date: 2021-08-27 17:39:59
 * @LastEditTime: 2021-08-30 10:28:32
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\rollup.config.js
 */
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'

import path from 'path'

export default [
  {
    input: 'packages/index.ts',
    output: {
      file: 'lib/index.full.js', // 导出文件
      format: 'umd', // 打包文件支持的形式
      name: 'Joints',
    },
    plugins: [
      css(),
      vue({
        target: 'browser',
        // css: false,
      }),
      nodeResolve(),
      esbuild(),
    ],
  },
]
