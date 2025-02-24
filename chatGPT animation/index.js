const circle = document.querySelector('h1');
const text = document.querySelector('#circle');
const body = document.querySelector('body');

window.addEventListener('load', pageBackColor)

function pageBackColor() {
    if(body) {
        body.style.backgroundColor = 'white';
        animationPlayCircle()
        animationPlayText()
    }
}

function animationPlayText() {

    //dictacting the position off the text

    let textPositionLeft = parseInt(window.getComputedStyle(text).
    getPropertyValue('left'));
    console.log(textPositionLeft)
    if(textPositionLeft < 0) {
        text.style.color = 'red'
    }
}

function animationPlayCircle() {

    //dictacting the position off the text

    let circlePositionRight = parseInt(window.getComputedStyle(circle).
    getPropertyValue('right'));

    if(circlePositionRight < 0) {
        circle.style.backgroundColor = 'red'
    }
}

