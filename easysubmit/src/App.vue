<script setup>
import mainTitle from "./components/MainTitle.vue"
import mainContent from "./components/MainContent.vue"
import infoArea from "./components/InfoArea.vue"
</script>

<template>
<div class="main-page">
  <div class="main-page-warp">
    <div class="site-title">
      <mainTitle/>
    </div>

    <div class="main-content">
      <mainContent/>
    </div>

    <div class="info-area">
      <infoArea/>
    </div>
  </div>
</div>

</template>

<style scoped>
.main-page {
  text-align: center;
  width: 100%; 
  background-image: url(./assets/main-bg.jpg);
  background-size: cover;
  z-index: -1;
}
.main-page-warp {
  width: 1300px;
  height: auto;
  position: relative;
  top: 50%;            
  left: 50%; 
  transform: translate(-50%);
}
.site-title {
  position: relative;
  margin-bottom: 8px;
  height: 90px;
  width: 100%;
  align-items: stretch;
}
.main-content {
  align-items: stretch;
  height: 600px;
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 0px;
  margin-bottom: 0px;
}
.info-area{
  align-items: stretch;
  position: relative;
  margin-top: 8px;
  height: 140px;
  width: 100%;
  background-color: rgb(242, 243, 244);
  
}
</style>
