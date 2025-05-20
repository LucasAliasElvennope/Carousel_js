function showSlide(index) {
    const slides = document.querySelectorAll('#carousel li');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[index].style.display = 'block';
}
