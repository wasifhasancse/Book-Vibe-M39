import { useLoaderData } from "react-router";
import BookCard from "../Book/BookCard";

const BookSection = () => {
  const booksData = useLoaderData();

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Featured Collection
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Books That Deserve Your Attention
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            Browse a curated set of stories, classics, and page-turners with a
            clean reading-first layout.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {booksData.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
