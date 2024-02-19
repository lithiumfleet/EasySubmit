<script setup>
import mainTitle from "./components/MainTitle.vue"
import leftBar from "./components/LeftBar.vue"
import infoArea from "./components/InfoArea.vue"
</script>

<template>
<div>
  <div class="site-title">
    <mainTitle/>
  </div>
  <div class="main-content">
    <div class="leftbar">
      <leftBar/>
    </div>
  </div>
  <div class="info-area">
    <infoArea/>
  </div>
</div>

</template>

<style scoped>
.site-title {
  height: 100px;
  width: 100%;
  align-items: stretch;
}
.main-content {
  align-items: stretch;
  height: 600px;
  width: 100%;
  display: flex;
}
.main-content .leftbar {
  height: 100%;
  width: 100%;
}
.info-area{
    height: 200px;
    width: 100%;
}
</style>
