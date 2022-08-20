<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu class="el-menu-vertical-demo" >
                <el-menu-item index="4">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <span>新建列表</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
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