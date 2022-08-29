import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from "../src/Theme/Theme";
import useSearch from '../src/util/useSearch';
import useBooks from '../src/util/useBooks';
import Context from '../src/util/context';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const categories = [
    {
        id: 1,
        name: "Entrepreneurship"
    },
    {
        id: 2,
        name: "Science"
    },
    {
        id: 3,
        name: "Economics"
    },
    {
        id: 4,
        name: "Politics"
    },
];

const books = [
      {
          bookTitle: "Animal Farm",
          bookAuthor: "Gorge Orwell",
          bookDuration: "20",
          isFinished: false
      },
      {
          bookTitle: "Animal Farm",
          bookAuthor: "Gorge Orwell",
          bookDuration: "20",
          isFinished: false
      },
      {
          bookTitle: "Animal Farm",
          bookAuthor: "Gorge Orwell",
          bookDuration: "20",
          isFinished: false
      },
      {
          bookTitle: "Animal Farm",
          bookAuthor: "Gorge Orwell",
          bookDuration: "20",
          isFinished: false
      }
  ];

const test = () => {
    return true;
};

const value = {
  bookList: books,
  setBookList: test,
  libraryBooks: books, 
  setLibraryBooks: test, 
  categories: categories,  
  setCategories: test, 
  searchResult: "" , 
  setSearchResult: test, 
  searchTerm: "", 
  setSearchTerm: test
}

export const decorators = [
  (Story) => (
    <Context.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Story />
      </ThemeProvider>
    </Context.Provider>
  )
]