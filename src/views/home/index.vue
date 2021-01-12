<template>
  <div class="wrap">
    <div class="box_div">
      <div class="head_img_box">
        <img src="@/assets/user.jpg" alt />
      </div>
      <div class="header_down">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <a href="javascript:void(0)">{{ userName }}</a>
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              icon="el-icon-user-solid"
              v-if="userName == null "
              command="user"
              >登录/注册</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-s-promotion" command="loginOut"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="biaoyu">
      <HomeBy></HomeBy>
    </div>
  </div>
</template>

<script>
import HomeBy from "./components/homeBy";
import AX from "../../Layout/components/Header";
import { getUserName } from "@/untils/systemStorage";
import { home } from "@/api/home";
export default {
  components: {
    AX,
    HomeBy,
  },
  data() {
    return {
      tableData: [],
      userName: getUserName(), // 用户名
    };
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      if (command == "loginOut") {
        this.$store.dispatch("loginModule/loginOut").then(() => {
          this.$router.push({
            path: "/login",
          });
        });
      }
      if (command == "user") {
        this.$store.dispatch("loginModule/loginOut").then(() => {
          this.$router.push({
            path: "/login",
          });
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.biaoyu {
  font-size: 22px;
  font-family: "楷体";
  color: rgb(10, 34, 247);
  margin: 0 auto;
  width: 100%;
  height: 50%;
  position: relative;
  top: 50%; /*偏移*/
  text-align: center;
}

.wrap {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(../../assets/home.jpg);
  background-size: 100%;
}
.box_div {
  display: flex;
  width: 80px;
  float: right;
}
.head_img_box {
  width: 50px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ffffff;
  overflow: hidden;
  margin-right: 10px;
  margin-top: 10px;

  img {
    width: 100%;
    height: 100%;
  }
}
.header_down {
  line-height: 40px;
  /deep/.el-icon-caret-bottom:before {
    color: rgb(8, 234, 241);
  }
  margin-top: 3px;
}
.el-dropdown-link {
  font-weight: 600;
  @include header_text();
  font-size: 18px !important;

  a {
    @include header_text();

    &:hover {
      color: #409eff !important;
    }
  }
}
</style>
