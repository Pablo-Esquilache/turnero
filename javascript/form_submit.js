import { setTurn } from "./set_turn.js";
import { userEmail } from "./login.js";

const $form = document.getElementById("form_turnos");

export const formSubmit = () => {
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name_turns = document.getElementById("name_turns").value;
    let tel = document.getElementById("tel").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    
    setTurn(name_turns, userEmail , tel, date, time);

    $form.reset();
  });
};
