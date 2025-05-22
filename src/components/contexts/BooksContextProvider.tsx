import { createContext, useMemo, useState } from "react";
import { useBooks } from "../../lib/hooks";

export const BooksContext = createContext(null);

export default function BooksContextProvider({ children }) {
  const { books, isLoading, errorMessage, setbooks } = useBooks();
  const [selectedTitle, setSelectedTitle] = useState("");

  const bookList = useMemo(
    () =>
      books
        .map((item) => item.title)
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
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

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

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
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
