// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         return `${this.title} by ${this.author}, ${this.pages} pages`;
//     }
//     this.readToggle = function() {
//         this.read = !this.read;
//     }
// }
        
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get info() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }

    readToggle() {
        this.read = !this.read;
    }

}

if (!localStorage.getItem('myLibrary')) {
    localStorage.setItem('myLibrary', JSON.stringify([
        {
          "title": "Eloquent JavaScript",
          "author": "Marijn Haverbeke",
          "pages": 472,
          "read": true
        },
        {
          "title": "JavaScript: The Good Parts",
          "author": "Douglas Crockford",
          "pages": 176,
          "read": false
        },
        {
          "title": "A Smarter Way To Learn JavaScript",
          "author": "Mark Myers",
          "pages": 256,
          "read": true
        },
        {
          "title": "The Pragmatic Programmer",
          "author": "Andrew Hunt & David Thomas",
          "pages": "352",
          "read": false
        }
      ]));
}

let myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
myLibrary.forEach(function (book, ind) {
    myLibrary[ind] = new Book(book.title, book.author, book.pages, book.read);
});

function addBookToLibrary(book) {
  myLibrary.push(book)
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function displayLibrary(library) {
    while (document.querySelector('.library').firstChild) {
        document.querySelector('.library').removeChild(document.querySelector('.library').firstChild);
    }
    library.forEach(function (book, ind) {
        const readBtn = document.createElement('button');
        readBtn.innerText = book.read ? 'I HAVE read this book' : 'I have NOT read this book';
        readBtn.style.backgroundColor = book.read ? 'green' : 'yellow';
        readBtn.onclick = function () {
            myLibrary[ind].readToggle();
            localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
            displayLibrary(myLibrary);
        }
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
        removeBtn.onclick = function () {
            myLibrary.splice(ind, 1);
            localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
            displayLibrary(myLibrary);
        };
        const paragraph = document.createElement('p');
        paragraph.innerText = book.info;
        const div = document.createElement('div');
        div.classList.add('book');
        div.appendChild(paragraph);
        div.appendChild(readBtn);
        div.appendChild(removeBtn);
        document.querySelector('.library').appendChild(div);
    });
}

document.querySelector('#addBook').addEventListener('click', function() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    if (title && author && pages) {
        addBookToLibrary(new Book(title, author, pages, read));
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
        displayLibrary(myLibrary);
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#read').checked = false;
    }
});

displayLibrary(myLibrary);