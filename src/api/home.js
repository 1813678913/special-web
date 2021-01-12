import service from "@/untils/request";

//get请求使用 params post使用data
export function home(params) {
    return service.request({
        method: "get",
        url: "",
        params
    });

    
}