

function validacaoCamposVazio() {
    if (document.querySelector('#txtEmail').value == '' || document.querySelector('#txtNome').value == '') {
        alert('Preencha os campos')
        return false
    }
    return true
}

