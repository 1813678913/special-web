import service from "@/untils/request";

// 获取所有分类信息
export function GetCategoryAll(data) {
    return service.request({
        method: 'post',
        url: '/news/getCategoryAll/',
        data
    })
}

// 添加一级分类
export function AddFirstCategory(data) {
    return service.request({
        method: 'post',
        url: '/news/addFirstCategory/',
        data
    })
}

// 编辑一级级分类
export function EditCategory(data) {
    return service.request({
        method: 'post',
        url: '/news/editCategory/',
        data
    })
}

// 添加子集分类
export function AddChildrenCategory(data) {
    return service.request({
        method: 'post',
        url: '/news/addChildrenCategory/',
        data
    })
}

// 删除分类
export function DeleteCategory(data) {
    return service.request({
        method: 'post',
        url: '/news/deleteCategory/',
        data
    })
}