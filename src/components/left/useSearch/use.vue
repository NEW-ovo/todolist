<template>
    <div class="use">
        <div class="headPhoto">
            <span class="iconfont icon-wo"></span>
        </div>
        <div class="useInfo">
            <span><strong>曹力鹏{{this.$slots}}</strong> </span>
            <span>839106773@qq.com <span class="iconfont icon-shangxiazhankai_o
"></span></span>
        </div>
        <div class="null"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.use {
    display: flex;
    flex-direction: row;
    justify-content: start;

    .headPhoto {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 75px;
        height: 100%;

        span {
            display: block;
            width: 50px;
            height: 50px;
            color: #fff;
            line-height: 50px;
            border: 1px solid #000;
            border-radius: 50%;
            background-color: #2d89ef;
        }
    }

    .useInfo {
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 100%;

        span {
            text-align: start;
            width: 100%;
            height: 50%;
        }
    }

    .null {
        flex: 1;
    }
}
</style>