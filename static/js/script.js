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




// testimonial
const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

//  let people = [
//    {
//      photo: `url("${staticUrl}images/profile/Aisha Khan.jfif")`,
//      name: "Aisha Khan",
//      description: "I recently used Trinity Removals for my relocation, and I couldn't be more satisfied with their service. The team arrived on time, and their professionalism was evident throughout the entire process.",
//      rating: 5,
//    },
//   {
//  	photo: `url("${staticUrl}images/profile/Anand Verma.png")`,
//  	name: "Anand Verma",
//  	description:
//  		"The movers were courteous and worked diligently. However, there were a few communication hiccups that caused some confusion about the delivery schedule.",
//  		rating: 4,
//  },

//  {
//  	photo:
//  		`url("${staticUrl}images/profile/Jayawardena Perera.jfif")`,
//  	name: "Jayawardena Perera",
//  	description:
//  		"The team was not only professional but also incredibly friendly. They carefully wrapped and secured all my belongings, and nothing was damaged in transit. If you're looking for a stress-free move, Trinity Removals is the way to go!",
//  		rating: 5,
//  },

//  {
//  	photo: `url("${staticUrl}images/profile/Siddharth Sharma.jfif")`,
//  	name: "Siddharth Sharma",
//  	description:
//  		"Despite these challenges, the customer service team was responsive and addressed my concerns promptly. While there's room for improvement, I appreciate their efforts to make things right.",
//  		rating: 4,
//  },

//  {
//  	photo: `url("${staticUrl}images/profile/Priya Mehra.jfif")`,
//  	name: "Priya Mehra",
//  	description:
//  		"I recently moved with Trinity Removals, and I am beyond impressed with the level of service they provided. From the moment they arrived to the completion of the move, everything was handled with professionalism and care. The team was efficient, friendly. ",
//  		rating: 5,
//  },

//  {
//  	photo:
//    `url("${staticUrl}images/profile/Ahmed Malik.jfif")`,
//  	name: "Ahmed Malik",
//  	description:
//  		"Movers were hardworking and polite, but a piece of furniture suffered a minor scratch during the move. On the positive side, the customer service team was responsive and addressed my concerns promptly.",
//  		rating: 4,
//  }
//  ];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;


function updateStarRating() {
	const starContainer = document.querySelector('.star-container');
	starContainer.innerHTML = '';
  
	const rating = people[currentPerson].rating;
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
  
	for (let i = 0; i < fullStars; i++) {
	  const star = document.createElement('span');
	  star.className = 'star';
	  star.innerHTML = '★';
	  starContainer.appendChild(star);
	}
  
	if (hasHalfStar) {
	  const halfStar = document.createElement('span');
	  halfStar.className = 'star';
	  halfStar.innerHTML = '★'; // You can customize the appearance of a half-star
	  halfStar.style.width = '50%'; // Adjust the width based on your design
	  starContainer.appendChild(halfStar);
	}
  
	const emptyStars = Math.floor(5 - rating);
	for (let i = 0; i < emptyStars; i++) {
	  const star = document.createElement('span');
	  star.className = 'star';
	  star.innerHTML = '☆';
	  starContainer.appendChild(star);
	}
  }
  

function initializeStarRatings() {
  for (let i = 0; i < people.length; i++) {
    const starContainer = document.createElement('div');
    starContainer.className = 'star-container';
    document.getElementById('reviewWrap').appendChild(starContainer);
  }
}

initializeStarRatings();

let currentPerson = 0;

function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0
    });
  }

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
    updateStarRating(); // Call the updateStarRating function here
  }, 400);

  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);

  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);

  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);

  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 5) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 5;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);