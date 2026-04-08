import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BookContextProvider from "./Context/BookContextProvider";

function App() {
  return (
    <>
      <BookContextProvider>
        <Navbar />
        <Outlet />
      </BookContextProvider>
    </>
  );
}

export default App;
