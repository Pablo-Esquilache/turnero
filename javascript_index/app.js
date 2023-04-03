import { observer } from "../observer.js";
import { login_ } from "./login.js";
import { register_ } from "./register.js";
import { logout_ } from "./logout.js";
import { getTurns } from "../get_turns.js";
import { turnRegister } from "./turn_register.js";
import { formSubmit } from "./form_submit.js";

export let turnos = [];

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

const loadTurnos = () => {
  getTurns((querySnapshot) => {
    turnos = [];
    querySnapshot.forEach((doc) => {
      turnos.push({ id: doc.id, ...doc.data() });
    });
    turnRegister(turnos);
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  observer();
  login_();
  register_();
  logout_();
  loadTurnos();
  formSubmit();
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

let currentDate = new Date().toISOString().split('T')[0];
document.getElementById("date").setAttribute("min", currentDate);

