import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [wishListData, setWishListData] = useState([]);
  const [readListData, setReadListData] = useState([]);
  const [sortingType, setSortingType] = useState("");

  const manageReadList = (getBook) => {
    const existingReadBook = readListData.find(
      (book) => book.bookId == getBook.bookId,
    );

    const existingWishBook = wishListData.find(
      (book) => book.bookId == getBook.bookId,
    );
    if (existingWishBook) {
      toast.error(`'${existingWishBook.bookName}' is already in Wish List!`);
      return;
    }

    if (existingReadBook) {
      toast.warning(`'${existingReadBook.bookName}' is already in Read List!`);
      return;
    }
    toast.success(`'${getBook.bookName}' is added in Read List!`);
    const readListBook = [...wishListData, getBook];
    setReadListData(readListBook);
  };

  const manageWishList = (getBook) => {
    const existingReadBook = readListData.find(
      (book) => book.bookId == getBook.bookId,
    );
    if (existingReadBook) {
      toast.warning(`'${existingReadBook.bookName}' is already in Read List!`);
      return;
    }
    const existingWishBook = wishListData.find(
      (book) => book.bookId == getBook.bookId,
    );
    if (existingWishBook) {
      toast.error(`'${existingWishBook.bookName}' is already in Wish List!`);
      return;
    }
    toast.info(`'${getBook.bookName}' is added in Wish List!`);
    const wishListBook = [...wishListData, getBook];
    setWishListData(wishListBook);
  };
  const data = {
    manageReadList,
    manageWishList,
    readListData,
    setReadListData,
    wishListData,
    setWishListData,
    sortingType,
    setSortingType,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
