import { db } from "./firebase.js";
import {
  doc, setDoc
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

export const setUsers = async (name, usuario, uid) => {
  try {
    const docRef = await setDoc(doc(db, "users", uid), {
      Nombre: name,
      Usuario: usuario,
      Rol: ""
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
