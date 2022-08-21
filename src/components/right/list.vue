
<template>
    <div class="container">
        <ul class="list-group ">
            <li class="item list-group-item  " v-for="item in userStore.list" :key="item.id">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :id='String(item.id)' v-model="item.done">
                    <label class="custom-control-label" :class="item.done ? 'delete' : ''" :for='String(item.id)'>{{
                            item.task
                    }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '../../stores/list'

const userStore = useUserStore()
</script>
<style lang="less" scoped>
.list-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 55px;
        background-color: #eeeff3;
        margin: 3px;
        border-radius: 10px;
    }
}

.delete {
    text-decoration: line-through;
    color: gray;
    font-style: italic;
}
</style>