import { db } from "./firebase.js";
import {
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

export const getUsers = (callback) =>
  onSnapshot(collection(db, "users"), callback);