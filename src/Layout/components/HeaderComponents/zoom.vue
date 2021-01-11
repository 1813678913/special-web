<template>
    <!-- 全屏缩放 -->
    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
        <svg-icon iconClass="zoom" class="svg" @click="handleFullScreen"></svg-icon>
    </el-tooltip>
</template>

<script>
    export default {
        data() {
            return {
                fullscreen: false // 全屏缩放状态
            }
        },
        methods: {
            // 全屏缩放
            handleFullScreen() {
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        element.msRequestFullscreen(); // IE11
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        }
    }
</script>