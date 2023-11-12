var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active", "prev", "next");
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  
  slides[slideIndex - 1].classList.add("active");
  
  if (slideIndex > 1) {
    slides[slideIndex - 2].classList.add("prev");
  } else {
    slides[slides.length - 1].classList.add("prev");
  }
  
  if (slideIndex < slides.length) {
    slides[slideIndex].classList.add("next");
  } else {
    slides[0].classList.add("next");
  }

  setTimeout(showSlides, 3000); // Đổi hình sau mỗi 2 giây
}
var dots = document.getElementsByClassName("dot");
for (var i = 0; i < dots.length; i++) {
  dots[i].onclick = function() {
    var dotIndex = Array.from(dots).indexOf(this);
    slideIndex = dotIndex;
    showSlides();
  };
}