import { getTurns } from "./get_turns.js";
import { turnRegister } from "./turn_register.js";

export let turnos = [];

export const loadTurnos = () => {
    getTurns((querySnapshot) => {
      turnos = [];
      querySnapshot.forEach((doc) => {
        turnos.push({ id: doc.id, ...doc.data() });
      });
      turnRegister(turnos);
    });
  };