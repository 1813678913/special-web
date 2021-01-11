import axios from "axios"; // 引入axios
import { Message } from "element-ui"; // js文件中引入element的消息提示
import { getToken, getUserName } from './systemStorage'

// console.log(process.env.NODE_ENV + "+process.env.NODE_ENV"); // 获取当前的环境
const BASEURL = process.env.NODE_ENV === "production" ? "/api" : "/devApi";

const service = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" }
});

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // 后端需要前端传的一些相关参数(在请求头添加参数)
    config.headers['Tokey'] = getToken()
    config.headers['UserName'] = getUserName()
    console.log(config,'来自请求拦截的config');
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function(response) {
    const data = response.data;
    // if (data.resCode != 0) {
    //   Message({
    //     message: data.message,
    //     type: "warning"
    //   });
    //   return Promise.reject(data);
    // } else {
    //   return response;
    // }
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
