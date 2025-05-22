import Container from "./layout/Container";
import BooksContextProvider from "./contexts/BooksContextProvider";
import Footer from "./layout/Footer";
// import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import { useEffect } from "react";
import GetBooks from "../api/getBooks";
import { useBooks } from "../lib/hooks";

function App() {
  const books = useBooks();

  console.log(books);

  return (
    <div className="app">
      <Footer />
      <BooksContextProvider>
        <Container />
      </BooksContextProvider>
    </div>
  );
}

export default App;
