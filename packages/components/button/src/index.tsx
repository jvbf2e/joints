/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-08-27 17:57:50
 * @LastEditTime: 2021-08-30 14:55:27
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\packages\components\button\src\index.tsx
 */
import { computed, defineComponent, reactive, ref } from 'vue'

import type { Ref } from 'vue'
import type { Loading } from '../../../utils/types'

import buttonProps from './types'
import { getPrefixCls } from '../../../utils/config'

const props = buttonProps()

export default defineComponent({
  name: 'JButton',
  props,
  setup(props) {
    const innerLoading: Ref<Loading> = ref(false)

    const classes = computed(() => {
      const { type, shape, size, block, danger, prefixCls } = props
      const pre = getPrefixCls('btn', prefixCls)
      let sizeCls = ''
      switch (size) {
        case 'large':
          sizeCls = 'lg'
          break
        case 'small':
          sizeCls = 'sm'
          break
        default:
          break
      }
      return {
        [`${pre}`]: true,
        [`${pre}-${type}`]: type,
        [`${pre}-${shape}`]: shape,
        [`${pre}-${sizeCls}`]: sizeCls,
        [`${pre}-loading`]: innerLoading.value,
        [`${pre}-block`]: block,
        [`${pre}-dangerous`]: !!danger,
      }
    })

    const handle = reactive({
      click: () => {},
    })

    return () => {
      const { title, disabled } = props

      const buttonProps = {
        title,
        disabled,
        class: [classes.value],
        onClick: handle.click,
      }

      return <button {...buttonProps}>button</button>
    }
  },
})
