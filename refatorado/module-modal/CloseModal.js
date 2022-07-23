function closeModal(mn) {
    let modal = document.getElementById(mn);
    if(checksModal(mn)){
    modal.style.display = 'none';
    }
}