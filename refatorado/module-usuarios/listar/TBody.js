function listar(){
    console.log('listar')
    let tbody = document.querySelector('#tblListar tbody');
    let users = localStorageGetItemUser()
    let linhas = writeTBodyHTML(users)
    tbody.innerHTML = linhas
}
