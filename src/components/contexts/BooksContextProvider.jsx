import { createContext, useMemo, useState } from "react";
import { useBooks } from "../../lib/hooks";

export const BooksContext = createContext(null);

export default function BooksContextProvider({ children }) {
  const { books, isLoading, errorMessage } = useBooks();
  const [selectedTitle, setSelectedTitle] = useState("");

  const bookList = useMemo(
    () =>
      books
        .map((book) => book.title)
        .filter((title, index, array) => {
          return array.indexOf(title) === index;
        }),
    [books]
  );

  const filteredbooks = useMemo(
    () =>
      selectedTitle
        ? books.filter((book) => book.title === selectedTitle)
        : books,
    [books, selectedTitle]
  );

  const handleAddToList = async (text) => {
    if (!text) {
      return;
    }
    const existingBook = books.find((book) => book.title === text);
    if (existingBook) {
      alert("Book already exists in the list.");
      return;
    }
    // Create a new book object with default values
    const newItem = {
      Id: 0,
      Title: text,
      Author: "Anonymous",
      Publisher: ` Anonymous`,
      Blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      NumberOfPages: 0,
      PublishedDate: "2023-10-01T00:00:00Z",
      CoverUrl: "https://via.placeholder.com/150",
    };

    setbooks([...books, newItem]);

    await fetch("https://localhost:7179/api/Books", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };
  const handleSelectBook = (title) => {
    setSelectedTitle(title);
  };

  return (
    <BooksContext.Provider
      value={{
        filteredbooks,
        isLoading,
        errorMessage,
        bookList,
        handleAddToList,
        handleSelectBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
