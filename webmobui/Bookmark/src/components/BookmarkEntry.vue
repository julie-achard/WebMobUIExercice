<script setup>
defineProps({
  bookmark: Object,
});
</script>

<template>
  <div>
    <div>
      <a :href="bookmark.url" target="_blank">{{ bookmark.label }}</a>
    </div>
    <div>{{ bookmark.tags }}</div>
    <div>
      <button @click="remove(bookmark)">Remove</button>
      <button @click="modify(bookmark)">Modify</button>
    </div>
  </div>
</template>

<style scoped></style>
