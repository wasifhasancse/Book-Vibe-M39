import { Outlet, ScrollRestoration } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BookContextProvider from "./Context/BookContextProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BookContextProvider>
        <ScrollRestoration/>
        <Navbar />
        <Outlet />
         <ToastContainer />
      </BookContextProvider>
    </>
  );
}

export default App;
