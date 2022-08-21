<template>
    <el-form :model="form" @submit.prevent="onFormSubmit">
        <el-form-item>
            <el-input v-model="form.taskname" placeholder="添加任务">
                <template #prefix>
                    <el-icon>
                        <Plus />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>

    </el-form>

</template>

<script>
export default {
    name: 'Input',
    emits: ['add'],
    data() {
        return {
            form:{
            taskname: '',                
            },
    }
},
methods: {
    // 表单提交的事件处理函数
    onFormSubmit() {
        console.log('in');
        if (!this.form.taskname) return alert('任务名称不能为空！')
        // 2. 触发自定义的 add 事件，并向外界传递数据
        this.$emit('add', this.form.taskname)
        // 3. 清空文本框
        this.form.taskname = ''
    },
}

}
</script>

<style>
</style>