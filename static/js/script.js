document.addEventListener('DOMContentLoaded', function () {
    const serviceFilterButtons = document.querySelectorAll('.service-filter-btn');
    const serviceCarouselContent = document.querySelector('.service-carousel-content');
    const serviceLeftArrow = document.querySelector('.service-left-arrow');
    const serviceRightArrow = document.querySelector('.service-right-arrow');
    let currentServiceFilter = 'house';
    let currentServiceIndex = 0;
    const itemsPerSlide = 4; // Number of items to show per slide

    // Update carousel display based on filter
    function updateServiceCarousel(filter) {
        const activeItems = document.querySelectorAll(`.service-carousel-item.service-${filter}`);
        const totalItems = activeItems.length;
        const totalSlides = Math.ceil(totalItems / itemsPerSlide);
        
        // Set each item width
        activeItems.forEach(item => {
            item.style.width = `${100 / itemsPerSlide}%`; // Ensures 4 items fit perfectly in the carousel
        });

        // Reset carousel position
        serviceCarouselContent.style.transform = `translateX(0)`;
        currentServiceIndex = 0;

        // Hide/Show items based on the filter
        document.querySelectorAll('.service-carousel-item').forEach(item => {
            item.style.display = 'none';
        });
        activeItems.forEach(item => {
            item.style.display = 'block';
        });

        // Set the width of the carousel content to accommodate all items
        serviceCarouselContent.style.width = `${100 * totalItems / itemsPerSlide}%`;
    }

    // Filter buttons click event
    serviceFilterButtons.forEach(button => {
        button.addEventListener('click', function () {
            serviceFilterButtons.forEach(btn => btn.classList.remove('service-active'));
            this.classList.add('service-active');
            currentServiceFilter = this.getAttribute('data-service-filter');
            updateServiceCarousel(currentServiceFilter);
        });
    });

    // Left arrow click event
    serviceLeftArrow.addEventListener('click', function () {
        const activeItems = document.querySelectorAll(`.service-carousel-item.service-${currentServiceFilter}`);
        if (currentServiceIndex > 0) {
            currentServiceIndex--;
            const offset = -(100 / itemsPerSlide) * currentServiceIndex;
            serviceCarouselContent.style.transform = `translateX(${offset}%)`;
        }
    });

    // Right arrow click event
    serviceRightArrow.addEventListener('click', function () {
        const activeItems = document.querySelectorAll(`.service-carousel-item.service-${currentServiceFilter}`);
        const totalItems = activeItems.length;
        const totalSlides = Math.ceil(totalItems / itemsPerSlide);
        
        if (currentServiceIndex < totalSlides - 1) {
            currentServiceIndex++;
            const offset = -(45 / itemsPerSlide) * currentServiceIndex * itemsPerSlide;
            serviceCarouselContent.style.transform = `translateX(${offset}%)`;
        }
    });

    // Initialize carousel
    updateServiceCarousel(currentServiceFilter);
});


// cleaners js 
document.querySelector('.prev').addEventListener('click', () => {
    const carousel = document.querySelector('.carousel');
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
});

document.querySelector('.next').addEventListener('click', () => {
    const carousel = document.querySelector('.carousel');
    carousel.appendChild(carousel.firstElementChild);
});

const feedbacks = [
    {
      image: "images/image-1.jpg",  
      name: "Robin",
      designation: "Web Developer, Digi Agency",
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      image: "images/image-2.jpg",
      name: "John",
      designation: "CEO, WallBook",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
    },
    {
      image: "images/image-3.jpg",  
      name: "Eva",
      designation: "UX Designer, TechShow",
      feedback:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];
  
  let i = 0;
  let j = feedbacks.length;
  
  let testimonialCont = document.getElementById("testimonial-cont");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  
  let showTestimonial = () => {
    testimonialCont.innerHTML = `
      <p>${feedbacks[i].feedback}</p>
      <img src=${feedbacks[i].image}>
      <h3>${feedbacks[i].name}</h3>
      <h6>${feedbacks[i].designation}</h6>
    `;
  };

  prev.addEventListener("click", () => {
    i = (j + i - 1) % j;
    showTestimonial();
  });
  next.addEventListener("click", () => {
    i = (j + i + 1) % j;
    showTestimonial();
  });
  
  window.onload = showTestimonial;
