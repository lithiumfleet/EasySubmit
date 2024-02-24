<script setup>
import taskList from "./TaskList.vue"
import aboutProject from "./aboutpage/AboutProject.vue";
</script>

<template>
    <el-tabs type="border-card" tabPosition="left">
        <el-tab-pane>
            <template #label>
                <div class="tab-label">
                    <img src="@/assets/icons8-ddl-80.png"/>
                    <h3>进行中&emsp;</h3>
                </div>
            </template>
            <taskList/>
        </el-tab-pane>
        <el-tab-pane label="已完成">
            <template #label>
                <div class="tab-label">
                    <img src="@/assets/icons8-finish-80.png"/>
                    <h3>已完成&emsp;</h3>
                </div>
            </template>
            <taskList
                serverUrl="http://127.0.0.1:3000/tasklist/finished" 
                :enableCards="false"
            />

        </el-tab-pane>
        <el-tab-pane label="About">
            <template #label>
                <div class="tab-label">
                    <img src="@/assets/icons8-search-80.png"/>
                    <h3>提交记录</h3>
                </div>
            </template>
            <p>待完善...</p>
        </el-tab-pane>

        <el-tab-pane label="About">
            <template #label>
                <div class="tab-label">
                    <img src="@/assets/icons8-about-80.png"/>
                    <h3>更多信息</h3>
                </div>
            </template>
            <aboutProject/>
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped>
.el-tabs {
    --el-tabs-header-height: 115px;
}
.tab-label {
    display: flex;
    align-items: center;
}
.el-tabs.el-tabs--left.el-tabs--border-card {
    width: 100%;
}
</style>