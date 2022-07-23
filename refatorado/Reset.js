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