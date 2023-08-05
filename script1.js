const slider = document.querySelector(".box");
const slides = document.querySelectorAll(".image-container");
const dots = document.querySelectorAll(".dot1");
const slideWidth = slides[0].clientWidth;
let index = 0;
let isDragging = false;
let startPosX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function nextSlide() {
  index++;
  if (index === 4) {
      index = 0;
  }
  updateSlider();
}

function prevSlide() {
  index--;
  if (index < 0) {
      index = slides.length - 1;
  }
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(${-index * slideWidth}px)`;

  // Dot renkleri güncelleme
  dots.forEach((dot, dotIndex) => {
    dot.classList.remove("active");
    if (dotIndex === index) {
      dot.classList.add("active");
    }
  });
}

setInterval(nextSlide, 3000);

// Mouse ile kaydırma
slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPosX = e.clientX;
  slider.style.transition = "none";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
      const currentPositionX = e.clientX;
      currentTranslate = prevTranslate + currentPositionX - startPosX;
      slider.style.transform = `translateX(${currentTranslate}px)`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100) {
      nextSlide();
  } else if (movedBy > 100) {
      prevSlide();
  }
  updateSlider();
  slider.style.transition = "";
  prevTranslate = currentTranslate;
});

// Dokunmatik ekran desteği
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
  touchEndX = e.touches[0].clientX;
});

document.addEventListener("touchend", () => {
  const movedBy = touchEndX - touchStartX;
  if (movedBy < -100) {
      nextSlide();
  } else if (movedBy > 100) {
      prevSlide();
  }
});

function goToSlide(slideIndex) {
  index = slideIndex;
  updateSlider();
}