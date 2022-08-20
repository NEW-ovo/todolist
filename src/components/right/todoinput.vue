<template>
  <div class="demo-input-suffix search-container">
        <el-icon><Plus /></el-icon>
      <el-input v-model="input2"  placeholder="Search" :prefix-icon="Search" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
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
.container{
    width: 100%;
    height: 50px;
}
.search {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 50px;
    padding: 0 15px;

    .iconfont {
        position: absolute;
        right: 15px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }

    .input {
        width: 100%;
        border-radius: 5px;
    }

}
</style>
