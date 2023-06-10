// 导入配置信息
import axios from './config'
// // 登录的封装
export function addProduct(data){
    return axios({
        url:"/product",
        method:"post",
        data
    })
}
// // 注册的封装
// export function addZuche(data){
//     return axios({
//         url:"/zuche",
//         method:"post",
//         data
//     })
// }
// // 修改密码
// export function updateProduct(data){
//     return axios({
//         url:"/product",
//         method:"put",
//         data
//     })
// }
