<script setup>
import Topbar from "@/components/Topbar.vue";
import MultiLingualCockieBanner from "@/components/MultiLingualCockieBanner.vue";
</script>

<template>
<Topbar></Topbar>
<div class="basic-layout">
  <router-view></router-view>
</div>
  <MultiLingualCockieBanner></MultiLingualCockieBanner>
</template>

<style scoped>

.basic-layout{
  display: flex;
  justify-content: center;
}


</style>
