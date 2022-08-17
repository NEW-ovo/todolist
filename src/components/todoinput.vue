<template>
    <div class="col-md-4 offset-md-4">
        <form class="form-inline" @submit.prevent="onsubmit">
            <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">task</div>
                </div>
                <input type="text" class="form-control"  placeholder="曹桑" v-model.trim="taskname">
            </div>
            <button type="submit" class="btn btn-primary mb-2">New</button>
        </form>
    </div>

</template>

<script>
export default {
    name: 'ToDoInput',
    emits:['add',],
    data() {
        return{
            taskname:'',
        }
    },
    methods: {
        onsubmit() {
            if (!this.taskname) return alert('say some')
            this.$emit('add', this.taskname)
            this.taskname=''
        }
    }
}

</script>

<style lang="less" scoped>
</style>
