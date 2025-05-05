const myLibrary = [];

const addNewBook = document.querySelector(".add-new-book");
const bookForm = document.querySelector(".book-form");
const hidden = document.querySelector(".hidden");
const library = document.querySelector(".library");

addNewBook.addEventListener("click", () => {
    hidden.style.display = "flex";    
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    bookForm.reset();
    hidden.style.display = "none";    
    displayBooks();
}); 

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

        let author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        let pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;

        let read = document.createElement("p");
        read.textContent = `Read: ${book.read ? "Yes" : "No"}`;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);

        library.appendChild(bookCard);
    })
}