<script setup>
import Topbar from "@/components/Topbar.vue";
import MultiLingualCockieBanner from "@/components/MultiLingualCockieBanner.vue";
</script>

<template>
<div class="basic-layout">
  <div style="width:100%">
    <Topbar style="width: 100%"></Topbar>
    <router-view></router-view>
  </div>
</div>
  <MultiLingualCockieBanner></MultiLingualCockieBanner>
</template>

<style scoped>

.basic-layout{
  padding: 0 300px 0 300px;
  width: 100%;
  height:100%;
  background-color: white;
  opacity: 95%;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 767px) {
  .basic-layout {
    padding: 0; /* Entfernt den Rand */
    max-width: 100%; /* Setzt die maximale Breite auf 100% */
  }
}


</style>
