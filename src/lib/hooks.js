import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../components/contexts/BooksContextProvider";

export function useBooksContext() {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("BooksContext is not defined in BookList component");
  }
  return context;
}

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const uri = "https://localhost:7179/api/Books";

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(uri);

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        console.debug(data);
        setBooks(data.books);
      } catch (error) {
        setErrorMessage("Something went wrong. Try later...");
      }
      setIsLoading(false);
    };
    fetchBooks();
  }, []);

  return {
    books,
    isLoading,
    errorMessage,
    setBooks,
  };
}
