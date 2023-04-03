const turns_container = document.querySelector('.turns_container');

export const turnCard = (turn) => {
    let turns_card = document.createElement('div');
    turns_card.className = 'turns_card';
    turns_card.innerHTML= 
    `<h3>Nombre: ${turn.Nombre}</h3>
    <h4>Usuario: ${turn.Email}</h4>
    <p>Celular: ${turn.Celular}</p>
    <p>Fehca: ${turn.Fecha}</p>
    <p>Hora: ${turn.Hora}</p>`;
    turns_container.appendChild(turns_card);
};