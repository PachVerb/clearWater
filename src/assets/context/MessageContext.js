/*
 * @LastEditTime: 2022-03-24 23:26:52
 * @Description: 存储消息context
 * @Date: 2022-03-24 23:06:57
 * @Author: wangshan
 * @LastEditors: wangshan
 */

const message = {
  forMan: "Pachverb",
  content: "hello, my name is Pachverb",
  date: new Date().toLocaleTimeString(),
};

export const MessageContext = React.createContext(message);
MessageContext.displayName = "SayHello"; // 设置SayHello展示名字
