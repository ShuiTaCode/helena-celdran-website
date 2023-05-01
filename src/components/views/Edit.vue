<template>
  <div>
    <div style="display: flex; padding: 0 0 0.5rem 0.5rem; width: 100%">
      <div
        style="
          margin-right: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 30%;
        "
      >
        Título del artículo
      </div>
      <InputText style="width: 70%"></InputText>
    </div>
    <div style="display: flex; padding: 0 0 0.5rem 0.5rem; width: 100%">
      <div
        style="
          margin-right: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 30%;
        "
      >
        Subtítulo del artículo
      </div>
      <InputText style="width: 70%"></InputText>
    </div>

    <div style="display: flex; padding: 0 0 0.5rem 0.5rem; width: 100%">
      <div
        style="
          margin-right: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 30%;
        "
      >
        Categoría asignada
      </div>
      <Dropdown :options="categoryOptions" style="width: 70%"></Dropdown>
    </div>

    <Editor style="height: 50vh"></Editor>
  </div>
</template>

<script setup>
import { ref } from "vue";

const categoryOptions = ref([
  "Informaciones sobre arte",
  "Artistas",
  "Reportajes en papel",
  "Turismo",
  "Sección destacada",
]);
import Logo from "@/components/Logo.vue";
</script>

<style scoped></style>
