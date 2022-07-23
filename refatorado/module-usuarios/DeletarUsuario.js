function deletar(indice) {
    usuarios.splice(indice, 1);
    if(checksUsuario(usuarios)){
        SetLocalStorageUser(usuarios)
    }
}