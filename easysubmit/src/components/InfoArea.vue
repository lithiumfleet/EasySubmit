<script setup>
</script>

<template>
    <div class="text-area">
        <el-text class="text-area-warp">
            <p>
                <el-icon size="24" color="red"><WarnTriangleFilled /></el-icon>
                <strong>这个网站为测试网站, 可能出现的现象包括但不限于:</strong><br/>
                &emsp;1.&emsp;NAT失败,网站突然关闭;<br/>
                &emsp;2.&emsp;文件提交不成功且没有提示;<br/>
                &emsp;3.&emsp;我的ASUS突然崩了, 你们的文件都没了;<br/>
                总之, 请在提交前做好备份. 不放心的话请直接通过QQ发给我就好.
            </p>
        </el-text>
    </div>
    
</template>

<style scoped>
.text-area {
    display: flex;
    text-align: center;
    justify-content: center;
}
.text-area-warp {
    text-align: left;
}
li {
    list-style-type: none;
}
</style>