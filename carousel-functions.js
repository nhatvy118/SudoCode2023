let currentSlide = 0;

function nextSlide() {
  if (currentSlide < 2) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = 2;
  }
  updateCarousel();
}

function updateCarousel() {
    console.log("hi");
  const carousel = document.querySelector('.carousel');
  const newTransformValue = -currentSlide * 115 + '%';
  carousel.style.transform = 'translateX(' + newTransformValue + ')';
}

function redirectToBookDetail(bookId) {
    // Redirect to the book detail page using the bookId
    window.location.href = 'book-details.html?id=' + bookId; 
  }

document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch book details from the JSON file
    function fetchBookDetails(bookId) {
      return fetch('books.json')
        .then(response => response.json())
        .then(data => {
          return data.find(book => book.id === bookId);
        });
    }
  
    // Function to add a carousel item for a book
    function addCarouselItem(book) {
      const trendingCarousel = document.getElementById('trendingCarousel');
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';
      carouselItem.onclick = function () {
        redirectToBookDetail(book.id);
      };
  
      carouselItem.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" class="cover-image" />
        <div class="book-info">
          <h3>${book.title} - ${book.author}</h3>
          <p>${book.description}</p>
        </div>
      `;
  
      trendingCarousel.appendChild(carouselItem);
    }
  
    // Function to display trending books
    function displayTrendingBooks(bookIds) {
      bookIds.forEach(bookId => {
        fetchBookDetails(bookId)
          .then(book => {
            addCarouselItem(book);
          })
          .catch(error => {
            console.error('Error fetching book details:', error);
          });
      });
    }
  
    // Trending book IDs
    const trendingBookIds = [12, 13, 14];
  
    // Display trending books
    displayTrendingBooks(trendingBookIds);
  });
  