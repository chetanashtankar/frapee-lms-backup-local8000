// // let currentSlide = 0;
// // const testimonialWrapper = document.getElementById('testimonialWrapper');
// // const slides = document.querySelectorAll('.testimonial-slide');
// // const totalSlides = slides.length;

// // // Generate pagination dots
// // const pagination = document.getElementById('pagination');
// // for (let i = 0; i < totalSlides; i++) {
// //     const dot = document.createElement('div');
// //     dot.className = 'pagination-dot';
// //     if (i === 0) dot.classList.add('active');
// //     dot.addEventListener('click', () => goToSlide(i));
// //     pagination.appendChild(dot);
// // }

// // function updateSlide() {
// //     testimonialWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

// //     // Update pagination
// //     document.querySelectorAll('.pagination-dot').forEach((dot, index) => {
// //         dot.classList.toggle('active', index === currentSlide);
// //     });
// // }



// // function nextSlide() {
// //     currentSlide = (currentSlide + 1) % totalSlides;
// //     updateSlide();
// // }

// // function prevSlide() {
// //     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
// //     updateSlide();
// // }

// // function goToSlide(index) {
// //     currentSlide = index;
// //     updateSlide();
// // }

// // // Auto-play functionality
// // setInterval(nextSlide, 4000);

// // // Pause auto-play on hover
// // const carousel = document.querySelector('.testimonial-carousel');
// // carousel.addEventListener('mouseenter', () => {
// //     clearInterval(autoPlay);
// // });

// // let autoPlay = setInterval(nextSlide, 4000);
// // carousel.addEventListener('mouseleave', () => {
// //     autoPlay = setInterval(nextSlide, 4000);
// // });


// let currentSlideIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');
// let autoSlideInterval;

// function showSlide(index) {
//     console.log('Showing slide:', index);
//     // Remove active class from all slides and dots
//     slides.forEach(slide => slide.classList.remove('active'));
//     dots.forEach(dot => dot.classList.remove('active'));

//     // Add active class to current slide and dot
//     if (slides[index]) {
//         slides[index].classList.add('active');
//     }
//     if (dots[index]) {
//         dots[index].classList.add('active');
//     }
// }

// function nextSlide() {
//     currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//     showSlide(currentSlideIndex);
// }

// function previousSlide() {
//     currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//     showSlide(currentSlideIndex);
//     resetAutoSlide();
// }

// function currentSlide(index) {
//     currentSlideIndex = index - 1;
//     showSlide(currentSlideIndex);
//     resetAutoSlide();
// }

// function autoSlide() {
//     console.log('Auto sliding...');
//     nextSlide();
// }

// function startAutoSlide() {
//     console.log('Starting auto slide');
//     autoSlideInterval = setInterval(autoSlide, 4000);
// }

// function resetAutoSlide() {
//     clearInterval(autoSlideInterval);
//     startAutoSlide();
// }

// // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOM loaded, initializing slider');
//     console.log('Found slides:', slides.length);
//     console.log('Found dots:', dots.length);

//     // Initialize auto-slide
//     startAutoSlide();

//     // Pause auto-slide on hover
//     const sliderSection = document.querySelector('.slider-section');
//     if (sliderSection) {
//         sliderSection.addEventListener('mouseenter', () => {
//             console.log('Mouse enter - pausing auto slide');
//             clearInterval(autoSlideInterval);
//         });

//         sliderSection.addEventListener('mouseleave', () => {
//             console.log('Mouse leave - resuming auto slide');
//             startAutoSlide();
//         });
//     }
// });




// document.addEventListener('DOMContentLoaded', function () {
//     console.log('DOM loaded, initializing both sliders');

//     // ---------------------------
//     // Testimonial Carousel (Wrapper + Translate)
//     // ---------------------------

//     let testimonialCurrentSlide = 0;
//     const testimonialWrapper = document.getElementById('testimonialWrapper');
//     const testimonialSlides = document.querySelectorAll('.testimonial-slide');
//     const testimonialTotalSlides = testimonialSlides.length;
//     const testimonialPagination = document.getElementById('pagination');
//     let testimonialAutoPlay;

//     if (testimonialWrapper && testimonialSlides.length > 0 && testimonialPagination) {
//         // Generate pagination dots
//         for (let i = 0; i < testimonialTotalSlides; i++) {
//             const dot = document.createElement('div');
//             dot.className = 'pagination-dot';
//             if (i === 0) dot.classList.add('active');
//             dot.addEventListener('click', () => testimonialGoToSlide(i));
//             testimonialPagination.appendChild(dot);
//         }

//         function testimonialUpdateSlide() {
//             testimonialWrapper.style.transform = `translateX(-${testimonialCurrentSlide * 100}%)`;
//             document.querySelectorAll('.pagination-dot').forEach((dot, index) => {
//                 dot.classList.toggle('active', index === testimonialCurrentSlide);
//             });
//         }

//         function testimonialNextSlide() {
//             testimonialCurrentSlide = (testimonialCurrentSlide + 1) % testimonialTotalSlides;
//             testimonialUpdateSlide();
//         }

//         function testimonialGoToSlide(index) {
//             testimonialCurrentSlide = index;
//             testimonialUpdateSlide();
//         }

//         function startTestimonialAutoPlay() {
//             testimonialAutoPlay = setInterval(testimonialNextSlide, 4000);
//         }

//         const testimonialCarousel = document.querySelector('.testimonial-carousel');
//         if (testimonialCarousel) {
//             testimonialCarousel.addEventListener('mouseenter', () => clearInterval(testimonialAutoPlay));
//             testimonialCarousel.addEventListener('mouseleave', startTestimonialAutoPlay);
//         }

//         // Initialize
//         testimonialUpdateSlide();
//         startTestimonialAutoPlay();
//     }

//     // ---------------------------
//     // Simple Slider (Show/Hide)
//     // ---------------------------

//     let currentSlideIndex = 0;
//     let autoSlideInterval;
//     const slides = document.querySelectorAll('.slide');
//     const dots = document.querySelectorAll('.dot');

//     function showSlide(index) {
//         console.log('Showing slide:', index);
//         slides.forEach(slide => slide.classList.remove('active'));
//         dots.forEach(dot => dot.classList.remove('active'));

//         if (slides[index]) slides[index].classList.add('active');
//         if (dots[index]) dots[index].classList.add('active');
//     }

//     function nextSlide() {
//         currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//         showSlide(currentSlideIndex);
//     }

//     function currentSlide(index) {
//         currentSlideIndex = index;
//         showSlide(currentSlideIndex);
//         resetAutoSlide();
//     }

//     function autoSlide() {
//         console.log('Auto sliding...');
//         nextSlide();
//     }

//     function startAutoSlide() {
//         console.log('Starting auto slide');
//         autoSlideInterval = setInterval(autoSlide, 4000);
//     }

//     function resetAutoSlide() {
//         clearInterval(autoSlideInterval);
//         startAutoSlide();
//     }

//     // Initialize simple slider
//     if (slides.length > 0 && dots.length > 0) {
//         showSlide(currentSlideIndex);
//         startAutoSlide();

//         const sliderSection = document.querySelector('.slider-section');
//         if (sliderSection) {
//             sliderSection.addEventListener('mouseenter', () => {
//                 console.log('Mouse enter - pausing auto slide');
//                 clearInterval(autoSlideInterval);
//             });

//             sliderSection.addEventListener('mouseleave', () => {
//                 console.log('Mouse leave - resuming auto slide');
//                 startAutoSlide();
//             });
//         }

//         // Add click listeners to dots
//         dots.forEach((dot, index) => {
//             dot.addEventListener('click', () => currentSlide(index));
//         });
//     }
// });




document.addEventListener('DOMContentLoaded', function () {
    const docLink = document.getElementById('docLink');
    const homeLink = document.getElementById('homeLink');
    const homeLinkLogo = document.getElementById('homeLinkLogo');


    const coursesLink = document.getElementById('coursesLink');
    const exploreBtn = document.querySelector('.explore-course-btn'); // your Explore Course button

    const docContainer = document.querySelector('.doc-container');
    const mainContent = document.querySelector('main');
    const certContainer = document.querySelector('.cert-container');
    const eiqContainer = document.querySelector('.eiq-container-main'); // the div to show

    const homeText = homeLink.querySelector('.menu-text');
    const docText = docLink.querySelector('.menu-text');
    const coursesText = coursesLink.querySelector('.menu-text');

    // Docs
    docLink.addEventListener('click', function (e) {
        e.preventDefault();
        docContainer.style.display = 'block';
        mainContent.style.display = 'none';
        certContainer.style.display = 'none';
        eiqContainer.style.display = 'none';

        docText.classList.add('active-link');
        homeText.classList.remove('active-link');
        coursesText.classList.remove('active-link');
    });

    // Home
    [homeLink, homeLinkLogo].forEach(element => {
        if (element) {
            element.addEventListener('click', function (e) {
                e.preventDefault();

                docContainer.style.display = 'none';
                mainContent.style.display = 'block';
                certContainer.style.display = 'none';
                eiqContainer.style.display = 'none';

                homeText.classList.add('active-link');
                docText.classList.remove('active-link');
                coursesText.classList.remove('active-link');
            });
        }
    });


    // Courses
    // coursesLink.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     docContainer.style.display = 'none';
    //     mainContent.style.display = 'none';
    //     certContainer.style.display = 'block';
    //     eiqContainer.style.display = 'none';

    //     coursesText.classList.add('active-link');
    //     homeText.classList.remove('active-link');
    //     docText.classList.remove('active-link');
    // });


    /*  Course Dropdown */

    document.getElementById("dropdownToggle").addEventListener("click", function (event) {
        event.stopPropagation(); // prevent global click from closing it immediately
        const dropdown = document.getElementById("coursesDropdown");
        const link = document.getElementById("coursesLink");

        dropdown.classList.toggle("show");
        link.classList.toggle("open");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function () {
        document.getElementById("coursesDropdown").classList.remove("show");
        document.getElementById("coursesLink").classList.remove("open");
    });



    /* on clicking on dropdown page will get navigate  */
    document.getElementById('professionalCourse').addEventListener('click', function (e) {
        e.preventDefault();

        // Your "For Professionals" logic
        document.querySelector('.doc-container').style.display = 'none';
        document.querySelector('main').style.display = 'none';
        document.querySelector('.cert-container').style.display = 'block';
        document.querySelector('.eiq-container-main').style.display = 'none';


        // Update nav styles
        document.querySelector('#homeLink .menu-text').classList.remove('active-link');
        document.querySelector('#docLink .menu-text').classList.remove('active-link');
        document.querySelector('#coursesLink .menu-text').classList.add('active-link');

        // Close dropdown after click
        document.getElementById("coursesDropdown").classList.remove("show");
        document.getElementById("coursesLink").classList.remove("open");

    });

    document.getElementById('studentCourse').addEventListener('click', function (e) {
        e.preventDefault();

        // Your "For Students" logic
        document.querySelector('.doc-container').style.display = 'none';
        document.querySelector('main').style.display = 'none';
        document.querySelector('.cert-container').style.display = 'none';
        document.querySelector('.eiq-container-main').style.display = 'block';


        // Update nav styles
        document.querySelector('#homeLink .menu-text').classList.remove('active-link');
        document.querySelector('#docLink .menu-text').classList.remove('active-link');
        document.querySelector('#coursesLink .menu-text').classList.add('active-link');

        // Close dropdown after click
        document.getElementById("coursesDropdown").classList.remove("show");
        document.getElementById("coursesLink").classList.remove("open");

    });





    // For Students
    // Explore Course
    document.querySelectorAll('.internship-content .explore-course-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Optional: use the parent element if needed
            const parentSection = this.closest('.internship-content');
            console.log('Clicked Explore Course inside:', parentSection);

            // Your logic to show specific container
            document.querySelector('.doc-container').style.display = 'none';
            document.querySelector('main').style.display = 'none';
            document.querySelector('.cert-container').style.display = 'none';
            document.querySelector('.eiq-container-main').style.display = 'block';

            // Update nav styles
            document.querySelector('#homeLink .menu-text').classList.remove('active-link');
            document.querySelector('#docLink .menu-text').classList.remove('active-link');
            document.querySelector('#coursesLink .menu-text').classList.add('active-link');
        });
    });

    // For Professionals
    // Explore Course
    document.querySelectorAll('.certification-content .explore-course-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            debugger;
            setTimeout(() => {
                const scrollTarget = document.scrollingElement || document.documentElement || document.body;
                scrollTarget.scrollTop = 0;
            }, 50);

            // Optional: use the parent element if needed
            const parentSection = this.closest('.certification-content');
            console.log('Clicked Explore Course inside:', parentSection);

            // Your logic to show specific container
            document.querySelector('.doc-container').style.display = 'none';
            document.querySelector('main').style.display = 'none';
            document.querySelector('.cert-container').style.display = 'block';
            document.querySelector('.eiq-container-main').style.display = 'none';



            // Update nav styles
            document.querySelector('#homeLink .menu-text').classList.remove('active-link');
            document.querySelector('#docLink .menu-text').classList.remove('active-link');
            document.querySelector('#coursesLink .menu-text').classList.add('active-link');
        });
    });


    // Slide Course EXplore Button Start Point
    // Explore Course
    document.querySelectorAll('.slide-button').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Optional: use the parent element if needed
            const parentSection = this.closest('.slide-button');
            console.log('Clicked Explore Course inside:', parentSection);

            // Your logic to show specific container
            document.querySelector('.doc-container').style.display = 'none';
            document.querySelector('main').style.display = 'none';
            document.querySelector('.cert-container').style.display = 'none';
            document.querySelector('.eiq-container-main').style.display = 'block';

            // Update nav styles
            document.querySelector('#homeLink .menu-text').classList.remove('active-link');
            document.querySelector('#docLink .menu-text').classList.remove('active-link');
            document.querySelector('#coursesLink .menu-text').classList.add('active-link');
        });
    });

});




/* Toggle button........ */

function toggleLesson(element) {
    const expanded = element.nextElementSibling;
    const button = element.querySelector('.eiq-expand-btn');
    const label = button.querySelector('.btn-label');
    const icon = button.querySelector('.dropdown-icon');

    if (expanded.classList.contains('active')) {
        expanded.classList.remove('active');
        button.classList.remove('open');
        label.textContent = 'Expand';
        icon.style.transform = 'rotate(0deg)';
    } else {
        expanded.classList.add('active');
        button.classList.add('open');
        label.textContent = 'Collapse';
        icon.style.transform = 'rotate(180deg)';
    }
}

function toggleAllLessons() {
    const expandedSections = document.querySelectorAll('.eiq-lesson-expanded');
    const expandButtons = document.querySelectorAll('.eiq-expand-btn');
    const toggleButton = document.querySelector('.eiq-expand-all-btn');
    const toggleLabel = toggleButton.querySelector('.btn-label');
    const toggleIcon = toggleButton.querySelector('.dropdown-icon');

    const anyExpanded = Array.from(expandedSections).some(section =>
        section.classList.contains('active')
    );

    if (anyExpanded) {
        // Collapse all
        expandedSections.forEach(section => section.classList.remove('active'));
        expandButtons.forEach(btn => {
            btn.classList.remove('open');
            btn.querySelector('.btn-label').textContent = 'Expand';
            btn.querySelector('.dropdown-icon').style.transform = 'rotate(0deg)';
        });
        toggleLabel.textContent = 'Expand All';
        toggleIcon.style.transform = 'rotate(0deg)';
    } else {
        // Expand all
        expandedSections.forEach(section => section.classList.add('active'));
        expandButtons.forEach(btn => {
            btn.classList.add('open');
            btn.querySelector('.btn-label').textContent = 'Collapse';
            btn.querySelector('.dropdown-icon').style.transform = 'rotate(180deg)';
        });
        toggleLabel.textContent = 'Collapse All';
        toggleIcon.style.transform = 'rotate(180deg)';
    }
}



/* changing pagination dot */

let currentSlide = 0;
const totalSlides = 8;

// Initialize the carousel
function initCarousel() {
    createPaginationDots();
    updateCarousel();
}

// Create pagination dots
function createPaginationDots() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'pagination-dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.onclick = () => goToSlide(i);
        pagination.appendChild(dot);
    }
}

// Update carousel position and active states
function updateCarousel() {
    const wrapper = document.getElementById('testimonialWrapper');
    const translateX = -currentSlide * (100 / totalSlides);
    wrapper.style.transform = `translateX(${translateX}%)`;

    // Update pagination dots
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Go to specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Next slide function
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

// Previous slide function
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Auto-play functionality
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function () {
    initCarousel();

    // Start auto-play
    startAutoPlay();

    // Pause auto-play on hover
    const carousel = document.querySelector('.testimonial-carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Touch/swipe support for mobile
let startX = 0;
let endX = 0;

const carousel = document.querySelector('.testimonial-carousel');

carousel.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', function (e) {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide(); // Swipe left
        } else {
            prevSlide(); // Swipe right
        }
    }
}