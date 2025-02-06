let currentIndex = 0;

function scrollLeft() {
  const scrollContainer = document.querySelector('.instagram-scroll');
  const scrollWidth = scrollContainer.scrollWidth;
  const containerWidth = scrollContainer.clientWidth;
  
  if (currentIndex > 0) {
    currentIndex--;
    scrollContainer.scrollTo({
      left: (containerWidth * currentIndex),
      behavior: 'smooth'
    });
    updateDots();
  }
}

function scrollRight() {
  const scrollContainer = document.querySelector('.instagram-scroll');
  const scrollWidth = scrollContainer.scrollWidth;
  const containerWidth = scrollContainer.clientWidth;

  if (currentIndex < 9) { // 10 items (0 to 9)
    currentIndex++;
    scrollContainer.scrollTo({
      left: (containerWidth * currentIndex),
      behavior: 'smooth'
    });
    updateDots();
  }
}

function moveToSlide(index) {
  const scrollContainer = document.querySelector('.instagram-scroll');
  const containerWidth = scrollContainer.clientWidth;

  currentIndex = index;
  scrollContainer.scrollTo({
    left: (containerWidth * currentIndex),
    behavior: 'smooth'
  });
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot'); //find out meaning of querySelectorAll
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    } 
  });
}
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
  const emailInput = document.querySelector("input[name='email']");
  if (!emailInput.value.includes("@")) {
      alert("Please enter a valid email address.");
      event.preventDefault();
  }
});
// Select all dropdown buttons
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior

      const dropdown = button.nextElementSibling;

      // If the clicked dropdown is not already open, close all other dropdowns
      const allDropdowns = document.querySelectorAll('.dropdown-content');
      allDropdowns.forEach(content => {
          if (content !== dropdown) {
              content.classList.remove('show'); // Close other dropdowns
          }
      });

      // Toggle the clicked dropdown (open/close it)
      dropdown.classList.toggle('show');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content.show').forEach(content => {
          content.classList.remove('show');
      });
  }
});
// JavaScript to toggle dropdown visibility
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function () {
        // Close all other dropdowns
        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('show');
            }
        });

        // Toggle current dropdown
        dropdown.classList.toggle('show');
    });
});

// Function to get the value of a query parameter by name
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to display the specific exhibition based on the query parameter
function displayExhibition() {
  const art = getQueryParam('art'); // Get the 'art' query parameter

  // Hide all exhibition content initially
  const exhibitions = document.querySelectorAll('.exhibition-content');
  exhibitions.forEach(exhibition => {
      exhibition.style.display = 'none';
  });

  // Show the specific exhibition based on the 'art' query parameter
  if (art) {
      const exhibition = document.querySelector(`#${art}`);
      if (exhibition) {
          exhibition.style.display = 'block';
      } else {
          console.error('Exhibition not found');
      }
  }
}

// Call the displayExhibition function when the page loads
window.onload = displayExhibition;
