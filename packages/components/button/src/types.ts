/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-08-27 17:58:07
 * @LastEditTime: 2021-08-30 11:34:41
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\packages\components\button\src\types.ts
 */
import { tuple } from '../../../utils/types'

import type { SizeType } from '../../../utils/types'
import type { PropType } from 'vue'
import PropTypes from '../../../utils/vue-type'

/**
 * 按钮类型：
 *   1. default
 *   2. primary
 *   3. dashed
 *   4. text
 *   5. link
 */
const ButtonTypes = tuple(
  'default',
  'primary',
  'dashed',
  'text',
  'link',
  'ghost',
)
export type ButtonType = typeof ButtonTypes[number]

/**
 * 按钮形态：
 *   1. default
 *   1. primary
 *   3. dashed
 *   4. text
 *   5. link
 */
const ButtonShapes = tuple('circle', 'round')
export type ButtonShape = typeof ButtonShapes[number]

const ButtonHTMLTypes = tuple('submit', 'button', 'reset')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

const buttonProps = () => ({
  prefixCls: PropTypes.string,
  icon: PropTypes.VNodeChild,
  title: PropTypes.string,
  href: PropTypes.string,
  // 按钮类型
  type: PropTypes.oneOf(ButtonTypes),
  // 按钮形态
  shape: PropTypes.oneOf(ButtonShapes),
  size: {
    type: String as PropType<SizeType>,
  },
  block: PropTypes.looseBool,
  danger: PropTypes.looseBool,
  target: PropTypes.string,
  // 按钮状态
  loading: {
    type: [Boolean, Object],
    default: (): boolean | { delay?: number } => false,
  },
  disabled: PropTypes.looseBool,
  // 原属性
  htmlType: PropTypes.oneOf(ButtonHTMLTypes).def('button'),
  // 事件
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
  },
})

export default buttonProps
