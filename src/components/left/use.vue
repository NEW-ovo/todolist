<template>
    <div class="use">
        <div class="headPhoto">left</div>
        <div class="useInfo">
            <span>name</span>
            <span>acount</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.use{
    display: flex; 
}
.headPhoto{
    width: 30%;
    height: 100%;
    background-color: wheat;
}
.useInfo{
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    span{
        // display: block;
        background-color: aqua;
        width: 100%;
        height: 50%;
    }
}
</style>