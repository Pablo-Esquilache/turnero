import { getUsers } from "./get_users.js";
import { userCard } from "./users_cards.js";

export const users_container = document.querySelector(".users_container");
export const printUsers = () => {
  getUsers((querySnapshot) => {
    users_container.innerHTML = ""
    querySnapshot.forEach((doc) => {
      userCard({ id: doc.id, ...doc.data() });
    });
  });
};
