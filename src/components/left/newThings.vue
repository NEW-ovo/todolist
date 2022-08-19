<template>
    <div class="new">
        <div class="newList">
            <i>
                icon
            </i>
            <span>
                text
            </span>
        </div>
        <div class="newGroup">
            icon
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
        background-color: yellowgreen;
    }
}
</style>