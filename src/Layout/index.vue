<template>
    <div :class="[menuStatus?'close':'open']">
        <!-- <Header></Header> -->
        <Main></Main>
    </div>
</template>
<script>
    // import Header from "./components/Header";
    import Main from "./components/Main";
    export default {
        name: "Layout",
        components: {
            // Header, // 头部
            Main // 内容区
        },
        computed: {
            // 判断当前按钮状态决定用哪个class
            menuStatus() {
                return this.$store.state.appModule.isCollapse;
            }
        }
    };
</script>