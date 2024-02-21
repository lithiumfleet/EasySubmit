<script>
export default {
    data() { return {
        new_personal_info: {
            student_number: undefined,
            student_name: undefined
        },
    } },
}
</script>

<template>
    <el-form :inline="true" >
        <el-form-item label="学号">
            <div class="student-number-input-box">
                <el-input-number
                    v-model="new_personal_info.student_number" 
                    placeholder="2022xxxxxx" 
                    size="large"
                    :controls="false"
                />
            </div>
        </el-form-item>
        <el-form-item label="姓名">
            <div class="student-name-input-box">
                <el-input 
                    v-model="new_personal_info.student_name" 
                    placeholder="XXX" 
                    size="large"
                />
            </div>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.student-number-input-box {
    border: 1px solid #dcdfe6;
}
.student-name-input-box {
    border: 1px solid #dcdfe6;
}
</style>