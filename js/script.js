function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0; // Start with the first slide
    const slides = document.querySelectorAll('.testimonial-card');

    // Function to show the current slide and hide others
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide, loop back to the beginning if at the end
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Go to the previous slide, loop to the last if at the beginning
        showSlide(currentSlide);
    }

    // Initialize the carousel to show the first slide
    showSlide(currentSlide);

    // Attach the next and prev functions to buttons
    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
});