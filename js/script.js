let topBlock = document.querySelector('.top__right');
let changeButton = document.querySelector('.right_button');
let changesButton = document.querySelector('.left_button');

changeButton.onclick = function() {
    topBlock.classList.toggle('top__right-change');
};

changesButton.onclick = function() {
    topBlock.classList.toggle('top__right-change');
};