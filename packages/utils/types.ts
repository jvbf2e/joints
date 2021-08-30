/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-08-27 18:06:04
 * @LastEditTime: 2021-08-30 11:29:24
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\packages\utils\types.ts
 */
import type { Plugin, VNodeChild } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type VueNode = VNodeChild | JSX.Element

export type SizeType = 'small' | 'middle' | 'large' | undefined

export type Loading = boolean | number

export const tuple = <T extends string[]>(...args: T) => args

export const tupleNum = <T extends number[]>(...args: T) => args
