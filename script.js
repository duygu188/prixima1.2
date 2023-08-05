var slidesIndexx = 1;
var slideIntervall = setInterval(function() {
  pluSlides(1);
}, 10000);

function pluSlides(n) {
  showSlides((slidesIndexx += n));
}

function currentSlide(n) {
  clearInterval(slideIntervall);
  showSlides((slidesIndexx = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slidesIndexx = 1;
  }
  if (n < 1) {
    slidesIndexx = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slidesIndexx - 1].style.display = "block";
  dots[slidesIndexx - 1].className += " active";

  clearInterval(slideIntervall);

  // Son slayta geldiğinde başa dönecek kontrol
  slideIntervall = setInterval(function() {
    pluSlides(1);
  }, 10000);
}

showSlides(slidesIndexx);