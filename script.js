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
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let form = document.createElement("form");
    form.classList.add("add-book-form");

    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Book title";
    titleInput.required = true;

    let authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.placeholder = "Author name";
    authorInput.required = true;

    let pagesInput = document.createElement("input");
    pagesInput.type = "number";
    pagesInput.placeholder = "Number of pages";
    pagesInput.required = true;

    let readLabel = document.createElement("label");
    readLabel.textContent = "Have you read this book?";

    let readInput = document.createElement("input");
    readInput.type = "checkbox";

    let submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add book";

    form.appendChild(titleInput);
    form.appendChild(authorInput);
    form.appendChild(pagesInput);
    form.appendChild(readLabel);
    form.appendChild(readInput);
    form.appendChild(submitBtn);

    overlay.appendChild(form);
    document.body.appendChild(overlay);
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let title = titleInput.value;
        let author = authorInput.value;
        let pages = pagesInput.value;
        let read = readInput.checked;
        addBookToLibrary(title, author, pages, read);
        overlay.remove();
    });

    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            overlay.remove();
        }
    });
});