<template>
    <div class="">
        <form class="form-inline" @submit.prevent="onsubmit">
                <div class="input-group-prepend">
                    <div class="input-group-text">task</div>
                    <input type="text" class="form-control" placeholder="曹桑" v-model.trim="taskname">
                </div>

            <div>
                <button type="submit" class="btn btn-primary mb-2">New</button>
            </div>
        </form>
    </div>

</template>

<script>
export default {
    name: 'ToDoInput',
    emits: ['add',],
    data() {
        return {
            taskname: '',
        }
    },
    methods: {
        onsubmit() {
            if (!this.taskname) return alert('say some')
            this.$emit('add', this.taskname)
            this.taskname = ''
        }
    }
}

</script>

<style lang="less" scoped>
form {
    display: flex;
    flex-wrap: nowrap;
    .form-control{
        flex: 1;
    }
}
</style>
