import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

export const logout = document.querySelector(".logout");

export const logout_ = () => {
  if (logout) {
    logout.addEventListener("click", () => {
      auth
        .signOut()
        .then(() => {})
        .then(() => {
          window.location.href = "../index.html";
        });
    });
  }
};