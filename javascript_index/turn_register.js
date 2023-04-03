const dateSelect = document.querySelector("#date");
const timeSelect = document.querySelector("#time");

export const turnRegister = (turnos) => {
  dateSelect.addEventListener("change", () => {
    let selectedDate = dateSelect.value;

    let $options = timeSelect.querySelectorAll("option");
    for (let j = 0; j < $options.length; j++) {
      let $option = $options[j];
      let valueOption = $option.value;
      let disabled = false;

      for (let i = 0; i < turnos.length; i++) {
        let turnoActual = turnos[i];
        let dateActual = turnoActual.Fecha;
        let timeActual = turnoActual.Hora;

        if (dateActual === selectedDate && timeActual === valueOption) {
          disabled = true;
          break;
        }
      }

      $option.disabled = disabled;
    }
  });
};
