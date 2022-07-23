function deletar(indice) {
    usuarios.splice(indice, 1);
    if (usuarios.length == 0) {
        localStorage.removeItem('usuarios');
        return;
    }
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}