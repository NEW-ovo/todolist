<template>
    <div class="use">
        <div class="headPhoto">
            <img src="" alt="">
        </div>
        <div class="useInfo">
            <span>曹力鹏</span>
            <span>839106773@qq.com</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.use {
    display: flex;
}

.headPhoto {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100%;
    background-color: wheat;
    // .img-container{

    // }
    img {
        display: block;
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
}

.useInfo {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;

    span {

        text-align: start;
        background-color: aqua;
        width: 100%;
        height: 50%;
    }
}
</style>