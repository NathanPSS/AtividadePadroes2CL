function handleEditar(e) {
    operacao = "E";
    indice_selecionado = parseInt(e.getAttribute("alt"));
    let users = JSON.parse(localStorage.getItem('usuarios'));
    let user = users[indice_selecionado];

    document.querySelector("#txtNome").value = user.nome;
    document.querySelector("#txtEmail").value = user.email;
    let modal = document.getElementById('cadastrados-modal');
    if (typeof modal == 'undefined' || modal === null)
        return;
    modal.style.display = 'none';
}
