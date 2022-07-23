function handleDeletar(e) {
    let indice_selecionado = parseInt(e.getAttribute("alt"));
    deletar(indice_selecionado);
    listar();
}