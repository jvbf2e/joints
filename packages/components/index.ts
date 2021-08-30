/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/tusktalk
 * @Date: 2021-08-27 17:41:35
 * @LastEditTime: 2021-08-30 10:27:51
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\packages\components\index.ts
 */

import type { App } from 'vue'

import * as components from './components'
import { default as version } from './version'

export * from './components'

export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    console.log(component)
    if (component.install) {
      app.use(component)
    }
  })
  // app.config.globalProperties.$message = components.message;
  // app.config.globalProperties.$notification = components.notification;
  // app.config.globalProperties.$info = components.Modal.info;
  // app.config.globalProperties.$success = components.Modal.success;
  // app.config.globalProperties.$error = components.Modal.error;
  // app.config.globalProperties.$warning = components.Modal.warning;
  // app.config.globalProperties.$confirm = components.Modal.confirm;
  // app.config.globalProperties.$destroyAll = components.Modal.destroyAll;
  return app
}

export { version }

export default {
  version,
  install,
}
