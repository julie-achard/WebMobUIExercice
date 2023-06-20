<script setup>
function add() {
  console.log("add");
}
</script>

<template>
  <!-- ne pas faire  le comportement par défaut avec le prevent -->
  <form @submit.prevent="add()">
    <input type="text" placeholder="label" />
    <input type="url" placeholder="url" />
    <input type="text" placeholder="tags" />
    <button>Add</button>
    <button>Cancel</button>
  </form>
</template>

<style scoped>
* {
  display: block;
}
</style>
