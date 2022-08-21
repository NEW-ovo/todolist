<template>
    <el-header>
        <ListHeader class="listheader"></ListHeader>
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
export default {
    components: {
        ListHeader,
        Input,
        List
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