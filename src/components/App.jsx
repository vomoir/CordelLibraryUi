import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
// import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import { useEffect } from "react";
import GetBooks from "../api/getBooks";

function App() {
  const books = GetBooks();
  console.log(books);

  return (
    <div className="app">
      <Footer />
      <Container />
      {/* <HashtagList /> */}
    </div>
  );
}

export default App;
