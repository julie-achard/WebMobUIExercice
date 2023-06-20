import { ref } from "vue";

import { useLocalStorage } from "../composables/localStorage";

export const { value: bookmarks } = useLocalStorage("bookmarks", []);

//fonction d'ajout de bookmark
//Je lui passe un objet qui contient label, url et tags
export function add({ label, url, tags }) {
  bookmarks.value.push({
    label,
    url,
    tags,
  });
  console.log(bookmarks.value);
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

//fonction de mise à jour de bookmark
export function update(bookmark, newBookmark) {
  const index = bookmarks.value.indexOf(bookmark);
  bookmarks.value.splice(index, 1, newBookmark);
}

//Fonction de validation
export function validate(bookmark) {
  return true;
}
