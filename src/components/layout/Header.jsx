import AddBookForm from "../Book/AddBookForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";
import { useBooksContext } from "../../lib/hooks";

export default function Header() {
  const { handleAddToList } = useBooksContext();
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      {/* Pass the prop down from the context. This is OK for small props. */}
      <AddBookForm onAddToList={handleAddToList} />
    </header>
  );
}
