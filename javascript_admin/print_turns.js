import { getTurns } from "../get_turns.js";
import { turnCard } from "./turns_cards.js";

export const turns_container = document.querySelector(".turns_container");

export const printTurns = () => {
  getTurns((querySnapshot) => {
    turns_container.innerHTML = "";
    querySnapshot.forEach((doc) => {
      turnCard({ id: doc.id, ...doc.data() });
    });
  });
};
