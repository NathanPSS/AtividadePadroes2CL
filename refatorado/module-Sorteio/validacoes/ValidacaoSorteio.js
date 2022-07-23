function validacaoSorteio(max){
if (max <= 3) {
    alert("É necessário adicionar pelo menos 4 pessoas")
    return;
}
else if (max % 2 != 0) {
    alert("O numero de candidatos deve ser par")
    return;
}
}