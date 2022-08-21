<template>
    <div class="left-container">
        <Use></Use>
        <Search></Search>
        <el-scrollbar>
            <ElList class="allList"></ElList>
        </el-scrollbar>
        <NewGroup class="newgroup"></NewGroup>
    </div>
</template>

<script>
import NewGroup from './newThings.vue';
import ElList from './elList.vue';
import Use from './use.vue';
import Search from './search.vue';

export default {
    name: "LeftRoot",
    components: {
        NewGroup,
        ElList,
        Use,
        Search
    },
}

</script>

<style lang="less" scoped>
.left-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100%;
    text-align: center;
    background-color: #f3f3f3;

    .allList {
        flex: 1;
    }

    .useSearch {
        width: 100%;
        height: 50px;
    }
}
</style>