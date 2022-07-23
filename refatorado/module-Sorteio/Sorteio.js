function sorteio() {
    usuarios = localStorageGetItemUser()
    let max = usuarios.length
    let resultado = []
    let resultSorteio = getUserSorteio()
    console.log(resultSorteio)
    let sbody = document.querySelector('.modal-body-resultado');
    let slinhas = '';
    if (validacaoSorteio(max)){
        return
    }
    resultado = resultadoFunction(resultado,max)
    openModal('resultado-modal')
    sorteioHTML(slinhas,sbody,resultSorteio,resultado)
    openModal('resultado-modal')
}
document.querySelector('#btnSortear').addEventListener('click', function (e) {
    sorteio()
})
