import BookList from "../Book/BookList";
import Header from "./Header";

export default function Container() {
  return (
    <div className="container">
      <Header />
      <BookList />
    </div>
  );
}
