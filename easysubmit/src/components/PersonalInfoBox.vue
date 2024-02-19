<script>
export default {
    data() { return {
        new_personal_info: {
            student_number: "",
            student_name: ""
        }
    } },
}
</script>

<template>
    <el-form :inline="true" >
        <el-form-item label="学号">
            <el-input 
                v-model="new_personal_info.student_number" 
                placeholder="2022XXXXXX" 
                clearable 
            />
        </el-form-item>
        <el-form-item label="姓名">
            <el-input 
                v-model="new_personal_info.student_name" 
                placeholder="XXX" 
                clearable 
            />
        </el-form-item>
    </el-form>
</template>

<style></style>