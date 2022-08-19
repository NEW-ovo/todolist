<!-- 已完成列表的切换 -->
<template>
    <div class="button-container mt-3">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn" :class="active===0?'btn-primary':'btn-secondary'" @click="changeTO(0)">全部</button>
            <button type="button" class="btn" :class="active===1?'btn-primary':'btn-secondary'" @click="changeTO(1)">已完成</button>
            <button type="button" class="btn" :class="active===2?'btn-primary':'btn-secondary'" @click="changeTO(2)">未完成</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'ToDoButtom',
    emits:['update:active',],
    props: {
        active: {
            type: Number,
            require: true,
            default:0,
        }
    },
    methods: {
        changeTO(id) {
            if (id === this.active) return
            this.$emit('update:active',id)
        }
    }
}
</script>

<style>
</style>