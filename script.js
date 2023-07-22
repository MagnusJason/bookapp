let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    render();
}

function render() {
    let bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
  
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
  
      let bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
  
      let bookInfo = document.createElement("div");
      bookInfo.classList.add("book-info");
  
      let bookTitle = document.createElement("h2");
      bookTitle.textContent = book.title;
  
      let bookAuthor = document.createElement("p");
      bookAuthor.textContent = `by ${book.author}`;
  
      let bookPages = document.createElement("p");
      bookPages.textContent = `${book.pages} pages`;
  
      let readToggle = document.createElement("div");
      readToggle.classList.add("read-toggle");
  
      let readLabel = document.createElement("label");
      readLabel.textContent = "Read?";
  
      let readCheckbox = document.createElement("input");
      readCheckbox.type = "checkbox";
      readCheckbox.checked = book.read;
  
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-btn");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        myLibrary.splice(i, 1);
        render();
      });
  
      bookCard.appendChild(bookInfo);
      bookInfo.appendChild(bookTitle);
      bookInfo.appendChild(bookAuthor);
      bookInfo.appendChild(bookPages);
      bookInfo.appendChild(readToggle);
      readToggle.appendChild(readLabel);
      readToggle.appendChild(readCheckbox);
      bookInfo.appendChild(deleteButton);
      bookList.appendChild(bookCard);
    }
  }

render(); // Render the initial book list

let addBookBtn = document.getElementById("add-book-btn");
addBookBtn.addEventListener("click", function() {
    let title = prompt("Enter book title:");
    let author = prompt("Enter author name:");
    let pages = prompt("Enter number of pages:");
    let read = confirm("Have you read this book?");
    addBookToLibrary(title, author, pages, read);
});