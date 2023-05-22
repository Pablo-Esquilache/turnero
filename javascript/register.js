import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { register_container, login_container } from "./app.js";
import { setUsers } from "./set_users.js";
import { logout } from "./logout.js";
import { btn_login, btn_register } from "./observer.js";

const form_register = document.querySelector("#form_register");

export const register_ = () => {
  form_register.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email_register = document.querySelector("#email_register").value;
    let passw_register = document.querySelector("#passw_register").value;

    createUserWithEmailAndPassword(auth, email_register, passw_register)
      .then((userCredential) => {
        let usuario = userCredential.user.email;
        let uid = userCredential.user.uid;
        setUsers(name, usuario, uid);
        form_register.reset();
      })
      .then(() => {
        register_container.style.display = "none";
        login_container.style.display = "flex";
        logout.classList.add("disabled");
        btn_register.classList.remove("disabled");
      btn_login.classList.remove("disabled");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
};