import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../../Context/BookContextProvider";

const ReadList = () => {
  const { readListData, sortingType } = useContext(BookContext);
  const [filtersData, setFilterData] = useState(readListData);

  useEffect(() => {
    if (sortingType == "rating") {
      const filter = [...readListData].sort((a, b) => a.rating - b.rating);
      setFilterData(filter);
    } else if (sortingType == "pages") {
      const filter = [...readListData].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setFilterData(filter);
    } else if (sortingType == "year") {
      const filter = [...readListData].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing,
      );
      setFilterData(filter);
    }
  }, [sortingType, readListData]);

  if (filtersData.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white/90 px-6 py-14 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          Read List Empty
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
          No books in your read list yet
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
          Add books from the details page and they will appear here.
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {filtersData.map((book, index) => (
        <article
          key={index}
          className="group relative overflow-hidden rounded-[1.7rem] border border-[#e5e7eb] bg-white p-4 transition sm:p-5"
        >
          <span />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <div className="relative mx-auto overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 sm:mx-0 sm:w-32">
              <img
                src={book.image}
                alt={book.bookName}
                className="h-44 w-full object-cover sm:h-36"
              />
              <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-[#0f172a]">
                #{index + 1}
              </span>
            </div>

            <div className="flex flex-1 flex-col">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <p className="inline-flex rounded-full border border-[#fed7aa] bg-[#fff7ed] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#b45309]">
                  {book.category}
                </p>
                <p className="inline-flex rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1d4ed8]">
                  {book.publisher}
                </p>
              </div>

              <h2 className="mt-3 text-center text-2xl font-black leading-tight text-[#0f172a] sm:text-left">
                {book.bookName}
              </h2>
              <p className="mt-1 text-center text-sm font-semibold text-[#64748b] sm:text-left">
                By {book.author}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 text-sm font-bold text-[#1e293b] sm:grid-cols-3">
                <p className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2">
                  Rating: {book.rating}
                </p>
                <p className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2">
                  Pages: {book.totalPages}
                </p>
                <p className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2">
                  Year: {book.yearOfPublishing}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ReadList;
