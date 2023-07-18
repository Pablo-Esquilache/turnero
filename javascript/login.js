import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import {
  msg_usuario_login,
  msg_password_login,
  link_register,
} from "./app.js";

const form_login = document.querySelector("#form_login");

let userEmail = "";

export const login_ = () => {
  if (form_login){
  form_login.addEventListener("submit", async (e) => {
    e.preventDefault();

    let email_login = document.querySelector("#email_login").value;
    let passw_login = document.querySelector("#passw_login").value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email_login,
        passw_login
        );
        userEmail = userCredential.user.email;
        link_register.innerText = "Login Exitoso";
        form_login.reset();
      setTimeout(() => {
        link_register.innerText = "registrese aqui";
        window.location.href = "../paginas/formulario.html";
      }, 3000);

      

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (
        errorCode === "auth/user-not-found" &&
        errorCode === "auth/wrong-password"
      ) {
        msg_usuario_login.innerText = "Usuario y contraseña incorrectos";
        msg_password_login.innerText = "Usuario y contraseña incorrectos";
      } else if (errorCode === "auth/user-not-found") {
        console.log("Usuario no encontrado.");
        msg_usuario_login.innerText = "Usuario incorrecto";
      } else if (errorCode === "auth/wrong-password") {
        console.log("Contraseña incorrecta.");
        msg_password_login.innerText = "Contraseña incorrecta";
      } else {
        console.log(errorMessage);
        HTMLBodyElemen;
      }
    }

    setTimeout(() => {
      msg_usuario_login.innerText = "";
      msg_password_login.innerText = "";
    }, 3000);
  });
}
};

console.log(userEmail)
export { userEmail };
