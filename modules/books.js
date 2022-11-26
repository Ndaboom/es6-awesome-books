import screens from './screens.js';

let books = JSON.parse(localStorage.getItem('books')) || [];
const booksList = document.querySelector('#books-list');
const submitForm = document.querySelector('#book-form');
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');
// Contains list of all navbar menus
const optionsMenu = document.querySelectorAll(".menu-option");
let currentBookId = books.length;

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;

    // For rendering books in books-list section
    this.listSection = document.getElementById('books-list');
    this.render();
  }

  render() {
    // Books list initialization
    this.listSection.innerHTML = '';

    books.forEach((item) => {
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book';
    const booksTitle = document.createElement('h2');
    booksTitle.innerHTML = ['"', item.title, '" by ', item.author].join('');
    bookContainer.appendChild(booksTitle);
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    removeBtn.className = 'remove_button';
    removeBtn.addEventListener('click', () => {
    this.remove(item.id);
    });
    bookContainer.appendChild(removeBtn);
    booksList.append(bookContainer);
    });
    screens(0);
  }

  add() {
    books.push(this);
    localStorage.setItem('books', JSON.stringify(books));
    this.render();
  }

  remove(id) {
    this.id = id;
    const updatedList = books.filter((item) => item.id !== this.id);
    localStorage.setItem('books', JSON.stringify(updatedList));
    window.location.reload();
  }
}

let book = new Book(currentBookId, inputTitle.value, inputAuthor.value);

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputTitle.value && inputAuthor.value) {
    currentBookId += 1;
    // Instatiate book's class with new values
    book = new Book(currentBookId, inputTitle.value, inputAuthor.value);
    // Add the value via the add method from the book's class
    book.add();
    // Empty the add book form fields
    inputTitle.value = '';
    inputAuthor.value = '';
    // Add the active class to the correct current page
    optionsMenu[0].classList.add("blue");
    optionsMenu[1].classList.remove("blue");
  }
});

export default book;
