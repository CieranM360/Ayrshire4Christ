document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          entry.target.classList.remove('animated');
        }
      });
    }
  );

  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => {
    observer.observe(slide);
  });

  const nextBtns = document.querySelectorAll(".next-btn");
  const backBtns = document.querySelectorAll(".back-btn");

  let currentSlide = 0;

  function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? "block" : "none";
    });
  }

  function changeSlide(increment) {
    currentSlide = (currentSlide + increment + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      changeSlide(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  backBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      changeSlide(-1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  showSlide(currentSlide);

  // Mobile menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navbarMenu = document.querySelector(".navbar__menu");

  mobileMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  const slideWrappers = document.querySelectorAll(".slide-wrapper");
  slideWrappers.forEach(slideWrapper => {
    const slideContent = slideWrapper.querySelector(".slide-content");
    const stcImage = slideWrapper.querySelector(".stc__image");
    const nextBtn = slideWrapper.querySelector(".next-btn");
    const backBtn = slideWrapper.querySelector(".back-btn");

    slideContent.style.width = "60%";
    stcImage.style.width = "40%";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    buttonContainer.appendChild(backBtn);
    buttonContainer.appendChild(nextBtn);
    slideWrapper.appendChild(buttonContainer);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', () => {
      const content = dropdown.querySelector('.dropdown-content');
      content.style.display = 'block';
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 50);
    });

    dropdown.addEventListener('mouseleave', () => {
      const content = dropdown.querySelector('.dropdown-content');
      content.style.opacity = '0';
      content.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        content.style.display = 'none';
      }, 300);
    });
  });
});
