<script setup>
import taskList from "./TaskList.vue"
</script>

<template>
    <el-tabs type="border-card" tabPosition="left">
        <el-tab-pane label="正在进行">
            <taskList/>
        </el-tab-pane>
        <el-tab-pane label="已完成">Config</el-tab-pane>
        <el-tab-pane label="About">Task</el-tab-pane>
    </el-tabs>

</template>

<style scoped>
</style>