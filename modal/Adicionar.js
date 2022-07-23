function Adicionar() {
    let usuario = {
        nome: document.querySelector('#txtNome').value,
        email: document.querySelector('#txtEmail').value
    }
    if (document.querySelector('#txtEmail').value == '' || document.querySelector('#txtNome').value == '') {
        alert('Preencha os campos')
    }
    else {
        usuarios.push(usuario);
        resultSorteio.push(usuario.nome);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        openModal('cadastro-modal')
        return true;
    }
}