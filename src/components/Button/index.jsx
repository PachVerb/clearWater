/*
 * @LastEditTime: 2022-03-24 00:20:48
 * @Description: 按钮组件
 * @Date: 2022-03-20 01:22:26
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.scss";
import { ThemeContext } from "@/assets/context/index.js"; // 导入全局context
import { useContext } from "react/cjs/react.development.js";
export default function Button(props) {
  // 按钮的theme不必通过props传递，方便通过基础Button，定制一般组件.
  // 这里也涉及到组合的使用
  const themeType = useContext(ThemeContext); // 使用useContext-hook注册全局状态
  //   console.log(themeType); // dark
  return (
    <div>
      <button className={`base ${themeType}`} onClick={props.onClick}>
        {props.innerText || "start"}
      </button>
    </div>
  );
}
