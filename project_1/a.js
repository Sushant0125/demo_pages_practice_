// JavaScript for image slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');

    // Function to load products dynamically
    function loadProducts(startIndex, endIndex) {
        // Clear existing slides
        sliderTrack.innerHTML = '';

        // Simulate loading of products (replace with actual data fetching logic)
        for (let i = startIndex; i < endIndex; i++) {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            slide.textContent = `Product ${i + 1}`; // Replace with actual product data
            sliderTrack.appendChild(slide);
        }
    }

  
});
