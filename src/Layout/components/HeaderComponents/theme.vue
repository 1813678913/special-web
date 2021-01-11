<template>
    <!-- 主题 -->
    <div>
        <el-dialog title="主题选择" :visible.sync="dialogVisible" width="550px" append-to-body :before-close="handleClose">
            <el-table :data="themeList" border style="width: 100%">
                <el-table-column prop="title" label="主题" width="180"></el-table-column>
                <el-table-column prop="name" label="主题样式" width="120">
                    <template slot-scope="scope">
                        <div class="theme_bg" :style="{ background: scope.row.color}">
                            <svg-icon iconClass="icon8" class="svg"></svg-icon>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="当前主题">
                    <template slot-scope="scope">
                        <el-button v-if="scope.row.type == 'primary'" type="primary" round size="mini"
                            @click="changeTheme(scope.row.theme)">当前主题</el-button>
                        <el-button v-else round size="mini" @click="changeTheme(scope.row.theme)">使用</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
    import {
        setTheme,
        getTheme
    } from "@/untils/systemStorage"
    export default {
        data() {
            return {
                dialogVisible: true,
                themeList: [{
                        title: "宝石蓝",
                        color: "#193675",
                        type: "",
                        theme: "Zeroth",
                    },
                    {
                        title: "绅士灰",
                        color: "rgb(93, 107, 136)",
                        type: "",
                        theme: "First",
                    },
                    {
                        title: "少女粉",
                        color: "rgb(250, 118, 149)",
                        type: "",
                        theme: "Second",
                    },
                ],
            };
        },
        created() {
            this.activeBtn()
        },
        methods: {
            changeTheme(theme) {
                setTheme(theme)
                window.document.documentElement.setAttribute("theme", theme);
                this.activeBtn()
            },
            activeBtn() {
                let themeLength = 0
                this.themeList.map(item => {
                    if (item.theme == getTheme()) {
                        item.type = "primary"
                    } else {
                        item.type = ""
                        themeLength += 1
                        if (themeLength == this.themeList.length) {
                            this.themeList[0].type = "primary"
                        }
                    }
                })
            },
            handleClose() {
                this.$parent.themeBtn()
            }
        },
    };
</script>
<style scoped lang="scss">
    .theme_bg {
        width: 100px;
        height: 50px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1936758c;
        margin-bottom: 10px;

        .svg {
            font-size: 30px;
            margin-right: 10px;
            color: #ffffff;
        }
    }

    /deep/.el-table th>.cell {
        text-align: center;
    }

    /deep/.el-table .cell {
        text-align: center;
    }
</style>