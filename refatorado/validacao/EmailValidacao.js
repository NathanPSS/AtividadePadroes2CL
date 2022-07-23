let email = document.getElementById('txtEmail');
let mailValidation = document.getElementById('mail-validation');
email.onkeyup = function () {
    const regexmail = /\S+@\S+\.\S+/;
    if (regexmail.test(email.value)) {
        mailValidation.innerText = 'Seu email é válido';
        mailValidation.style.color = 'lime';

    }
    else {
        mailValidation.innerText = 'Seu email não válido';
        mailValidation.style.color = 'red';

    }
}