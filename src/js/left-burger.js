const feedback = document.querySelector('.burger');
const left = document.querySelector('.left');
const modalBlur = document.querySelector('.burger-blur')
const closeButton = document.querySelector('.close');

document.addEventListener('click', openMenu);

function openMenu(e){
    if(e.target.closest('.burger')) {
        left.classList.add('modal--active');
        modalBlur.classList.add('burger-blur--active');
    }
    if(e.target.closest('.burger-blur')) {
        left.classList.remove('modal--active');
        modalBlur.classList.remove('burger-blur--active');
    }   
}

closeButton.addEventListener('click', closeMenu);

function closeMenu(e){
    if(e.target.closest('.close')) {
        left.classList.remove('modal--active');
        modalBlur.classList.remove('burger-blur--active');
    }   
}