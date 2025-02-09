let currentIndex = 0;

// Function to scroll left
function scrollLeft() {
    const scrollContainer = document.querySelector('.instagram-scroll');
    const containerWidth = scrollContainer.clientWidth;

    if (currentIndex > 0) {
        currentIndex--;
        scrollContainer.scrollTo({
            left: containerWidth * currentIndex,
            behavior: 'smooth'
        });
        updateDots();
    }
}

// Function to scroll right
function scrollRight() {
    const scrollContainer = document.querySelector('.instagram-scroll');
    const containerWidth = scrollContainer.clientWidth;
    const totalItems = document.querySelectorAll('.instagram-scroll-item').length;

    if (currentIndex < totalItems - 1) { // Adjusted for dynamic item count
        currentIndex++;
        scrollContainer.scrollTo({
            left: containerWidth * currentIndex,
            behavior: 'smooth'
        });
        updateDots();
    }
}

// Function to move to a specific slide
function moveToSlide(index) {
    const scrollContainer = document.querySelector('.instagram-scroll');
    const containerWidth = scrollContainer.clientWidth;

    currentIndex = index;
    scrollContainer.scrollTo({
        left: containerWidth * currentIndex,
        behavior: 'smooth'
    });
    updateDots();
}

// Function to update active state of dots
function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Newsletter form validation
document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.getElementById("newsletter-form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            const emailInput = document.querySelector("input[name='email']");
            if (!emailInput.value.includes("@")) {
                alert("Please enter a valid email address.");
                event.preventDefault();
            }
        });
    }

    // Handle dropdown menus
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
        const button = dropdown.querySelector(".dropbtn");
        const menu = dropdown.querySelector(".dropdown-content");

        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            // Close all dropdowns except the one clicked
            document.querySelectorAll(".dropdown-content").forEach((content) => {
                if (content !== menu) {
                    content.classList.remove("show");
                }
            });

            // Toggle the clicked dropdown
            menu.classList.toggle("show");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-content").forEach((menu) => {
                menu.classList.remove("show");
            });
        }
    });

    // Function to display specific exhibition based on query parameter
    function displayExhibition() {
        const art = new URLSearchParams(window.location.search).get('art');
        document.querySelectorAll('.exhibition-content').forEach(exhibition => {
            exhibition.style.display = 'none';
        });

        if (art) {
            const exhibition = document.getElementById(art);
            if (exhibition) {
                exhibition.style.display = 'block';
            } else {
                console.error('Exhibition not found');
            }
        }
    }

    displayExhibition();

    // Close dropdowns on window resize to prevent layout issues
    window.addEventListener("resize", function () {
        document.querySelectorAll(".dropdown-content").forEach((menu) => {
            menu.classList.remove("show");
        });
    });
});
