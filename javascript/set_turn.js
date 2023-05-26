import { db } from "./firebase.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
import { msg_turnOk } from "./formulario.js";

export const setTurn = async (name_turns, userEmail, tel,  date, time) => {
  try {
    const docRef = await addDoc(collection(db, "turnos"), {
      Nombre: name_turns,
      Email: userEmail,
      Celular: tel,
      Fecha: date,
      Hora: time,
    });
    msg_turnOk.innerText = "Turno guardado con exito";
    setTimeout(() => {
      msg_turnOk.innerText = "";
    }, 2000);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
