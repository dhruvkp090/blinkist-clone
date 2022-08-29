import React from 'react';
import Page from './component/page/Page';
import { theme } from './Theme/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Auth0Provider } from '@auth0/auth0-react';
import useSearch from './util/useSearch';
import useBooks from './util/useBooks';
import Context from './util/context';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;



function App() {

  const {bookList, setBookList, libraryBooks, setLibraryBooks, categories,  setCategories} = useBooks();
  const {searchTerm, setSearchTerm, searchResult, setSearchResult} = useSearch({bookList: bookList, initialValue: ""});

  const value = {
    bookList,setBookList,
    libraryBooks, setLibraryBooks, 
    categories,  setCategories, 
    searchResult , setSearchResult, 
    searchTerm, setSearchTerm
  };

  return (
    <Context.Provider value={value}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <Page />
          </ThemeProvider>
      </Auth0Provider>
    </Context.Provider>
  );
}

export default App;
