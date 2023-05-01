<template>
  <div style="display: flex">
    <img class="responsive-image" src="/portrait.jpg" alt="not found" style="margin-right: 2rem">
    <div style="display: flex;flex-direction: column;justify-content: flex-end;">

      <div class="half-border">
        <div class="content">
          Helena <br>
          Celdrán Green
        </div>
      </div>
      <div style="width: 20vw;max-width: 200px;height: 30%">
        Ficiet perrovidis doluptam, sunt.
        Eni bea con pro tet ad mo od qui
        ommolore volorem conse venditi
        utatur ratibus, iliquia dollenis sen-
        dessequia am, alitatur aut lam aut
        aceperu metur.
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.half-border{
  margin-left: 1.3rem;
  margin-bottom: 2rem;
  position: relative;
  height: 30%;
  width: 100%;
  max-width: 200px;
  border-top: solid 1px black;
  border-right: solid 1px black;
}

.responsive-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.content{
  font-size: 2rem;
  line-height: 2.2rem;
  position: absolute;
  top: 20%;
  left: -40%;
}
</style>