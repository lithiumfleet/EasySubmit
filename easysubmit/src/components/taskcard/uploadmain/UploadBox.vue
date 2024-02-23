<script setup></script>
<template>
    <el-upload
        class="upload-box"
        drag
        action="http://127.0.0.1:3000/upload/personal"
        :multiple="true"
        :auto-upload="true"
        :show-file-list="true"
    >
        <el-icon size="80">
            <DocumentAdd/>
        </el-icon>
        <div class="upload-content">
            <br>
            拖动文件到此处或<em>点击上传</em>文件
        </div>
        <template #tip>
        <div class="upload-tips">
            请保证文件大小在<strong>2MB</strong>以下~
        </div>
        </template>
    </el-upload>
</template>

<style scoped></style>