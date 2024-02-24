<script setup>
import { check_valid_student_name, check_valid_student_number } from './CheckValid';
</script>

<script>
export default {
  data() { return {
    tableData:[],
    tableDataSet: new Set(),
    new_student:{
      name:undefined,
      number:undefined
    }
  } },
  methods: {
    deleteRow(index) {
      let delitem = this.tableData.splice(index, 1);
      this.tableDataSet.delete(delitem[0].name+delitem[0].number);
      this.$emit('update-teaminfo', this.tableData);
    },
    onAddItem() {
      if (check_valid_student_name(this.new_student.name) && 
          check_valid_student_number(this.new_student.number) &&
          !this.tableDataSet.has(this.new_student.name+this.new_student.number)
          ) {
          this.tableData.push(Object.assign({},this.new_student));
          this.tableDataSet.add(this.new_student.name+this.new_student.number);
          this.$emit('update-teaminfo', this.tableData);
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
              v-model="new_student.number" 
              placeholder="2022xxxxxx" 
              size="large"
              :controls="false"
          />
      </el-form-item>
      <el-form-item label="姓名" >
        <el-input 
            v-model="new_student.name" 
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
    <el-table :data="tableData" stripe style="width: 70%" max-height="200">
      <el-table-column prop="number" label="学号" />
      <el-table-column prop="name" label="姓名" />
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