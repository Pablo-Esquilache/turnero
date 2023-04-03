import { getTurns } from "../get_turns.js";
import { turnCard } from "./turns_cards.js";

export const printTurns = () => {
  getTurns((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      turnCard({ id: doc.id, ...doc.data() });
    });
  });
};
