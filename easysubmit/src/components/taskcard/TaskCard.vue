<script setup>
import uploadMain from "./uploadmain/UploadMain.vue"
</script>
<script>
export default {
    props: {
        enable: {
            type: Boolean,
            default: true
        },
        tasktype: {
            type: String,
            default: "personal"
        },
        taskname: {
            type: String,
            default: "new-task"
        },
        project: {
            type: String,
            default: "new-project"
        },
        description: {
            type: String,
            default: "description"
        },
        starting_time: {
            type: String,
            default: "2024-1-1"
        },
        dead_line: {
            type: String,
            default: "2024-1-1"
        },
        icon: {
            type: String,
            default: "/src/assets/default_icon.png"
        }
    },
    data() {
        return {
            uploadCardVisiable: false,
            info: {
                tasktype: this.tasktype,
                taskname: this.taskname,
                project: this.project,
                description: this.description,
                starting_time: this.starting_time,
                dead_line: this.dead_line,
                personalinfo: {
                    name: "",
                    number: ""
                },
                teaminfo: []
            }
        }
    },
    methods: {
        open_upload_card() {
            if (this.enable) {
                this.uploadCardVisiable = true;
            }
        }
    }
}
</script>

<template>
    <el-card shadow="always" @click="open_upload_card">
        <div class="card">
            <div class="content">
                <h1>{{ taskname }}</h1>
                <h3>{{ project }}</h3>
                <img :src="icon"/>
                <div class="due-time">
                    <p>{{ starting_time }} 至 {{ dead_line }}</p>
                </div>
            </div>
            <div class="continue-icon" >
                <el-icon class="icon-box" size="40">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg>
                </el-icon>
            </div>
        </div>
    </el-card>

    <el-dialog v-model="uploadCardVisiable" title="提交文件" width="1000">
        <uploadMain :info="info"/>
        <div class="button-warp">
            <div class="button">
                <el-button @click="uploadCardVisiable=false">取消提交</el-button>
            </div>
        </div>
    </el-dialog>


</template>

<style>
.card {
    display: flex;
}
.content {
    height: 100%;
    width: 330px;
    border-right: 2px dashed #bfbdbd;
}
.continue-icon {
    display: flex;
    align-items: center;
}
.icon-box {
    position: relative;
    margin-right: 0px;
}
.icon {
    margin-right: 0px
}
.button-warp {
    position: absolute;
    left: 77%;
    bottom: 16px;
}
.button {
    position: relative;
    left: 35%;
}
</style>