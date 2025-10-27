const call = document.querySelector('.call');
const modalCall = document.querySelector('.modal__call');
const modalBlur = document.querySelector('.modal-blur');
const closeButton = document.querySelector('.modal__close--call');

document.addEventListener('click', openCall);

function openCall(e){
    if(e.target.closest('.call')) {
        modalCall.classList.add('modal--active');
        modalBlur.classList.add('modal-blur--active');
    }
    if(e.target.closest('.modal-blur')){
        modalCall.classList.remove('modal--active');
        modalBlur.classList.remove('modal-blur--active');
    }
}

closeButton.addEventListener('click', closeCall);

function closeCall(e){
    if(e.target.closest('.modal__close--call')) {
        modalCall.classList.remove('modal--active');
        modalBlur.classList.remove('modal-blur--active');
    }
}
