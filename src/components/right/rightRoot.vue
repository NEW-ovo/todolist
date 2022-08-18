<template>
    <div class="right-container">
        <ListHeader class="listheader"></ListHeader>
        <div class="middle">
            <Todolist class="list mt-2" :list="changeList"></Todolist>
            <TodoButtom v-model:active="activeBtnIndex"></TodoButtom>
        </div>
        <Todoinput @add="onaddtask" class="input"></Todoinput>
    </div>

</template>

<script>
import Todoinput from './todoinput.vue';
import Todolist from './todolist.vue';
import TodoButtom from './ListSwitch.vue';
import ListHeader from './listHeader.vue';
export default {
    components: {
        Todoinput,
        Todolist,
        TodoButtom,
        ListHeader
    },
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
    computed: {
        changeList() {
            switch (this.activeBtnIndex) {
                case 0:
                    return this.todolist
                case 1:
                    return this.todolist.filter(x => x.done === true)
                case 2:
                    return this.todolist.filter(x => x.done !== true)
            }
        }
    },
    methods: {
        onaddtask(taskname) {
            this.todolist.unshift({
                id: this.nextid,
                task: taskname,
                done: false,
            })
            this.nextid++
        }
    },
}
</script>

<style lang="less" scoped>
.right-container {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background-color: #ccc;
    opacity: .5;
    .middle{
        display: flex;
        flex: 1;
    }

    // .listheader {
    //     position: absolute;
    //     top: 0;
    // }

    // .list {
    //     flex: 1;
    //     margin-top: 50px;
    // }

    // .input {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     position: absolute;
    //     bottom: 0;
    //     width: 100%;
    // }
}
</style>