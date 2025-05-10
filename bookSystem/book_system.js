let books = [];

function editBook(index){
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1);
    showbooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name : bookName,
            author : authorName,
            description : bookDescription,
            pages : pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    }
    else {
        alert(`Please fill in all fields correctly.`);
    }
}

function showbooks() {
    const booksDiv = books.map( (book, index) => `<h1>Book Number: ${index + 1} </h1>
        <p> Name: ${book.name} </p>
        <p> Author: ${book.author} </p>
        <p> Book Description: ${book.description} </p>
        <p> No. of Pages: ${book.pages} </p>
        <button onclick="editBook(${index})">Edit Book </button>
    `);
    document.getElementById("books").innerHTML = booksDiv;
}
