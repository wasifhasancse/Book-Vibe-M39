const getWishlistLocalDB = () => {
  const getWishListData = JSON.parse(localStorage.getItem("wishlist"));
  if (getWishListData) {
    return getWishListData;
  }
  return [];
};

const setWishlistLocalDB = (book) => {
  const getLocalDBData = getWishlistLocalDB();
  const checkExisting = getLocalDBData.find(
    (item) => item.bookId == book.bookId,
  );
  if (!checkExisting) {
    getLocalDBData.push(book);
    localStorage.setItem("wishlist", JSON.stringify(getLocalDBData));
  }
};

const getReadlistLocalDB = () => {
  const getReadlist = JSON.parse(localStorage.getItem('readlist'))
  if (getReadlist) {
    return getReadlist
  }
  return []
}
const setReadlistLocalDB = (book) => {
  const readlistData = getReadlistLocalDB()
  const existingData = readlistData.find(item => item.bookId == book.bookId)
  if (existingData) {
    return
  }
  readlistData.push(book)
  localStorage.setItem('readlist', JSON.stringify(readlistData))
}

export { getWishlistLocalDB, setWishlistLocalDB, getReadlistLocalDB, setReadlistLocalDB };
