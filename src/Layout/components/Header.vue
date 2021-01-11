<template>
    <!-- 顶部内容 -->
    <div id="header_wrap">
        <!-- 左边的切换按钮 -->
        <div class="header_left">
        </div>
        <!-- 左边头像和用户信息 -->
        <div class="header_right">
            <!-- 全屏缩放 -->
            <Zoom></Zoom>
            <!-- 主题 -->
            <el-tooltip class="item" effect="dark" content="主题" placement="bottom">
                <svg-icon iconClass="theme" class="svg" @click="themeBtn"></svg-icon>
            </el-tooltip>
            <!-- 用户头像 -->
            <div class="head_img_box">
                <img src="@/assets/user.jpg" alt />
            </div>
            <!-- 用户名及下拉选项 -->
            <Other></Other>
            <!-- 主题弹框 -->
            <Theme ref="themes" v-if="themeBox"></Theme>
        </div>
    </div>
</template>
<script>
    import {
        getTheme
    } from "@/untils/systemStorage"
    import Zoom from "./HeaderComponents/zoom"
    import Theme from "./HeaderComponents/theme"
    import Other from "./HeaderComponents/other"
    export default {
        components: {
            Zoom,
            Theme,
            Other
        },
        data() {
            return {
                // 主题弹窗状态
                themeBox: false
            };
        },
        computed: {
            // 判断当前按钮状态决定用哪个class
            menuStatus() {
                return this.$store.state.appModule.isCollapse;
            }
        },
        created() {
            // 加载设置默认主题
            window.document.documentElement.setAttribute("theme", getTheme() || 'Zeroth');
        },
        methods: {
            // 展开关闭菜单
            navStatus() {
                this.$store.commit("appModule/SET_ISCOLLAPSE");
            },
            // 切换主题按钮
            themeBtn() {
                this.themeBox = !this.themeBox
            }
        }
    };
</script>
<style lang="scss" scoped>
    #header_wrap {
        position: fixed;
        top: 0;
        right: 0;
        height: 65px;
        @include theme();
        @include header_text();
        padding: 10px 20px;
        box-sizing: border-box;
        -webkit-box-shadow: 0 3px 16px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        // @include webkit(box-sizing, border-box);
        @include webkit(transition, all 0.3s ease 0s);

        //   左边部分
        .header_left {
            display: flex;
            align-items: center;

            .icon {
                font-size: 24px;
                margin-right: 15px;
            }
        }

        // 右边部分
        .header_right {
            display: flex;
            align-items: center;

            .svg {
                font-size: 24px;
                margin-right: 8px;
            }

            .svg:hover {
                color: #409eff;
            }

            .head_img_box {
                width: 40px;
                height: 40px;
                border-radius: 8px;
                border: 1px solid #ffffff;
                overflow: hidden;
                margin-right: 10px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .open {
        #header_wrap {
            left: $menuOpenWidth;
        }
    }

    .close {
        #header_wrap {
            left: $menuCloseWidth;
        }
    }
</style>