<template>
    <div class="new">
        <div class="newList">
            <span class="iconfont icon-jiahao1">
            </span>
            <span>
                   新建列表
            </span>
        </div>
        <div class="newGroup iconfont icon-fenzu">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.new {
    display: flex;

    .newList {
        display: flex;
        align-items: center;
        justify-content: start;
        width: 80%;
        height: 100%;
    }

    .newGroup {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 100%;
    }
}
</style>