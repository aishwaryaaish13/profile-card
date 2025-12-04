


let books = [];
let currentFilter = 'All';


const BOOK_IMAGE_URL = 'https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg';


function addBook(event) {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const category = document.getElementById('category').value;


    if (!title || !author || !category) {
        alert('Please fill all fields');
        return;
    }

    
    const book = {
        title: title,
        author: author,
        category: category,
        imageUrl: BOOK_IMAGE_URL
    };
    books.push(book);


    document.getElementById('bookForm').reset();

    
    renderBooks();
}


function renderBooks() {
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = '';

    
    let filteredBooks = books;
    if (currentFilter !== 'All') {
        filteredBooks = books.filter(book => book.category === currentFilter);
    }

    
    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = '<div class="empty-state"><p>No books to display</p></div>';
        return;
    }

    
    filteredBooks.forEach((book, index) => {
        const bookCard = createBookCard(book, index);
        booksGrid.appendChild(bookCard);
    });
}


function createBookCard(book, index) {
    const card = document.createElement('div');
    card.className = 'book-card';

    card.innerHTML = `
        <img src="${book.imageUrl}" alt="${book.title}" class="book-card-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23ecf0f1%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22%3EBook Image%3C/text%3E%3C/svg%3E'">
        <div class="book-card-content">
            <div class="book-card-title">${book.title}</div>
            <div class="book-card-author">by ${book.author}</div>
            <div class="book-card-category">${book.category}</div>
            <button class="book-card-delete" onclick="deleteBook(${index})">Delete</button>
        </div>
    `;

    return card;
}


function deleteBook(index) {
    
    let actualIndex = index;

    if (currentFilter !== 'All') {
        const filteredBooks = books.filter(book => book.category === currentFilter);
        actualIndex = books.indexOf(filteredBooks[index]);
    }

    
    books.splice(actualIndex, 1);

    
    renderBooks();
}
function sortBooks(order) {
    if (order === 'asc') {
        books.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'desc') {
        books.sort((a, b) => b.title.localeCompare(a.title));
    }

    renderBooks();
}


function filterBooks() {
    const filterSelect = document.getElementById('filterCategory');
    currentFilter = filterSelect.value;
    renderBooks();
}
