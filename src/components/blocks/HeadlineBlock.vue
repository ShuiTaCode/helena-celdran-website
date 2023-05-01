<template>
  <div
    style="
      border: none;
      background-color: transparent;
      width: 100%;
    "
  >
    <div class="block flex-row between" style="width: 100%; height: 100%">
      <div
        class="flex-row start"
        style="width: 30%; border-bottom: solid 2px black"
      >
        <div
            class="top-left"
          style="
            width: 50%;

          "
        ></div>
      </div>
      <div class="flex-col end" style="width: 5%">
        <div class="bottom-right"
          style="
            width: 100%;
            height: 70%;
          "
        ></div>
      </div>
    </div>
    <div class="text">
      <div style="color:#975A16">
        HELENA CELDRAN GREEN
      </div>

      <div style="font-size: 1rem">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>

    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.text {
  padding: 60px 80px 80px 80px;
  font-size: 3rem;
  position: relative;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
}

.bottom-right{
  border-right: solid 2px black;
  border-bottom: solid 2px black;
}
.top-left{
  border-left: solid 2px black;
  border-top: solid 2px black;
}
.block {
  background-color: white;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.start {
  justify-content: flex-start;
}
.end {
  justify-content: flex-end;
}
.between {
  justify-content: space-between;
}
</style>
