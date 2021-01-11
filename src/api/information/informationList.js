import service from "@/untils/request";

// 获取所有分类信息
export function GetCategoryAll(data) {
    return service.request({
        method: 'post',
        url: '/news/getCategoryAll/',
        data
    })
}

// 获取信息列表
export function GetList(data) {
    return service.request({
        method: 'post',
        url: '/news/getList/',
        data
    })
}

// 新增信息
export function Add(data) {
    return service.request({
        method: 'post',
        url: '/news/add/',
        data
    })
}

// 编辑信息
export function EditInfo(data) {
    return service.request({
        method: 'post',
        url: '/news/editInfo/',
        data
    })
}

// 删除信息
export function DeleteInfo(data) {
    return service.request({
        method: 'post',
        url: '/news/deleteInfo/',
        data
    })
}