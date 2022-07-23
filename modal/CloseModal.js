function closeModal(mn) {
    let modal = document.getElementById(mn);
    if (typeof modal == 'undefined' || modal === null)
        return;
    modal.style.display = 'none';
}
let operacao = 'A';
let usuarios;
let resultSorteio = [];

if (localStorage.getItem('usuarios')) {
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
}
else {
    usuarios = [];
}