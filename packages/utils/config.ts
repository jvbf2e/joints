/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-08-30 11:44:19
 * @LastEditTime: 2021-08-30 13:15:32
 * @motto: Hi Virtual Mode
 * @Description: Modify here please
 * @FilePath: \Developmente:\Project\ui\joints\packages\utils\config.ts
 */
const PREFIX = 'j'

export const getPrefixCls = (
  suffixCls: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) return customizePrefixCls
  return suffixCls ? `${PREFIX}-${suffixCls}` : PREFIX
}
