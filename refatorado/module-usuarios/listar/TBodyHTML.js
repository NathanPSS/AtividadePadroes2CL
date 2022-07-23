function writeTBodyHTML(users) {
    let linhas = ''
    for (let i in users) {
        let user = users[i];
        linhas += `<tr>
                <td class="icons">
                    <img class="img-m" src='../imagens/editar.png' alt ='${i}' onclick='handleEditar(this)'/>
                    <img class="img-m" src='../imagens/deletar.png' alt ='${i}' onclick='handleDeletar(this)'/>
                </td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
              </tr>`

    }
    return linhas
}