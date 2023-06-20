<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { add as addBookmarks } from "../stores/bookmarks.js";

const emits = defineEmits(["close"]);
const props = defineProps({
  bookmark: {
    type: Object,
    required: false,
    default: () => ({
      label: "",
      url: "",
      tags: "",
    }),
  },
  mode: {
    type: String,
    required: false,
    default: "add",
    validator: (value) => ["add", "edit"].includes(value),
  },
});
//pour que le focus soit sur le label
const elLabel = ref(null);

const label = ref(props.bookmark.label);
const url = ref(props.bookmark.url);
const tags = ref(props.bookmark.tags);

function submit() {
  if (props.mode === "edit") {
    updateBookmarks(props.bookmark, {
      label: label.value,
      url: url.value,
      tags: tags.value,
    });
  } else {
    addBookmarks({
      label: label.value,
      url: url.value,
      tags: tags.value,
    });
  }
  emits.close();
}
function cancel() {
  emits.close();
}
//pour que le focus soit sur le label
onMounted(() => {
  elLabel.value.focus();
});

// onUnmounted(() => {

// });
</script>

<template>
  <!-- ne pas faire  le comportement par défaut avec le prevent -->
  <form @submit.prevent="add()">
    <fieldset>
      <legend v-if="mode == 'add'">Add a bookmark</legend>
      <legend v-if="mode == 'edit'">Edit a bookmark</legend>
      <label>Label: </label>
      <input
        type="text"
        placeholder="label"
        v-model="label"
        ref="elLabel"
        required
      />
      <label>Url: </label>
      <input type="url" placeholder="url" v-model="url" required />
      <label>Tags: </label>
      <input type="text" placeholder="tags" v-model="tags" required />
      <button v-if="mode == 'add'">Add</button>
      <button v-if="mode == 'edit'">Save</button>
      <button @click.prevent="cancel()">Cancel</button>
    </fieldset>
  </form>
</template>

<style scoped>
* {
  display: block;
  margin: 0.5rem;
  padding: 0.5rem;
  top: 0;
}
fieldset {
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
}
legend {
  font-weight: bold;
}
</style>
