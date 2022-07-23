function sorteioHTML(slinhas,sbody){
for (let i = 0; i < resultado.length; i++) {
    if (numpar(i)) {
        slinhas += `<p> ${resultSorteio[resultado[i]]} - ${resultSorteio[resultado[i + 1]]}`
    }
}
sbody.innerHTML += slinhas;
}