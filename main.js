let books = [];

function getInput() {
  const book = {};
  book.title = document.getElementById('bookTitle').value;
  book.author = document.getElementById('bookAuthor').value;
  return book;
}

function removeBook(title) {
  const book = document.getElementById(title);
  book.remove();
  books = books.filter((bookObj) => bookObj.title !== title);
  localStorage.setItem('array', JSON.stringify(books));
}

function addBook(bookObj) {
  const bookList = document.getElementById('book-list');
  const book = document.createElement('LI');
  book.setAttribute('id', bookObj.title);
  book.innerHTML = `<h3> ${bookObj.title} </h3> <h3>${bookObj.author} `;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', () => removeBook(bookObj.title));
  book.appendChild(deleteBtn);
  bookList.appendChild(book);
}

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', () => {
  const book = getInput();
  books.push(book);
  localStorage.setItem('array', JSON.stringify(books));
  addBook(book);
});

window.onload = () => {
  books = JSON.parse(localStorage.getItem('array' || '[]'));

  books.forEach((book) => {
    addBook(book);
  });
};
