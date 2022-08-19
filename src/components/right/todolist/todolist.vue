
<template>
    <div class="list-container">
        <DoneList class="donelist"></DoneList>
        <UndoneList class="undonglist"></UndoneList>
    </div>
</template>

<script>
import UndoneList from './UndoneList.vue';
import DoneList from './DoneList.vue';
export default {
    name: "ToDoList",
    props: {
        list: {
            type: Array,
            require: true,
            default: [],
        }
    },
    components: {
        UndoneList,
        DoneList
    }
}
</script>

<style lang="less" scoped>
.list-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;


    .donelist {
        width: 100%;
        height: 50px;
    }

    .undonglist {
        width: 100%;
        height: 100px;
    }
}

ul {
    display: flex;
    width: 100%;

    .item {
        display: flex;
        justify-content: space-between;
        height: 55px;

    }
}

.delete {
    text-decoration: line-through;
    color: gray;
    font-style: italic;
}
</style>