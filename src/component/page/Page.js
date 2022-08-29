import IntegratedNavBar from '../Organism/NavBar/IntegratedNavBar';
import { Container, Typography } from '@material-ui/core';
import CardsInTabs from '../Organism/CardsInTabs/CardsInTabs';
import { React, useState, useEffect, useContext } from 'react';
import CardGrid from '../molecule/CardGrid/CardGrid';
import Context from '../../util/context';
import { fetchBook, fetchCategory, postBookToLibrary, updateLibraryBook } from '../../util/functions';

export const util = {
    addToLibrary: null,
    changeReadStatus: null,
    findBooksByCategory: null,
    isInLibrary: null
};

const isFinished = (x) => {
    return x.isFinished;
};

const isUnFinished = (x) => {
    return !x.isFinished;
};


function Page() {
    const {bookList,
            libraryBooks, setLibraryBooks, 
            searchResult , setSearchResult, 
            searchTerm } = useContext(Context);
    
    const [filteredBookList, setFilteredBookList] = useState([]);
    const [filterTerm, setFilterTerm] = useState("");

    const [unFinished, setUnFinished] = useState(
        libraryBooks.filter(isUnFinished)
    );
    
    const [finished, setFinished] = useState(
        libraryBooks.filter(isFinished)
    );

    useEffect(() => {
        setUnFinished(libraryBooks.filter(isUnFinished));
        setFinished(libraryBooks.filter(isFinished));
    }, [libraryBooks]);

    util.isInLibrary = (id) => {
        for (const book of libraryBooks){
            if (book.id === id){
                return true;
            }
        }
        return false;
    };

    util.addToLibrary = async (e, id) => {
        const jsonData = await postBookToLibrary(id);
        console.log(jsonData);
        let updatedData = await fetchBook(jsonData.id);
        updatedData = { ...updatedData, isFinished: false };

        setLibraryBooks([...libraryBooks, updatedData]);
    };

    util.changeReadStatus = async (e, data) => {

        const updatedData = await updateLibraryBook(data);

        const bookStatusUpdate = (book) => {
            return book.id === data
            ? {...book, isFinished : updatedData.isFinished} 
            : book ;
        };

        setLibraryBooks(
            libraryBooks.map((book) => bookStatusUpdate(book)));
        
        setFilteredBookList(
        filteredBookList.map((book) => bookStatusUpdate(book)));

        setSearchResult(
        searchResult.map((book) => bookStatusUpdate(book)));
    };
    
    util.findBooksByCategory = (data) => {
        const filteredList = bookList.filter((book) => (book.category.id === data));
        setFilteredBookList(filteredList);
    };

    return (
        <>
        <Container maxWidth="md" style={{maxWidth: "1024px"}}>
        <IntegratedNavBar menuItems = {["My Library"]}
                        linkTo={["/"]}
                        fetchCategory={fetchCategory}
                        findBooksByCategory={util.findBooksByCategory}
                        setFilterTerm={setFilterTerm}
                        />
        </Container>
        <Container maxWidth="md">
                {searchTerm ? <>
                    <Typography variant="h4"><strong>{renderTextDependingOnSearchResultLength()}</strong></Typography> 
                    <CardGrid bookList={searchResult} addToLibrary={util.addToLibrary} isInLibrary={util.isInLibrary} onClick={util.changeReadStatus} /></> :
                    (renderFilterComponentsElseRenderMyLibrary())
                
                }
        </Container>

        </>
    );

    function renderFilterComponentsElseRenderMyLibrary() {
        return filterTerm ?
            <>
                <Typography variant="h4"><strong>{filterTerm}</strong></Typography>
                <CardGrid addToLibrary={util.addToLibrary} bookList={filteredBookList} isInLibrary={util.isInLibrary} onClick={util.changeReadStatus} />
            </> :
            <>
                <Typography variant="h4"><strong>My Library</strong></Typography>
                <CardsInTabs
                    changeReadStatus={util.changeReadStatus}
                    finished={finished}
                    unFinished={unFinished}
                    isInLibrary={util.isInLibrary}
                    addToLibrary={util.addToLibrary}
                    style={{ background: "rgba(58,70,73,.7)" }} />
            </>;
    }

    function renderTextDependingOnSearchResultLength() {
        return searchResult.length > 0 ? `All results for "${searchTerm}"` : `Nothing found for "${searchTerm}"`;
    }
}

export default Page;




