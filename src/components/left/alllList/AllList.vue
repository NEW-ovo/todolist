<template>
    <div class="allList">
        <InsideList></InsideList>
        <hr width="90%">
        <CustList></CustList>
    </div>

</template>

<script>
import CustList from './custList.vue';
import InsideList from './insideList.vue';
export default {
    components: {
        CustList,
        InsideList
    }
}
</script>

<style lang="less" scoped>
</style>