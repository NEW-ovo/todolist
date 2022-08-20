<template>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="Search"
        :prefix-icon="Search"
      />
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
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