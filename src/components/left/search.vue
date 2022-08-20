<template>
  <div class="demo-input-suffix search-container">
      <el-input v-model="input2"  placeholder="Search" :prefix-icon="Search" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input2 = ref('')
</script>


<style lang="less" scoped>

.search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    padding: 0 15px;
}
</style>