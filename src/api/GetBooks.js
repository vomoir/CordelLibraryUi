import { useState, useEffect } from "react";
const GetBooks = () => {
  const [books, setBooks] = useState([]);
  const uri = "https://localhost:7179/api/Books";

  const fetchBooks = async () => {
    try {
      const response = await fetch(uri);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // useEffect(() => {
  //   fetch("https://localhost:7179/api/Books")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setBooks(data);
  //     });
  // }, []);
  useEffect(() => {
    fetchBooks();
  }, []);

  return { books };
  // <div>

  //   {photos.map((photo) => (
  //     <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
  //   ))}
  // </div>
};
export default GetBooks;
