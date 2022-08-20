
<template>
    <div class="list-container">
        <DoneList class="donelist" :list="todolist" ></DoneList>
    </div>
</template>

<script>
import DoneList from './DoneList.vue';
export default {
    name: "ToDoList",
    data() {
        return {
            todolist: [
                { id: 1, task: '周一早晨9点开会', done: false },
                { id: 2, task: '周一晚上8点聚餐', done: false },
                { id: 3, task: '准备周三上午的演讲稿', done: true },
            ].reverse(),
            nextid: 4,
            activeBtnIndex: 0,
        }
    },
    components: {
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