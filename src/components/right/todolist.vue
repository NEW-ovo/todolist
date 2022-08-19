
<template>
    <div class="container">
        <ul class="list-group ">
            <li class="item list-group-item  " v-for="item in list"
                :key="item.id">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :id="item.id" v-model="item.done">
                    <label class="custom-control-label" :class="item.done ? 'delete' : ''" :for="item.id">{{ item.task
                    }}</label>
                </div>
                <div class="start">
                    <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
                    <span class="badge badge-warning badge-pill" v-else>未完成</span>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'ToDoList',
    props: {
        list: {
            type: Array,
            require: true,
            default: [],
        }
    }
}
</script>

<style lang="less" scoped>
ul{
    display: flex;
    width: 100%;
    .item{
        flex: 1;
        height: 55px;
        
    }
}

.delete {
    text-decoration: line-through;
    color: gray;
    font-style: italic;
}
</style>