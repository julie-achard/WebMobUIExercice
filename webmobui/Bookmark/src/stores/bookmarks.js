import { ref } from "vue";
export const bookmarks = ref([]);

//fonction d'ajout de bookmark
//Je lui passe un objet qui contient label, url et tags
export function add({ label, url, tags }) {
  bookmarks.value.push({
    label,
    url,
    tags,
  });
}

//fonction de suppression de bookmark
export function removeByIdex(index) {
  bookmarks.value.splice(index, 1);
}
//Va chercher l'index du bookmark et le supprime
export function remove(bookmark) {
  const index = bookmarks.value.indexOf(bookmark);
  removeByIdex(index);
}
