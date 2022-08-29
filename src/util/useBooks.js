import {useState, useEffect } from 'react';
import {fetchBooks, fetchLibraryBooks, fetchCategories} from './functions';

const useBooks = () => {
    const [bookList, setBookList] = useState([]);
    const [libraryBooks, setLibraryBooks] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const booksFromServer =  await fetchBooks();
            setBookList(booksFromServer);
        };
        
        const getCategories = async () => {
            const categoriesFromServer =  await fetchCategories();
            setCategories(categoriesFromServer);
        };

        const getLibraryBooks = async () => {
            const booksFromServer =  await fetchLibraryBooks();
            setLibraryBooks(booksFromServer);
        };

        getBooks();
        getCategories();
        getLibraryBooks();
    }, []);

    return { bookList, setBookList, libraryBooks, setLibraryBooks, categories,  setCategories};
};



export default useBooks;