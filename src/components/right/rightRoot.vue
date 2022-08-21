<template>
    <el-header>
        <ListHeader class="listheader"></ListHeader>
        <StroeTwst></StroeTwst>
    </el-header>
    <el-scrollbar>
        <el-main>
            <List :list="list"></List>
        </el-main>
    </el-scrollbar>
    <el-footer>
        <Input @add="onAddNewTask"></Input>
    </el-footer>
</template>

<script>
import ListHeader from './listHeader.vue';
import List from './list.vue';
import Input from './input.vue';
import StroeTwst from '../stroeTwst.vue';
export default {
    components: {
    ListHeader,
    List,
    Input,
    StroeTwst
},
    data() {
        return {
            list: [
                { id: 1, task: '周一早晨9点开会', done: false },
                { id: 2, task: '周一晚上8点聚餐', done: false },
                { id: 3, task: '准备周三上午的演讲稿', done: true },
                { id: 4, task: '周一早晨9点开会', done: false },
                { id: 5, task: '周一晚上8点聚餐', done: false },
                { id: 6, task: '准备周三上午的演讲稿', done: true },
                { id: 7, task: '周一早晨9点开会', done: false },
                { id: 8, task: '周一晚上8点聚餐', done: false },
                { id: 9, task: '准备周三上午的演讲稿', done: true },
                { id: 10, task: '周一早晨9点开会', done: false },
                { id: 11, task: '周一晚上8点聚餐', done: false },
                { id: 12, task: '准备周三上午的演讲稿', done: true },
            ].reverse(),
            nextid: 13,
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
        onAddNewTask(taskname) {
            this.list.unshift({
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
.el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
}
</style>