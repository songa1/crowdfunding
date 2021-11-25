var btn = document.getElementById('btn2');
var btnImage = document.getElementById('bImg');
var btnPa = document.getElementById('bP');

btnImage.src = './images/icon-bookmark.svg';
btnPa.style.color = 'black';

btn.addEventListener('click', switchButton);

function switchButton(){
    // if (btnImage.src == 'images/icon-bookmark.svg') {
        btnImage.src = './images/icon-bookmarked.svg';
        btnPa.style.color = 'teal';
    // }else{
        btnImage.src = './images/icon-bookmark.svg';
        btnPa.style.color = 'black';
    // }
}