const feedback = document.querySelector('.chat');
const modal = document.querySelector('.modal');
const modalBlur = document.querySelector('.modal-blur')
const closeButton = document.querySelector('.modal__close');

document.addEventListener('click', openFeedback);

function openFeedback(e){
    if(e.target.closest('.chat')) {
        modal.classList.add('modal--active');
        modalBlur.classList.add('modal-blur--active');
    }
    if(e.target.closest('.modal-blur')) {
        modal.classList.remove('modal--active');
        modalBlur.classList.remove('modal-blur--active');
    }   
}

closeButton.addEventListener('click', closeFeedback);

function closeFeedback(e){
    if(e.target.closest('.modal__close')) {
        modal.classList.remove('modal--active');
        modalBlur.classList.remove('modal-blur--active');
    }   
}