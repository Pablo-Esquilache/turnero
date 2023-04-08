import { deleteUser } from "./delete_users.js";
import { editUser } from "./edit_users.js";
import { users_container } from "./print_users.js";
import { updateUser } from "./update_users.js";

const rol = document.querySelector("#rol")
const save_rol = document.querySelector("#save_rol")
let id = ""

export const userCard = (user) => {
  let user_card = document.createElement("div");
  user_card.className = "user_card";
  user_card.innerHTML = `<h3>Nombre: ${user.Nombre}</h3>
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
    btn.addEventListener("click", async (e) => {
        const userData = await editUser(e.target.dataset.id);
        rol.value = userData.Rol   
        id = e.target.dataset.id;
    });
  });
};

save_rol.addEventListener("click", async (e) => {
  updateUser(id, {Rol: rol.value.toLowerCase()})
  rol.value = ""
});