function Editar() {
    let users = JSON.parse(localStorage.getItem('usuarios'));

    const userAtualizado = {
        nome: document.querySelector("#txtNome").value,
        email: document.querySelector("#txtEmail").value
    }

    users[indice_selecionado] = userAtualizado;
    localStorage.setItem('usuarios', JSON.stringify(users));
    alert('Usuario atualizado');
    operacao = 'A';
    closeModal('cadastrados-modal');

}