import { db } from "./firebase.js";
import { auth } from "./firebase.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
// import { signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import {
  login_container,
  register_container,
  form_container,
} from "./javascript_index/app.js";
import { logout } from "./javascript_index/logout.js";

const btn_admin = document.querySelector(".admin");
export const btn_register = document.querySelector(".register");
export const btn_login = document.querySelector(".login");

export const observer = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const user_uid = user.uid;
      const docRef = doc(db, "users", user_uid);
      form_container.style.display = "flex";
      login_container.style.display = "none";
      register_container.style.display = "none";
      logout.classList.remove("disabled");
      btn_register.classList.add("disabled");
      btn_login.classList.add("disabled");
      getDoc(docRef)
        .then((doc) => {
          if (doc.exists()) {
            const admin = doc.data();
            if (admin.Rol === "administrador") {
              btn_admin.classList.remove("disabled");
            } else {
              btn_admin.classList.add("disabled");
            }
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // setTimeout(() => {
      //   firebase
      //     .auth()
      //     .signOut()
      //     .then(() => {
      //       console.log("Sesión cerrada por inactividad");
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // }, 7200000);
    } else {
      logout.classList.add("disabled");
      btn_register.classList.remove("disabled");
      btn_login.classList.remove("disabled");
      btn_admin.classList.add("disabled");
    }
  });
};
