import {
    stripscript,
    validateEmail,
    validatePass,
    validateVCode
} from "@/untils/validate";

// 校验用户名
export function validateUsername(rule, value, callback) {
    if (value === "") {
        callback(new Error("请输入用户名"));
    } else if (validateEmail(value)) {
        callback(new Error("用户名格式有误"));
    } else {
        callback(); //true
    }
};

// 验证密码
let password = ""
export function validatePassword(rule, value, callback) {
    // this.ruleForm.password = stripscript(value);
    // value = this.ruleForm.password;
    password = value
    // 过滤后的数据
    if (value === "") {
        callback(new Error("请输入密码"));
    } else if (validatePass(value)) {
        callback(new Error("密码为6至20位数字+字母"));
    } else {
        callback();
    }
};

// 验证验证码
export function validateCode(rule, value, callback) {
    if (value === "") {
        return callback(new Error("请输入验证码"));
    } else if (validateVCode(value)) {
        return callback(new Error("验证码格式有误"));
    } else {
        callback();
    }
};

// 验证重复密码
export function validatePasswords(rule, value, callback) {
    console.log(value, password)
    // 如果模块值为login, 直接通过
    if (value === "") {
        callback(new Error("请再次输入密码"));
    } else if (value != password) {
        callback(new Error("两次密码不一致"));
    } else {
        callback();
    }
};



