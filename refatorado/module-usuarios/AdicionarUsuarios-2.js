function Adicionar() {
    const usuario = userVariavel()
    if(validacaoCamposVazio()){
    usuarios.push(usuario)
    SetLocalStorageUser(usuarios)
    openModal('cadastro-modal')
    return true
    }
}