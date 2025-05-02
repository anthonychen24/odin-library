const myLibrary = [];

const addNewBook = document.querySelector(".add-new-book");
const bookForm = document.querySelector(".book-form");

addNewBook.addEventListener("click", () => {
    bookForm.style.display = "block";
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    document.querySelector(".book-form").reset();
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
}