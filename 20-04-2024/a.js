let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("content");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// let index = 0;
//     const images = document.querySelectorAll('.content img');

//     function showImage(index) {
//       images.forEach((img, i) => {
//         if (i === index) {
//           img.classList.add('visible');
//         } else {
//           img.classList.remove('visible');
//         }
//       });
//     }

//     function nextImage() {
//       index++;
//       if (index >= images.length) {
//         index = 0;
//       }
//       showImage(index);
//     }

//     function previousImage() {
//       index--;
//       if (index < 0) {
//         index = images.length - 1;
//       }
//       showImage(index);
//     }