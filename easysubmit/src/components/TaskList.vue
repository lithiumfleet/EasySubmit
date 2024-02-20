<script setup>
import taskCard from "./taskcard/TaskCard.vue"
</script>

<template>
<el-scrollbar class="list-container">
  <ul class="list">
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
    <li class="list-item"> <taskCard/> </li>
  </ul>
</el-scrollbar>
</template>

<style>
.list-container {
  display: flex;
  height: 800px;
  width: 100%;
}
.list {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

.list-item {
  flex-basis: 25%; 
  list-style-type: none; 
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
}

</style>