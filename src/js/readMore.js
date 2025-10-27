const readMore = document.querySelector('.content__read')
const button = document.querySelector('.show-btn');
const text3 = document.querySelector('.text_3');
const arrow = document.querySelector('.arrowDown');

button.addEventListener('click', openMore);

function openMore(e){
    text3.classList.toggle('showREADMore');
    arrow.classList.toggle('arrowUp');
}


