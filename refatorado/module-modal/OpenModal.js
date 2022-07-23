function openModal(modal){
    if(checksModal()){
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    mailValidation.innerText = '';
    }
}