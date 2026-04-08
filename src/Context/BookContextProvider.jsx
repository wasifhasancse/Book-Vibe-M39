import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [wishListData, setWishListData] = useState([]);
  const [readListData, setReadListData] = useState([]);

  const manageReadList = (getBook) => {
    const existingReadBook = readListData.find(book => book.bookId == getBook.bookId)

    if (existingReadBook) {
      alert('alredy')
      return
    }
    const readListBook = [...wishListData, getBook];
    setReadListData(readListBook);
  };
  const manageWishList = (getBook) => {
    const existingReadBook = readListData.find(book => book.bookId == getBook.bookId)
    if (existingReadBook) {
      alert('alredy read list')
      return
    }
    const existingWishBook = wishListData.find(book => book.bookId == getBook.bookId)

    if (existingWishBook) {
      alert('alredy')
      return
    }
    const wishListBook = [...wishListData, getBook];
    setWishListData(wishListBook);
  };
  const data = {
    manageReadList,
    manageWishList,readListData, setReadListData,
    wishListData,
    setWishListData,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
