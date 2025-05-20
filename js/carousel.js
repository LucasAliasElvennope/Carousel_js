const slides = document.querySelectorAll('#carousel li');

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[index].style.display = 'block';
}

let currentIndex = 0;

showSlide(currentIndex);

const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');

nextButton.onclick = function() {
    currentIndex++;
    if (currentIndex >= slides.length){
        currentIndex = 0 
    }
    showSlide(currentIndex);
}

previousButton.onclick = function() {
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = -1 
    }
    showSlide(currentIndex);
}
    