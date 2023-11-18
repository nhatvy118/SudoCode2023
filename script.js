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
  const newTransformValue = -currentSlide * 100 + '%';
  carousel.style.transform = 'translateX(' + newTransformValue + ')';
}



document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search-bar-input input');
  const searchSelect = document.querySelector('.search-facet-value');
  const searchResults = document.querySelector('.search-results');

  const books = [
      { "id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
      { "id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee" },
      { "id": 3, "title": "1984", "author": "George Orwell" }
  ];

  function searchBooks() {
      const searchTerm = searchInput.value.toLowerCase();
      const searchCategory = searchSelect.value.toLowerCase(); // Use the 'value' property for the select element
      const filteredBooks = filterBooks(books, searchTerm, searchCategory);

      // Clear previous search results
      searchResults.innerHTML = '';

      // Display search results
      if (filteredBooks.length > 0) {
          const resultList = document.createElement('ul');
          filteredBooks.forEach(book => {
              const listItem = document.createElement('li');
              listItem.textContent = `${book.title} by ${book.author}`;
              resultList.appendChild(listItem);
          });
          searchResults.appendChild(resultList);
      } else {
          const noResultsItem = document.createElement('li');
          noResultsItem.textContent = 'No matching books found.';
          searchResults.appendChild(noResultsItem);
      }
  }

  function filterBooks(books, term, category) {
      return books.filter(book => {
          const bookValue = book[category].toLowerCase();
          return bookValue.includes(term);
      });
  }

  // Event listeners
  searchInput.addEventListener('input', searchBooks);
  searchSelect.addEventListener('change', searchBooks);

  // Optional: Trigger search on form submit
  const searchForm = document.querySelector('.search-bar-input');
  searchForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting (which would cause a page refresh)
      searchBooks();
  });
});

document.querySelector('.signup-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = 'signup.html'; // Redirect to the sign-up page
});

document.querySelector('.login-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = 'login.html'; // Redirect to the sign-up page
});