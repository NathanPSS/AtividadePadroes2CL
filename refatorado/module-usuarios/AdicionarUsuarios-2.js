function Adicionar() {
    console.log('Adicionar')
    const usuario = userVariavel()
    const usuarios = usuariosVariavel()
    if(validacaoCamposVazio()){
    usuarios.push(usuario)
    SetLocalStorageUser(usuarios)
    addSorteio(usuario.nome)
    openModal('cadastro-modal')
    return true
    }
}