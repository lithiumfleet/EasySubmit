<script setup>
import { ElNotification } from 'element-plus'
</script>
<script>
export default {
    props: {
        info: Object
    },
    data() {return {
        filelist: []
    }},
    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        successAlert() {
            this.filelist = []; // clean filelist
            ElNotification({
                title: 'Success',
                message: '提交成功, 可以关闭窗口了.',
                type: 'success',
            })
        },
        errorAlert() {
            ElNotification({
                title: 'Error',
                message: '请检查网络环境, 如果确定是服务器问题请联系我.',
                type: 'error',
            })
        }
    }
}
</script>
<template>
    <el-upload
        class="upload-box"
        ref="upload"
        drag
        :action="`http://127.0.0.1:3000/upload/${info.tasktype}`"
        :multiple="true"
        :show-file-list="true"
        :auto-upload="false"
        :on-success="successAlert"
        :on-error="errorAlert"
        :file-list="filelist"
        :data="{submit_info:JSON.stringify(info)}"
    >
        <el-icon size="80">
            <DocumentAdd/>
        </el-icon>
        <div class="upload-content">
            <br/>
            拖动文件到此处或<em>点击上传</em>文件
            <br/>
            请保证单个文件大小在<strong>10MB</strong>以下~
        </div>
    </el-upload>
    <div class="submit-button">
        <el-button type="primary" @click="submitUpload">提交文件</el-button>
    </div>
</template>

<style scoped>
.submit-button {
    text-align: right;
}
</style>