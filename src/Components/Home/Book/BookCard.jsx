import { useContext } from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router";
import {
  BookContext,
} from "../../../Context/BookContextProvider";

const BookCard = ({ book }) => {
  const { setSelectedBookData } = useContext(BookContext);

  const manageBookDetails = () => {
    setSelectedBookData(book);
  };
  const { image, tags, bookName, author, category, rating, totalPages } = book;

  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      onClick={manageBookDetails}
      className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-100/70"
    >
      <div className="overflow-hidden rounded-2xl bg-linear-to-br from-slate-50 via-emerald-50/60 to-cyan-50 px-6 py-5">
        <img
          src={image}
          alt={bookName}
          className="mx-auto h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex-1">
        <h3 className="text-xl font-extrabold leading-snug tracking-tight text-slate-900">
          {bookName}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-slate-500">
          By : {author}
        </p>

        <div className="my-4 border-t border-dashed border-slate-200" />

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-semibold text-slate-700">
            {category}
          </span>
          <span className="font-semibold text-slate-500">
            {totalPages} Pages
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Rating
          </p>
          <span className="text-xl font-extrabold text-slate-800">
            {rating}
          </span>
        </div>
        <span className="flex gap-0.5 text-xl text-amber-500">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <span key={index}>
              {rating >= star ? (
                <IoIosStar />
              ) : rating >= star - 0.5 ? (
                <IoIosStarHalf />
              ) : (
                <IoIosStarOutline />
              )}
            </span>
          ))}
        </span>
      </div>
    </Link>
  );
};

export default BookCard;
