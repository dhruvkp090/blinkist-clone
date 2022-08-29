export const fetchLibraryBook = async (id) => {
    const response = await fetch(`http://localhost:5000/myLibrary/${id}`);
    return response.json();
};

export const fetchBook = async (id) => {
    const res = await fetch(`http://localhost:5000/allBooks/${id}`);
    return res.json();
};

export const fetchCategory = async (id) => {
    const res = await fetch(`http://localhost:5000/category/${id}`);
    return res.json();
};

export async function postBookToLibrary(id) {
    const bookToAdd = { id: id, isFinished: false };

    const res = await fetch(`http://localhost:5000/myLibrary`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(bookToAdd),
    });

    return res.json();
}

export async function updateLibraryBook(data) {
    const bookToToggle = await fetchLibraryBook(data);
    const updatedBook = { ...bookToToggle, isFinished: !bookToToggle.isFinished };

    const res = await fetch(`http://localhost:5000/myLibrary/${data}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
    });

    return  res.json(); 
}

export const fetchBooks = async () => {
    const response = await fetch('http://localhost:5000/allBooks');
    return response.json(); 
};

export const fetchLibraryBooks = async () => {
    const response = await fetch('http://localhost:5000/myLibrary');
    const data = await response.json();
    const books = [];
    for (const book of data) {
        let newBook = await fetchBook(book.id);
        newBook = { ...newBook, isFinished: book.isFinished };
        books.push(newBook);
    }

    return books;
};

export const fetchCategories = async () => {
    const response = await fetch('http://localhost:5000/category');
    return response.json();
};
