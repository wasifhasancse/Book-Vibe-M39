import React, { Children, createContext, useState } from 'react';


export const BookContext = createContext()

const BookContextProvider = ({children}) => {

  const [selectedBookData, setSelectedBookData] = useState([])
  const data = {
    selectedBookData,
    setSelectedBookData
  }
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
