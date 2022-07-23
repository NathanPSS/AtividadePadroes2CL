function Editar(){
    const users = localStorageGetItemUser()
    users[indice_selecionado] = userVariavel()
    SetLocalStorageUser(users)
    alert('Usuario atualizado');
    closeModal('cadastrados-modal');
}