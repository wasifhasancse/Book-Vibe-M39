import { createBrowserRouter } from "react-router";
import App from "../App";
import BookDetails from "../Components/Home/Book/BookDetails";
import Home from "../Components/Home/Home";

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
        element: <h2>Listed Book</h2>,
      },
      {
        path: "/pagesToRead",
        element: <h2>Page to Read</h2>,
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
        element: <p>404</p>,
      },
    ],
  },
]);
