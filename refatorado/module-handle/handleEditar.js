function handleEditar(e) {
    operacao = "E";
    indice_selecionado = parseInt(e.getAttribute("alt"));
    let users = localStorageGetItemUser()
    let user = users[indice_selecionado];
    alterHanderField(user)
    let modal = document.getElementById('cadastrados-modal');
    if(checksModal(modal)){
        modal.style.display = 'none';
    }
}