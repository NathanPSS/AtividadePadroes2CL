function reset() {
    let sbody = document.querySelector('.modal-body-resultado');
    sbody.innerHTML = ``;
    localStorage.clear();
    closeModal('resultado-modal');
    closeModal('cadastrados-modal');
    resultSorteio = [];
    let tbody = document.querySelector('#tblListar tbody');
    tbody.innerHTML = ``;
    usuarios = [];
}
var mailValidation = document.getElementById('mail-validation');
let nome = document.getElementById('txtNome');
let nameValidation = document.getElementById('name-validation');
nome.onkeyup = function () {
    var nameVal = true;
    if (nome.value.length < 3) {
        nameValidation.innerText = 'Por favor, preencha o campo nome';
        nome.style.border = '';
    }
    else {
        nameValidation.innerText = '';
        nameVal = false;
    }
}
let email = document.getElementById('txtEmail');
email.onkeyup = function () {
    const regexmail = /\S+@\S+\.\S+/;
    if (regexmail.test(email.value)) {
        mailValidation.innerText = 'Seu email é válido';
        mailValidation.style.color = 'lime';

    }
    else {
        mailValidation.innerText = 'Seu email não válido';
        mailValidation.style.color = 'red';

    }
}