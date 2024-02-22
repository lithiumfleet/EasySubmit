<script setup>
import TeamInfoBox from './TeamInfoBox.vue';
import PersonalInfoBox from './PersonalInfoBox.vue';
import UploadBox from './UploadBox.vue';
</script>
<script>
export default {
    props: {
        tasktype: String,
        description: String
    }
}

</script>

<template>
    <div class="main">
        <div class="description-area">
            <el-text type="primary" size="large"><strong>任务描述: </strong></el-text>
            <br/>
            <br/>
            <el-text>&emsp;&emsp;&emsp;{{ description }}</el-text>
        </div>
        <el-divider border-style="double">
            <el-icon size="large"><MostlyCloudy /></el-icon>
        </el-divider>
        <TeamInfoBox v-if="tasktype === 'teamwork'"/>
        <PersonalInfoBox v-else/>
        <UploadBox/>
    </div>
</template>

<style scoped>
.description-area {
    width: 60%;
    text-align: left;
    position: relative;
    margin-bottom: 20px;
}

</style>