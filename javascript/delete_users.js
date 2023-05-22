import { db } from "./firebase.js";
import { deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

export const deleteUser =  (id) => {
     deleteDoc(doc(db, "users", id));
}