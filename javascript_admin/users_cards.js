import { deleteUser } from "./delete_users.js";
import { editUser } from "./edit_users.js";

import { users_container } from "./print_users.js";

export const userCard = (user) => {
  let user_card = document.createElement("div");
  user_card.className = "user_card";
  user_card.innerHTML = 
  `<h3>Nombre: ${user.Nombre}</h3>
    <h4>Usuario: ${user.Usuario}</h4>
    <p>Rol: ${user.Rol}</p>
    <button class="btn_edit" data-id="${user.id}">Editar rol</button>
    <button class="btn_delete" data-id="${user.id}">Eliminar usuario</button>
    `;

  users_container.appendChild(user_card);

  const btn_delete = user_card.querySelectorAll(".btn_delete");
  btn_delete.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      deleteUser(event.target.dataset.id);
    });
  });

  const btn_edit = user_card.querySelectorAll(".btn_edit");
  btn_edit.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target.dataset.id)
      const doc = editUser(event.target.dataset.id);
      console.log(doc.data());
    });
  })
};
