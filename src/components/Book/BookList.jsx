import Book from "./Book";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useBooksContext } from "../../lib/hooks";

export default function BookList() {
  const { bookList, isLoading, errorMessage } = useBooksContext();

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {Array.isArray(bookList) && !bookList.length ? (
        <p className="feedback-list__empty">No books found.</p>
      ) : (
        bookList.map((book) => <Book key={book.id} book={book} />)
      )}
    </ol>
  );
}
