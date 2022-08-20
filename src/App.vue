<template>
    <div class="page">
        <LeftRoot></LeftRoot>
        <RightRoot></RightRoot>
    </div>
</template>

<script>
import LeftRoot from "./components/left/leftRoot.vue";
import RightRoot from "./components/right/rightRoot.vue";

export default {
    components: {
        LeftRoot,
        RightRoot
    },
    name: 'App',

}
</script>

<style lang="less" scoped>
.page {
    display: flex;
    width: 100vw;
    height: 100vh;
}
</style>