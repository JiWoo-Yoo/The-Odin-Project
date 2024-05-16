const mainboard = document.querySelector('.mainboard');
const inputForm = document.querySelector('.input-form');
const bookList = document.querySelector('.book-list');

const bookName = document.createElement('input');
const authorName = document.createElement('input');
const addBtn = document.createElement('button');

const myLibrary = [];

function Book(name, author) {
    this.name = name;
    this.author = author;
}

function addBookToLibrary(Object) {
    const book = new Book(Object.name, Object.author);
    myLibrary.push(book);
    paintBookList(book);
}

function paintBookList(book) {
    const li = document.createElement('li');
    li.textContent = `${book.name} by ${book.author}`;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', handleDelBtnClick);
    li.appendChild(delBtn);
    bookList.appendChild(li);
}

function handleAddBtnClick() {
    if (!bookName.value || !authorName.value) {
        alert('Please enter book name and author name');
        return;
    }
    else{
        addBookToLibrary({ name: bookName.value, author: authorName.value});
        bookName.value = '';
        authorName.value = '';
    }
}

function handleDelBtnClick(event) {
    event.target.parentNode.remove();
}

console.log(myLibrary);

bookName.setAttribute('type', 'text');
bookName.setAttribute('placeholder', 'book name');

authorName.setAttribute('type', 'text');
authorName.setAttribute('placeholder', 'author name');

addBtn.textContent = 'Add';

addBtn.addEventListener('click', handleAddBtnClick);

inputForm.appendChild(bookName);
inputForm.appendChild(authorName);
inputForm.appendChild(addBtn);

