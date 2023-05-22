import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { register_container, login_container, form_container } from "./app.js";

export const logout = document.querySelector(".logout");

export const logout_ = () => {
  logout.addEventListener("click", () => {
    auth
      .signOut()
      .then(() => {
      })
      .then(() => {
        register_container.style.display = "none";
        form_container.style.display = "none";
        login_container.style.display = "flex";
      });
  });
}

