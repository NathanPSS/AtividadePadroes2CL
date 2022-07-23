function openModal(mn){
    console.log('openModal')
    let modal = document.getElementById(mn)
    if(checksModal()){
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    mailValidation.innerText = '';
    }
}