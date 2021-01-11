<template>
    <!-- 其他下拉选项 -->
    <div class="header_down">
        <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                <a href="javascript:void(0)">{{userName}}</a>
                <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user-solid" command="user">个人中心</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-promotion" command="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import {
        getUserName
    } from "@/untils/systemStorage"
    export default {
        data() {
            return {
                userName: getUserName() // 用户名
            }
        },
        methods: {
            // 其他下拉选项
            handleCommand(command) {
                console.log(command);
                if (command == "loginOut") {
                    this.$store.dispatch("loginModule/loginOut").then(() => {
                        this.$router.push({
                            path: "/login"
                        });
                    });
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .el-dropdown-link {
        font-weight: 600;
        @include header_text();
        font-size: 13px !important;

        a {
            @include header_text();

            &:hover {
                color: #409eff !important;
            }
        }
    }
</style>