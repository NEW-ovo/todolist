<template>
    <div class="right-container">
        <ListHeader class="listheader"></ListHeader>
        <List class="list" :list="list"></List>
        <Todoinput @add="onaddtask" class="input"></Todoinput>
    </div>
</template>

<script>
import Todoinput from './todoinput.vue';
import ListHeader from './listHeader.vue';
import List from './list.vue';
export default {
    components: {
        Todoinput,
        ListHeader,
        List
    },
    data() {
        return {
            list: [
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
    margin: 50px;

    width: 100%;

    .listheader {
        top: 0;
        height: 100px;
    }

    .input {
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        width: 100%;
        height: 50px;
    }
}
</style>