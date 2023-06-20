<script setup>
import TheHeader from "./components/TheHeader.vue";
import { bookmarks, remove, add as addBookmarks } from "./stores/bookmarks";
import BookmarkEntry from "./components/BookmarkEntry.vue";
import BookmarkAdd from "./components/BookmarkAdd.vue";

addBookmarks({
  label: "Vue.js",
  url: "https://vuejs.org/",
  tags: "javascript framework",
});

// const entry2 = {
//   label: "Ex",
//   url: "https://example.com/",
//   tags: "example",
// };

// addBookmarks(entry2);
// console.log(bookmarks.value);
// remove(entry2);
// console.log(bookmarks.value);
</script>

<template>
  <the-header>Bookmarks</the-header>

  <bookmark-add />

  <bookmark-entry v-for="bookmark of bookmarks" :bookmark="bookmark" />
</template>

<style scoped>
header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  position: absolute;
  top: 0;
  z-index: 1;
}
</style>
