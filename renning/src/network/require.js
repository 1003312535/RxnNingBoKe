// import axios from 'axios'  // 导入库
// export function request(config,success, failure){//config为一个对象
//   //创建axios的实例   目的是为了
//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   //发送真正的请求
//   instance1(config)
//     .then(res => {success(res)})
//     .catch(err => {failure(err)})
// }


import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://127.0.0.1:3000',
    timeout:2000
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}




// import axios from 'axios'
//
// export function request(config) {
//   const instance1 = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout: 3000
//   })
//   //请求拦截
//   instance1.interceptors.request.use(config => {
//     return config;
//   }, err => {
//     console.log(err)
//   })
//   //响应拦截
//   instance1.interceptors.response.use(res => {
//     return res.data
//   }, err => {
//     console.log(err)
//   })
// //  发送真正的网络请求   //返回的是promise
//   return instance1(config)
// }
// export function request1(config) {
//   const instance2 = axios.create({
//     baseURL:'http://127.0.0.1:3000',
//     timeout:2000
//   })
//   instance2.interceptors.response.use(config => {
//     return config.data;
//   }, err => {
//     console.log(err)
//   })
//   return instance2(config)
// }