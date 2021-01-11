<template>
    <div class="bg_box">
        <div class="bg_start"></div>
        <div class="lt"></div>
        <div class="rt"></div>
        <div class="wrap">
            <div class="cube">
                <div class="face road"></div>
                <div class="face building1 left" v-for="(item,index) in elList" :key="index+Math.random()*1000"></div>
                <div class="face building1 right" v-for="(item,index) in elList" :key="index+Math.random()*1000"></div>
                <div class="face building1 left outer" v-for="(item,index) in elList" :key="index+Math.random()*1000">
                </div>
                <div class="face building1 right outer" v-for="(item,index) in elList" :key="index+Math.random()*1000">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "loginBg",
        data() {
            return {
                elList: [1, 2, 3, 4, 5, 6, 7]
            };
        }
    };
</script>
<style scoped lang="scss">
    @import "./loginBg.scss";

    .bg_start {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: radial-gradient(circle at center, #0f111a, #29325c);
        z-index: -1;
    }
</style>