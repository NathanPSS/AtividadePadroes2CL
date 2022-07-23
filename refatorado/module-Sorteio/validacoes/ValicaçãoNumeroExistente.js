function numeroExistente(resultado,num,max) {

for (let i = 0; i < max; i++) {
    if (resultado.includes(num)) {
        i--;
    }
    else {
        resultado.push(num);
    }
}
}
