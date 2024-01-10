
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.search-bar-input input');
  const searchSelect = document.querySelector('#search-filter');
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
  window.location.href = 'sign-up.html'; 
});

document.querySelector('.login-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = 'login.html'; 
});

document.querySelector('.browse-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = 'book-list.html'; 
});




// Function to load the navbar dynamically
function loadNavbar() {
  // Create an XMLHttpRequest object
  var xhttp = new XMLHttpRequest();

  // Define the function to execute when the response is ready
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Insert the navbar content into the specified container
      document.getElementById("navbarContainer").innerHTML = this.responseText;
    }
  };

  // Open a GET request to the navbar.html file
  xhttp.open("GET", "navbar.html", true);

  // Send the request
  xhttp.send();
}


document.addEventListener('DOMContentLoaded', function () {
  const logo = document.getElementById('logo');
  const profileLink = document.querySelector('.profile-link');
  const loginLink = document.querySelector('.login-link');
  const signupLink = document.querySelector('.signup-link');
  
  // Function to handle logo click (return to homepage)
  logo.addEventListener('click', function () {
      window.location.href = "/index.html"; 
  });
  
  // Function to handle successful login
  function handleLoginSuccess() {
      loginLink.style.display = 'none';
      signupLink.style.display = 'none';
      profileLink.style.display = 'inline-block';
  }
  
  // Example: Simulate a successful login after 2 seconds (replace this with your actual login logic)
  setTimeout(() => {
      handleLoginSuccess();
  }, 2000);
  });