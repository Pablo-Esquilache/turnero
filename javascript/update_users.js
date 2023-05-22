import { db } from "./firebase.js";
import {
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

export const updateUser = (id, rol) => updateDoc(doc(db, "users", id), rol);
