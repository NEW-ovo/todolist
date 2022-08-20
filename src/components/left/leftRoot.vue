<template>
    <div class="left-container">
        <UseSearch class="useSearch"></UseSearch>
        <ElList class="allList"></ElList>
        <!-- <AllList class="allList"></AllList> -->
        <NewGroup class="newgroup"></NewGroup>
    </div>
</template>

<script>
import NewGroup from './newThings.vue';
import AllList from './alllList/AllList.vue';
import UseSearch from './useSearch/useSearch.vue';
import ElList from './alllList/elList.vue';
export default {
    name: "LeftRoot",
    components: {
    UseSearch,
    NewGroup,
    AllList,
    ElList
} ,
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
    .allList{
        flex: 1;
        margin-top: 50px;
    }
    .useSearch{
        width: 100%;
        height: 50px;
    }
}
</style>