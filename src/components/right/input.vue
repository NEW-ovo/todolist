<template>
    <el-form :model="userStore.form" @submit.prevent="onFormSubmite">
        <el-form-item>
            <el-input v-model="userStore.form.taskname" placeholder="添加任务">
                <template #prefix>
                    <el-icon>
                        <Plus />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>

    </el-form>

</template>

<script lang="ts" setup>
import { useUserStore } from '../../stores/list'
const userStore = useUserStore()
const onFormSubmite = () => {
    userStore.onFormSubmit()
}
</script>