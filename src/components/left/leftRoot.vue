<template>
    <div class="left-container">
        <Use class="use"></Use>
        <Search class="search"></Search>
        <InsideList class="insidelist"></InsideList>
        <CustList class="custlist"></CustList>
        <NewGroup class="newgroup"></NewGroup>
    </div>
</template>

<script>
import Use from './use.vue';
import Search from './search.vue';
import InsideList from './insideList.vue';
import CustList from './custList.vue';
import NewGroup from './newThings.vue';
export default {
    name: "LeftRoot",
    components: { Use, Search, InsideList, CustList, NewGroup }
}
</script>

<style lang="less" scoped>
.left-container {
    width: 200px;
    height: 100%;
    text-align: center;
    line-height: 100px;
    background-color: aquamarine;
}

.use{
    width: 200px;
    height: 100px;
    background-color: aliceblue;
}
.search{
    width: 200px;
    height: 100px;
    background-color: skyblue;
}
.insidelist{
    width: 200px;
    height: 100px;
    background-color: aliceblue;
}
.custlist{
    width: 200px;
    height: 100px;
    background-color: skyblue;
}
.newgroup{
    position: absolute;
    bottom: 0;
    width: 200px;
    height: 100px;
    background-color: skyblue;
}
</style>