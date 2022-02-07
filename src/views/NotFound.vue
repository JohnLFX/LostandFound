<template>
  <div class="container">
    <div class="text">
      <h2 style="color: orangered;">404 Not Found</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: lightgray;
}

.text {
  position: fixed;
  z-index: 1;
}
</style>