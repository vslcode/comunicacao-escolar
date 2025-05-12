const recados = document.getElementById('recadosRecebidos');
const avisosRecebidos = document.getElementById('avisosRecebidos');
const calendarioRecebido = document.getElementById('calendarioRecebido');
const chatUser = document.getElementById('chatUser');

window.onload = function() {
  const recado = localStorage.getItem('recado');
  if (recado) {
    const li = document.createElement('li');
    li.textContent = recado;
    recados.appendChild(li);
  }

  const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
  eventos.forEach(ev => {
    const li = document.createElement('li');
    li.textContent = ev;
    calendarioRecebido.appendChild(li);
  });

  const msg = localStorage.getItem('mensagemProfessor');
  if (msg) {
    chatUser.innerHTML += `<div><strong>Professor:</strong> ${msg}</div>`;
  }
};

function enviarMensagemUser() {
  const mensagem = document.getElementById('mensagemUser').value;
  if (mensagem) {
    chatUser.innerHTML += `<div><strong>Você:</strong> ${mensagem}</div>`;
    document.getElementById('mensagemUser').value = '';
  }
}
