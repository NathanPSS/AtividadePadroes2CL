function deletar(indice) {
    usuarios = usuariosVariavel()
    usuarios.splice(indice, 1);
    if(checksUsuario(usuarios)){
        SetLocalStorageUser(usuarios)
    }
}