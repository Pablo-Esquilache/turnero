import { db } from "../firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";  

export const editUser = async (id) => {
    const docRef = doc(db, "users", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
    // getDoc(doc(db, "users", id));
}