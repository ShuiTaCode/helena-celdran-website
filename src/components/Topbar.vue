<template>
  <div class="flex-row">
    <div class="top-bar-item"><router-link to="/edit">EDIT</router-link>   </div>
    <div class="top-bar-item"><router-link to="/">HOME</router-link></div>
    <div class="top-bar-item">SOBRE MI</div>
    <div class="top-bar-item">CONTACTO</div>
<!--    <div class="top-bar-item" style="margin-right: 2rem">-->
<!--      <i class="pi pi-search"></i>-->
<!--    </div>-->
  </div>
</template>

<script setup></script>

<style scoped>
.flex-row {
  width: 100%;
  height: 10vh;
  background-color: white;
  opacity: 95%;
  display: flex;
  justify-content: flex-end;

}
.top-bar-item {
  margin: 1rem;
}
</style>
