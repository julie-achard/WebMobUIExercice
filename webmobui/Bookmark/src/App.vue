<script setup>
import TheHeader from "./components/TheHeader.vue";
import { bookmarks, remove, add as addBookmarks } from "./stores/bookmarks";
import BookmarkEntry from "./components/BookmarkEntry.vue";
import BookmarkForm from "./components/BookmarkForm.vue";
import { ref, computed } from "vue";

const showForm = ref(false);

// addBookmarks({
//   label: "Vue.js",
//   url: "https://vuejs.org/",
//   tags: "javascript framework",
// });

// const entry2 = {
//   label: "Ex",
//   url: "https://example.com/",
//   tags: "example",
// };

// addBookmarks(entry2);
// console.log(bookmarks.value);
// remove(entry2);
// console.log(bookmarks.value);

const filterBy = ref("");
const filteredBookmarks = computed(() => {
  return bookmarks.value.filter((bookmark) => {
    return bookmark.label.toLowerCase().includes(filterBy.value.toLowerCase());
  });
  const orderedBookmarks = computed(() => {
    return filteredBookmarks.value.sort((a, b) => {
      return a.label.localeCompare(b.label);
    });
  });
});
</script>

<template>
  <the-header>Bookmarks</the-header>
  <div>
    <label>Filter by</label>
    <input type="text" v-model="filterBy" />
  </div>
  <bookmark-form />
  <bookmark-form v-if="showForm" @close="showForm = false" />
  <bookmark-entry v-for="bookmark of bookmarks" :bookmark="bookmark" />
</template>

<style scoped>
header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  position: center;
  top: 0;
  z-index: 1;
}

div {
  position: absolute;
  top: 5rem;
}
</style>
