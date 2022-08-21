<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="300px">
                <LeftRoot></LeftRoot>
            </el-aside>
            <el-container class="el-container-right">
                
                <RightRoot></RightRoot>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import LeftRoot from './components/left/leftRoot.vue';
import RightRoot from './components/right/rightRoot.vue';
export default {
    components: {
        LeftRoot,
        RightRoot
    },
    name: 'App',

}
</script>

<style lang="less" scoped>
.common-layout {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    .el-aside {
        overflow-x: hidden;
    }
    .el-container-right{
        flex-direction: column;
        background-color: #697dcd;
    }

}

// .body-container{
//      width: 100vw;
//     height: 100vw;
// }
</style>