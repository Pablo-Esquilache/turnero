import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { register_container, login_container} from "./app.js";

export const logout = document.querySelector(".logout");

export const logout_ = () => {
  logout.addEventListener("click", () => {
    auth
      .signOut()
      .then(() => {
      })
      .then(() => {
        window.location.href = "../index.html";
        login_container.style.display = "flex";
        register_container.style.display = "none";
      });
  });
}

