let num
function resultadoFunction(resultado,max) {
    for (let i = 0; i < max; i++) {
        num = generateNumber(max)
        if (numeroExistente(resultado,num)) {
            i--;
        }
        else {
            resultado.push(num);
        }
    }
    return resultado
    }