<script>
export default{
  data() { return {
    tableData:[],
    new_student:{
      student_name:"",
      student_number:""
    }
  } },

  methods: {
    deleteRow(index) {
      this.tableData.splice(index, 1);
    },
    onAddItem() {
      this.tableData.push(Object.assign({},this.new_student));
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
        <el-input v-model="new_student.student_number"/>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="new_student.student_name"/>
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
    <el-table :data="tableData" style="width: 100%" max-height="200">
      <el-table-column prop="student_number" label="学号" width="120" />
      <el-table-column prop="student_name" label="姓名" width="120" />
      <el-table-column label="编辑" width="80">
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
}
</style>