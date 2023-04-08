import { turns_container } from './print_turns.js';
import { deleteTurn } from './delete_turn.js';
import { editTurn } from './edit_turns.js';
import { updateTurn } from './update_turns.js';

const turn_date = document.querySelector('#turn_date');
const turn_hora = document.querySelector('#turn_hora');
const save_new_date = document.querySelector('#save_new_date');
const save_new_hora = document.querySelector('#save_new_hora');
let id = ""

export const turnCard = (turn) => {
    let turns_card = document.createElement('div');
    turns_card.className = 'turns_card';
    turns_card.innerHTML= 
    `<h3>Nombre: ${turn.Nombre}</h3>
    <h4>Usuario: ${turn.Email}</h4>
    <p>Celular: ${turn.Celular}</p>
    <p>Fehca: ${turn.Fecha}</p>
    <button class="btn_edit_date" data-id="${turn.id}">Editar fecha</button>
    <p>Hora: ${turn.Hora}</p>
    <button class="btn_edit_hora" data-id="${turn.id}">Editar hora</button>
    <button class="btn_delete" data-id="${turn.id}">Eliminar</button>`;

    turns_container.appendChild(turns_card);

    const btn_delete = turns_card.querySelectorAll(".btn_delete");
    btn_delete.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        deleteTurn(event.target.dataset.id);
      });
    });

    const btn_edit_date = turns_card.querySelectorAll(".btn_edit_date");
    btn_edit_date.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            const turnData = await editTurn(e.target.dataset.id);
            turn_date.value = turnData.Fecha;
            id = e.target.dataset.id;
        })
    })
    const btn_edit_hora = turns_card.querySelectorAll(".btn_edit_hora");
    btn_edit_hora.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            const turnData = await editTurn(e.target.dataset.id);
            turn_hora.value = turnData.Hora;
            id = e.target.dataset.id;
        })
    })
};

save_new_date.addEventListener("click", async (e) => {
    updateTurn(id, {Fecha: turn_date.value})
    turn_date.value = "";
  });

  save_new_hora.addEventListener("click", async (e) => {
    updateTurn(id, {Hora: turn_hora.value})
    turn_hora.valeu = "";
  });