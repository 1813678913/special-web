<template>
  <div class="login-wrap">
    <!-- form表单 -->
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="login-form"
      size="medium"
    >
      <el-form-item prop="name" class="item-from">
        <label>用户名</label>
        <el-input
          type="text"
          v-model="ruleForm.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item prop="pwd" class="item-from">
        <label>密码</label>
        <el-input
          type="password"
          v-model="ruleForm.pwd"
          autocomplete="off"
          minlength="6"
          maxlength="20"
        >
        </el-input>
      </el-form-item>

      <el-form-item prop="pwd" class="item-from" v-if="model === 'register'">
        <label>重复密码</label>
        <el-input
          type="password"
          v-model="ruleForm.pwd"
          autocomplete="off"
          minlength="6"
          maxlength="20"
        >
        </el-input>
      </el-form-item>

      <el-form-item prop="code" class="item-from">
        <label>验证码</label>
        <el-row :gutter="10">
          <el-col :span="16">
            <el-input v-model="ruleForm.code"></el-input>
          </el-col>
          <el-col :span="8">
            <el-button
              type="success"
              size="small"
              minlength="6"
              maxlength="6"
              :disabled="codeBtnStatus || ruleForm.username == ''"
              @click="getSmsBtn()"
              >{{ codeBtnVal }}
            </el-button>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <div class="check_box">
          <el-checkbox v-model="checked" style="color:white"
            >记住密码</el-checkbox
          >
          <!-- 登录注册标题 -->
          <ul class="menu-tab">
            <li
              :class="{ current: item.current }"
              v-for="(item, index) in menuTab"
              :key="index"
              @click="toggleMnew(item, index)"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          class="login-btn block"
          >{{ model == "login" ? "登陆" : "注册" }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {
  validateUsername,
  validatePassword,
  validateCode,
  validatePasswords,
} from "./checkForm";
import {setUserName} from "../../../untils/systemStorage";
import { userLogin,userRegister} from "@/api/login";


export default {
  name: "loginForm",
  data() {
    return {
      checked: false,
      menuTab: [
        {
          text: "登录",
          current: true,
        },
        {
          text: "注册",
          current: false,
        },
      ],
      model: "login",
      ruleForm: {
        name: "",
        pwd: "",
        code: "",
      },
      rules: {
        username: [
          {
            validator: validateUsername,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
        passwords: [
          {
            validator: validatePasswords,
            trigger: "blur",
          },
        ],
        code: [
          {
            validator: validateCode,
            trigger: "blur",
          },
        ],
      },
      codeBtnStatus: false, // 获取验证码是否隐藏
      codeBtnVal: "获取验证码", // 获取验证码中文字段
      myInfo: 0,
      timer: null, //定时器名称
    };
  },
  methods: {

    //弹窗提示
     open() {
         this.$message({
          message: '恭喜你，注册成功！',
          type: 'success'
        });
      },
    // 切换登录注册
    toggleMnew(data, index) {
      this.menuTab.forEach((e) => {
        e.current = false;
      });
      data.current = true;
      console.log(this.model);
      index == 0 ? (this.model = "login") : (this.model = "register");
      this.$refs["ruleForm"].resetFields(); // 切换的时候清空表单
    },
    // 获取验证码
    getSmsBtn() {
      alert("验证码功能暂未开放，请直接登录！");
    },
    submitForm(formName) {
      if (this.model === 'login') {
        userLogin(this.ruleForm).then((res) => {
          if (200 === res.data.code) {
            setUserName(res.data.data.name),
            this.$router.push({
              path: "/home",
            });
          }
        });
      }
      if (this.model === 'register') {
        userRegister(this.ruleForm).then((res) => {
          if (200 === res.data.code) {
            this.open();
            this.$router.push({
              path: "/home",
            });
          }
        });
      }
    },
  },
};
</script>
<style scoped lang="scss">
.login-wrap {
  z-index: 2;
  width: 330px;
  padding: 15px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
}

.login-form {
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #ffffff;
    font-weight: 600;
  }

  .item-from {
    margin-bottom: 13px;
  }

  .block {
    display: block;
    width: 100%;
  }

  .login-btn {
    margin-top: 5px;
  }
}

.check_box {
  display: flex;
  justify-content: space-between;

  .menu-tab {
    text-align: center;

    li {
      display: inline-block;
      width: 40px;
      line-height: 20px;
      font-size: 14px;
      color: #333333;
      cursor: pointer;
      font-weight: 600;
      border-radius: 5px;
    }

    .current {
      background-color: rgba(0, 0, 0, 0.1);
      color: white;
    }
  }
}
</style>
