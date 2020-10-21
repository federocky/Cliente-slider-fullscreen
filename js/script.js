let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

//desaparecen las imagenes
function reset(){
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

// inicializa el slide
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
    setInterval(slideRight, 5000);
}

startSlide();


arrowLeft.addEventListener('click', slideLeft);
//mover a la izquierda

function slideLeft(){
    reset();
    if(current === 0) current = sliderImages.length;
    sliderImages[current - 1].style.display = 'block';
    current--;
}

arrowRight.addEventListener('click', slideRight);

function slideRight(){
    reset();
    if(current === sliderImages.length-1) current = -1;
    sliderImages[current + 1].style.display = 'block';
    current++;
}

