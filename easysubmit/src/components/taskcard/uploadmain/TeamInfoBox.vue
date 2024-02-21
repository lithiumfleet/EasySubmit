<script setup>
import { check_valid_student_name, check_valid_student_number } from './CheckValid';
</script>

<script>
export default {
  data() { return {
    tableData:[],
    new_student:{
      student_name:undefined,
      student_number:undefined
    }
  } },
  methods: {
    deleteRow(index) {
      this.tableData.splice(index, 1);
    },
    onAddItem() {
      if (check_valid_student_name(this.new_student.student_name) 
          && check_valid_student_number(this.new_student.student_number)
          ) {
          this.tableData.push(Object.assign({},this.new_student));
        }
    }
  }
}
</script>

<template>
  <div class="main">
    <el-form
      label-width="60px"
      style="max-width: 300px"
    >
      <el-form-item label="学号">
          <el-input-number
              v-model="new_student.student_number" 
              placeholder="2022xxxxxx" 
              size="large"
              :controls="false"
          />
      </el-form-item>
      <el-form-item label="姓名" >
        <el-input 
            v-model="new_student.student_name" 
            placeholder="XXX" 
            size="large"
        />
      </el-form-item>
      <el-form-item>
        <el-button 
          class="mt-4" 
          @click="onAddItem"
        >
          <strong>添加至小组成员</strong> 
        </el-button >
      </el-form-item>
    </el-form>
    <!-- 表格部分 -->
    <el-table :data="tableData" style="width: 70%" max-height="200">
      <el-table-column prop="student_number" label="学号" />
      <el-table-column prop="student_name" label="姓名" />
      <el-table-column label="编辑" >
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
          >
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<style scoped>
.main {
  display: flex;
  justify-content: space-between;
}
</style>