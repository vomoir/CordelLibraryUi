import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
// import { useBooksContext } from "../../lib/hooks";
import { useBooksStore } from "../../stores/feedbackItemsStore";

export default function FeedbackList() {
  // Destructure the context componentry
  // const { filteredFeedbackItems, isLoading, errorMessage } =
  //   useBooksContext();
  const isLoading = useBooksStore((state) => state.isLoading);
  const errorMessage = useBooksStore((state) => state.errorMessage);
  const filteredFeedbackItems = useBooksStore((state) =>
    state.getFilteredFeedbackItems()
  );

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}

      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
