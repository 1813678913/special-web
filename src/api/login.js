import service from "@/untils/request";


// 登录
export function userLogin(data) {
    return service.request({
        method: "post",
        url: "/login",
        data
    });
}

// 注册
export function userRegister(params) {
    return service.request({
        method: "get",
        url: "/register",
        params
    });
}
