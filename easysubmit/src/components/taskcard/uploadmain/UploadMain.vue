<script setup>
import TeamInfoBox from './TeamInfoBox.vue';
import PersonalInfoBox from './PersonalInfoBox.vue';
import UploadBox from './UploadBox.vue';
</script>
<script>
export default {
    props: {
        info: Object
    },
    methods: {
        onUpdateInfoname(name) {
            this.info.personalinfo.name = name;
        },
        onUpdateInfonumber(number) {
            this.info.personalinfo.number = number;
        },
        onUpdateTeaminfo(tabledata) {
            this.info.teaminfo = tabledata;
        }
    }
}

</script>

<template>
    <div class="main">
        <div class="description-area">
            <el-text type="primary" size="large"><strong>任务描述: </strong></el-text>
            <br/>
            <br/>
            <el-text>&emsp;&emsp;&emsp;{{ info.description }}</el-text>
        </div>
        <el-divider border-style="double">
            <el-icon size="large"><MostlyCloudy /></el-icon>
        </el-divider>
        <TeamInfoBox v-if="info.tasktype==='teamwork'"
            @update-teaminfo="onUpdateTeaminfo"
        />
        <PersonalInfoBox v-else 
            @update-name="onUpdateInfoname" 
            @update-number="onUpdateInfonumber"
        />
        <UploadBox :info="info"/>
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