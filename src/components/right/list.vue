
<template>
    <div class="container">
        <ul class="list-group ">
            <li class="item list-group-item  " v-for="item in list" :key="item.id">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :id="item.id" v-model="item.done">
                    <label class="custom-control-label" :class="item.done ? 'delete' : ''" :for="item.id">{{ item.task
                    }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "List",
    props: {
        // 列表数据
        list: {
            type: Array,
            required: true,
            default: [],
        },
    },

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