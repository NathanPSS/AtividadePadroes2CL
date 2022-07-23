function sorteioHTML(slinhas,sbody,resultSorteio,resultado){
console.log(resultado)
console.log(resultSorteio)
for (let i = 0; i < resultado.length; i++) {
    if (numpar(i)) {
        console.log(resultado.length)
        slinhas += `<p> ${resultSorteio[resultado[i]]} - ${resultSorteio[resultado[i + 1]]}`
    }
}
sbody.innerHTML += slinhas;
}