import { observer } from "./observer.js";
import { login_ } from "./login.js";
import { register_ } from "./register.js";
import { logout_ } from "./logout.js";
// import { loadTurnos } from "../javascript_form/form.js";

const login = document.querySelector(".login");
const register = document.querySelector(".register");
export const login_container = document.querySelector(".login_container");
export const link_register = document.querySelector(".link_register");
export const register_container = document.querySelector(".register_container");
export const form_container = document.querySelector(".turnos_container");
export const msg_usuario_login = document.querySelector(".msg_usuario_login");
export const msg_password_login = document.querySelector(".msg_password_login");
export const msg_turnOk = document.querySelector(".msg_turnOk");

// ------------------------------------------------------------------------

window.addEventListener("DOMContentLoaded", async () => {
  observer();
  login_();
  register_();
  logout_();
  //loadTurnos();
});

// ------------------------------------------------------------------------

login.addEventListener("click", () => {
  login_container.style.display = "flex";
  register_container.style.display = "none";
});

link_register.addEventListener("click", () => {
  login_container.style.display = "none";
  register_container.style.display = "flex";
});

// ------------------------------------------------------------------------

register.addEventListener("click", () => {
  login_container.style.display = "none";
  register_container.style.display = "flex";
});

// ------------------------------------------------------------------------



