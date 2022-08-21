<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <!-- <el-menu-item index="2">
                    <el-icon>
                        <Sunny />
                    </el-icon>
                    <span>我的一天</span>
                </el-menu-item> -->
                <el-menu-item index="3">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>全部</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <Checked />
                    </el-icon>
                    <span>已完成</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
</script>
