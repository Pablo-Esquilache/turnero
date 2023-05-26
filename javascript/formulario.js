import { loadTurnos } from "./load_turns.js";
import { formSubmit } from "./form_submit.js";
import { logout_ } from "./logout.js";

export const msg_turnOk = document.querySelector(".msg_turnOk");

window.addEventListener("DOMContentLoaded", () => {
  loadTurnos();
  formSubmit();
  logout_;
  
  let currentDate = new Date().toISOString().split("T")[0];
  document.getElementById("date").setAttribute("min", currentDate);
});
