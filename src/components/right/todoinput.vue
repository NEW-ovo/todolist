<template>
    <el-form @submit.prevent="onFormSubmit">
        <el-form-item>
            <el-input class="w-50 m-2" placeholder="添加任务" v-model.trim="taskname">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <search />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
    </el-form>
</template>

<script >
export default {
    name: 'ToDoInput',
    emits: ['add',],
    data() {
        return {
            taskname: '',
        }
    },
    methods: {
        // 表单提交的事件处理函数
        onFormSubmit() {
            // 1. 判断任务名称是否为空
            if (!this.taskname) return alert('任务名称不能为空！')
            // 2. 触发自定义的 add 事件，并向外界传递数据
            this.$emit('add', this.taskname)
            // 3. 清空文本框
            this.taskname = ''
        },
    },

}

</script>

<style lang="less" scoped>
</style>
