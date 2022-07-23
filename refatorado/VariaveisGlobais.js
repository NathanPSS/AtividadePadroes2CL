
function userVariavel() {
    let usuario = {
        nome: document.querySelector('#txtNome').value,
        email: document.querySelector('#txtEmail').value
    }
    return usuario
}
function usuariosVariavel(){
    if (localStorage.getItem('usuarios')) {
      return usuarios = JSON.parse(localStorage.getItem('usuarios'))
    }
    else {
      return usuarios = [];
    }
}
let resultSorteio = [];