<template>
    <div>
        <Use></Use>
        <Search class="search"></Search>
    </div>
</template>

<script>
import Use from './use.vue';
import Search from './search.vue';
export default {
    components: { Use, Search }
}
</script>

<style lang="less" scoped>
div{
    display: flex;
    flex-direction: column;
}
</style>