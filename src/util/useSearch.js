import {useState, useEffect } from 'react';

const useSearch = ({bookList, initialValue}) => {
    const [searchTerm, setSearchTerm] = useState(initialValue);
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = () => {
        if(searchTerm !== ""){
            const filteredBooks = bookList.filter((book) => {
                return Object.values(book)
                                .join(" ")
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase());
            });

            setSearchResult(filteredBooks);
        }
        else{
            setSearchResult(bookList);
        }
    };

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

    return { searchTerm, setSearchTerm, searchResult, setSearchResult };
};

export default useSearch;