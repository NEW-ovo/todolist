<template>
    <div class="undone">
        <div class="undone-drop-down-button">
        </div>
        <div class="container">
            <ul class="list-group ">
                <li class="item list-group-item  " v-for="item in list" :key="item.id">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" :id="item.id" v-model="item.done">
                        <label class="custom-control-label" :class="item.done ? 'delete' : ''" :for="item.id">{{
                                item.task
                        }}</label>
                    </div>
                    <div class="start">
                        <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
                        <span class="badge badge-warning badge-pill" v-else>未完成</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.undone {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .undone-drop-down-button {
        width: 100px;
        height: 30px;
        background-color: #fff;
    }
    .container{
        width: 100%;
        height: 50px;
        background-color: #fff;
    }
}
</style>