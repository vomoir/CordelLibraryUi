import { useBooksStore } from "../../stores/feedbackItemsStore";
import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header() {
  const addItemToList = useBooksStore((state) => state.addItemToList);
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      {/* Pass the prop down from the context. This is OK for small props. */}
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}
