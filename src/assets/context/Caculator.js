/*
 * @LastEditTime: 2022-03-25 01:32:33
 * @Description: 计算器
 * @Date: 2022-03-24 23:58:16
 * @Author: wangshan
 * @LastEditors: wangshan
 */

import { createContext } from "react/cjs/react.development";
const data = {
  a: 0,
  b: 0,
};
export const CaculatorContext = createContext(data);
CaculatorContext.displayName = "CaculatorContexts";
