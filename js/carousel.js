function showSlide(index) {

    const slides = document.querySelectorAll('#carousel li');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
}
let currentIndex = 0;

showSlide(currentIndex);

document.getElementById('next').addEventListener('click', function() {
    currentIndex++;
    
    if (currentIndex >= document.querySelectorAll('#carousel li').length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

document.getElementById('previous').addEventListener('click', function() {
    currentIndex--;
    
    if (currentIndex < 0) {
        currentIndex = document.querySelectorAll('#carousel li').length;
    }
    showSlide(currentIndex);
});