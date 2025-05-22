import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const btnStyles =
  '"text-white flex items-center gap-x-2 px-5 py-3  bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"';

export default function PaginationControls({ previousPage, nextPage }) {
  return (
    <section className="flex w-full justify-between">
      {previousPage ? (
        <div>Previous</div>
      ) : (
        // <Link to={previousPage} className={btnStyles}>
        //   <ArrowLeftIcon />
        //   Previous
        // </Link>
        <div />
      )}
      {nextPage && (
        <div>Next</div>
        // <Link to={nextPage} className={btnStyles}>
        //   Next
        //   <ArrowRightIcon />
        // </Link>
      )}
    </section>
  );
}
