const avisos = document.getElementById('avisos');
const calendario = document.getElementById('calendario');
const chatAdmin = document.getElementById('chatAdmin');

function enviarRecado() {
  const texto = document.getElementById('recadoInput').value;
  if (texto) {
    localStorage.setItem('recado', texto);
    alert('Recado enviado aos pais!');
    document.getElementById('recadoInput').value = '';
  }
}

function adicionarEvento() {
  const data = document.getElementById('dataEvento').value;
  const texto = document.getElementById('eventoTexto').value;
  if (data && texto) {
    const item = document.createElement('li');
    item.textContent = `${data}: ${texto}`;
    calendario.appendChild(item);
    salvarEvento(`${data}: ${texto}`);
    document.getElementById('dataEvento').value = '';
    document.getElementById('eventoTexto').value = '';
  }
}

function salvarEvento(evento) {
  let eventos = JSON.parse(localStorage.getItem('eventos')) || [];
  eventos.push(evento);
  localStorage.setItem('eventos', JSON.stringify(eventos));
}

function enviarMensagemAdmin() {
  const mensagem = document.getElementById('mensagemAdmin').value;
  if (mensagem) {
    chatAdmin.innerHTML += `<div><strong>Professor:</strong> ${mensagem}</div>`;
    localStorage.setItem('mensagemProfessor', mensagem);
    document.getElementById('mensagemAdmin').value = '';
  }
}
