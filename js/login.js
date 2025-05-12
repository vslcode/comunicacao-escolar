function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin') {
    window.location.href = 'admin.html';
  } else if (username === 'user' && password === 'user') {
    window.location.href = 'usuario.html';
  } else {
    alert('Usuário ou senha inválidos.');
  }
}
