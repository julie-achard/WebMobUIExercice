<script setup>
import { remove } from "../stores/bookmarks.js";
import BookmarkForm from "./BookmarkForm.vue";
defineProps({
  bookmark: Object,
});
const showForm = ref(false);
</script>

<template>
  <div>
    <div>
      <a :href="bookmark.url" target="_blank">{{ bookmark.label }}</a>
    </div>
    <div>{{ bookmark.tags }}</div>
    <div>
      <button @click="remove(bookmark)">Remove</button>
      <button @click="showForm = true">Modify</button>
      <bookmark-form v-if="showForm" :bookmark="bookmark" mode="edit" />
    </div>
  </div>
</template>

<style scoped></style>
