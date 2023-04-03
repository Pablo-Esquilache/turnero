import { auth } from "../firebase.js";
import { deleteUser } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";


const auth = getAuth();
const user = auth.currentUser;

deleteUser(user).then(() => {
  // User deleted.
}).catch((error) => {
  // An error ocurred
  // ...
});