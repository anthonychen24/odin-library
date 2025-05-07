let myLibrary = [];

const addNewBook = document.querySelector(".add-new-book");
const bookForm = document.querySelector(".book-form");
const closeForm = document.querySelector(".close-form");
const hidden = document.querySelector(".hidden");
const library = document.querySelector(".library");

addNewBook.addEventListener("click", () => {
    if (hidden.style.display === "none" || hidden.style.display === "") {
        hidden.style.display = "flex";
    } else {
        hidden.style.display = "none";
    }
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    bookForm.reset();
    hidden.style.display = "none";    
    displayBooks();
}); 

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
}

function displayBooks() {
    library.textContent = "";

    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        let title = document.createElement("h3");
        title.textContent = book.title;
        title.classList.add("book-title");

        let author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        author.classList.add("book-author");

        let pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        pages.classList.add("book-pages");

        let read = document.createElement("p");
        read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
        read.classList.add("book-read");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.setAttribute("data-id", book.id); // Set the ID as a data attribute

        deleteBtn.addEventListener("click", (e) => {
            const targetId = e.target.getAttribute("data-id"); // Get the ID from button
            myLibrary = myLibrary.filter(book => book.id !== targetId);
            displayBooks();
        });

        const readToggleBtn = document.createElement("button");
        readToggleBtn.textContent = "Toggle Read";
        readToggleBtn.classList.add("read-toggle-btn");
        readToggleBtn.setAttribute("data-id", book.id);

        readToggleBtn.addEventListener("click", (e) => {
            const targetId = e.target.getAttribute("data-id");
            const book = myLibrary.find(bookEl => bookEl.id === targetId);
            book.toggleRead();
            displayBooks();
        })

        bookCard.appendChild(deleteBtn);
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        bookCard.appendChild(readToggleBtn);

        library.appendChild(bookCard);
    })
}