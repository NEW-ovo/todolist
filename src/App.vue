<template>
    <div class="common-layout">
        <el-container class="body-container">
            <el-aside width="300px" class="aside">
                <LeftRoot></LeftRoot>
            </el-aside>
            <el-container>
                <el-header>
                    <ListHeader></ListHeader>
                </el-header>
                <el-main>
                    <List></List>
                    <Todoinput></Todoinput>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import LeftRoot from "./components/left/leftRoot.vue";
import RightRoot from "./components/right/rightRoot.vue";
import ListHeader from "./components/right/listHeader.vue";
import List from "./components/right/list.vue";
import Todoinput from "./components/right/todoinput.vue";

export default {
    components: {
    LeftRoot,
    RightRoot,
    ListHeader,
    List,
    Todoinput
},
    name: 'App',

}
</script>

<style lang="less" scoped>

// .body-container{
//      width: 100vw;
//     height: 100vw;
// }
</style>