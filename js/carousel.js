function showSlide(index) {
    const slides = document.querySelectorAll('#carousel li');

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
    if (currentIndex >= slides.length)
    showSlide(currentIndex);
}

previousButton.onclick = function() {
    currentIndex--;
    if (currentIndex < 0)
    showSlide(currentIndex);
}

    
    