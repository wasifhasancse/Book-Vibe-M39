import { createBrowserRouter } from "react-router";
import App from "../App";
import Chart from "../Components/Chart/Chart";
import Error from "../Components/Error/Error";
import BookDetails from "../Components/Home/Book/BookDetails";
import Home from "../Components/Home/Home";
import ListedBook from "../Components/Home/ListedBook/ListedBook";
import ReadList from "../Components/Home/ListedBook/ReadList";
import WishList from "../Components/Home/ListedBook/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: async () => {
          const response = await fetch("/data/booksData.json");
          return response.json();
        },
        Component: Home,
      },
      {
        path: "/listedBooks",
        Component: ListedBook,
        children: [
          {
            index: true,
            Component: WishList,
          },
          {
            path: "/listedBooks/readList",
            Component: ReadList,
          },
        ],
      },
      {
        path: "/pagesToRead",
        loader: async () => {
          const response = await fetch("/data/booksData.json");
          return response.json();
        },
        Component: Chart,
      },
      {
        path: "/bookDetails/:bookId",
        loader: async () => {
          const response = await fetch("/data/booksData.json");
          return response.json();
        },
        Component: BookDetails,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
