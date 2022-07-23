function listar(){
    let tbody = document.querySelector('#tblListar tbody');
    users = localStorageGetItemUser()
    let linhas = writeTBodyHTML()
    tbody.innerHTML = linhas
}