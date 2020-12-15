/**
 * 封装 axios 请求模块
 */
import axios from "axios"

const request = axios.create({
  baseURL: "https://yapi.baidu.com/mock/13783/" ,// 基础路径
})


export default request