/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-08-27 18:25:27
 * @LastEditTime: 2021-08-30 10:44:09
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\packages\utils\vue.type.ts
 */
import { createTypes } from 'vue-types'

import type { CSSProperties } from 'vue'
import type { VueTypesInterface, VueTypeValidableDef } from 'vue-types'
import type { VueNode } from './types'

const PropTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  array: undefined,
  object: undefined,
  integer: undefined,
})

PropTypes.extend([
  {
    name: 'looseBool',
    getter: true,
    type: Boolean,
    default: undefined,
  },
  {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined,
  },
  {
    name: 'VNodeChild',
    getter: true,
    type: null,
  },
])

export default PropTypes as VueTypesInterface & {
  readonly looseBool: VueTypeValidableDef<boolean>
  readonly style: VueTypeValidableDef<CSSProperties>
  readonly VNodeChild: VueTypeValidableDef<VueNode>
}
