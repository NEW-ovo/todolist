<template>
    <div class="container">
        <div class="search">
            <input class="input" type="text" placeholder="Search">
            <span class="iconfont icon-sousuo"></span>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container{
    width: 100%;
    height: 50px;
}
.search {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 50px;
    padding: 0 15px;

    .iconfont {
        position: absolute;
        right: 15px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }

    .input {
        width: 100%;
        border-radius: 5px;
    }

}
</style>