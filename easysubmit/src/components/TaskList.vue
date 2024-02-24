<script setup>
import taskCard from "./taskcard/TaskCard.vue"
</script>
<script>
export default {
  props: {
    serverUrl: {
      type: String,
      default:'http://127.0.0.1:3000/tasklist/'
    },
    enableCards: {
      type: Boolean,
      default:true
    }
  },
  data() {return {
    tasklist: [],
    serverURL: this.serverUrl
  }},
  created() {
    fetch(this.serverURL)
      .then(response => response.json())
      .then(data => {
        this.tasklist = data;
      })
      .catch(error => {
        console.error('Error:', error);
    });
  }
}

</script>

<template>
<el-scrollbar class="list-container">
  <ul class="list" >
    <li class="list-item" v-for="item in tasklist">
      <taskCard 
        :taskname="item.taskname"
        :project="item.project"
        :tasktype="item.tasktype"
        :description="item.description"
        :starting_time="item.starting_time"
        :dead_line="item.dead_line"
        :icon="item.icon"
        :enable="enableCards"
      /> 
    </li>
  </ul>
</el-scrollbar>
</template>

<style>
.list-container {
  height: 600px;
  width: 100%;
}

.list {
  display: flex;
  flex-wrap: wrap;
}

.list-item {
  flex-basis: 25%; 
  list-style-type: none; 
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 25px;
  margin-bottom: 25px;
}

</style>