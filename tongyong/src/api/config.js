import axios from "axios"

// 配置基础请求路径
axios.defaults.baseURL = '/api'; // 首页 127.0.0.1：3001

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 获取token
    let token = localStorage.getItem('token');
    // 发送请求之前，在headers中添加token【在这里携带token】
    config.headers.authorization = "Bearer "+token;
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  
  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let {data} = response;
    return data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  
  // 导出配置信息
  export default axios