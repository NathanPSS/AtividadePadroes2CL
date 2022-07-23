function closeModal(mn) {
    console.log('closeModal')
    let modal = document.getElementById(mn);
    if(!checksModal(mn)){
    modal.style.display = 'none';
    }
}