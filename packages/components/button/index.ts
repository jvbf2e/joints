/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/tusktalk
 * @Date: 2021-08-27 17:57:39
 * @LastEditTime: 2021-08-29 17:18:12
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\packages\components\button\index.ts
 */
import type { App } from 'vue'

import { SFCWithInstall } from '../../utils/types'

import Button from './src'
import ButtonProps from './src/types'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

const _Button = Button as any as SFCWithInstall<typeof Button>

export default _Button
export const JButton = _Button
export const JButtonProps = ButtonProps
