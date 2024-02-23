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
        onupdateinfoname(name) {
            this.info.personalinfo.name = name;
        },
        onupdateinfonumber(number) {
            this.info.personalinfo.number = number;
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
        />
        <PersonalInfoBox v-else 
            @update-name="onupdateinfoname" 
            @update-number="onupdateinfonumber"
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