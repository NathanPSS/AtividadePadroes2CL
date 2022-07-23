function sorteio() {
    usuarios = localStorageGetItemUser()
    let max = usuarios.length
    let resultado = []
    let sbody = document.querySelector('.modal-body-resultado');
    let slinhas = '';
    validacaoSorteio(max)
    openModal('resultado-modal')
    let num = generateNumber()
    numeroExistente(resultado,num,max)
    sorteioHTML(slinhas,sbody)
    openModal('resultado-modal')
    resultSorteio = [];
}
document.querySelector('#btnSortear').addEventListener('click', function (e) {
    sorteio()
})
