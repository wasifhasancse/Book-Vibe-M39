import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const booksData = useLoaderData()
  const { bookId } = useParams();

  const selectedBookData = booksData.find(book => book.bookId == bookId)


  if (!selectedBookData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-lg font-semibold text-slate-500">
          Loading book details...
        </p>
      </div>
    );
  }

  const {
    image,
    bookName,
    author,
    category,
    rating,
    totalPages,
    tags,
    publisher,
    yearOfPublishing,
    review,
  } = selectedBookData;

  return (
    <main className=" bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ── Book Hero ── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:gap-12">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="sticky top-20 rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden">
              <img
                src={image}
                alt={bookName}
                className="h-80 w-full object-cover sm:h-112.5"
              />
            </div>
          </div>

          {/* Info & Actions */}
          <div className="md:col-span-3 flex flex-col">
            {/* Category Badge */}
            <span className="inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700">
              {category}
            </span>

            {/* Title */}
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {bookName}
            </h1>

            {/* Author */}
            <p className="mt-2 text-lg font-semibold text-slate-600">
              By {author}
            </p>

            {/* Rating Box - Matches BookCard Style */}
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Rating
                </p>
                <span className="text-2xl font-extrabold text-slate-800">
                  {rating}
                </span>
              </div>
              <span className="flex gap-0.5 text-2xl text-amber-500">
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

            {/* Meta Info Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Pages
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-900">
                  {totalPages}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  Published
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-900">
                  {yearOfPublishing}
                </p>
              </div>
            </div>

            {/* Publisher */}
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                Publisher
              </p>
              <p className="mt-1 text-base font-semibold text-slate-800">
                {publisher}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex-1 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-slate-700">
                Add to List
              </button>
              <button className="flex-1 rounded-full border border-emerald-300 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition duration-200 hover:bg-emerald-100">
                Mark as Read
              </button>
            </div>
          </div>
        </div>

        {/* ── Review Section ── */}
        <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50/50 p-8 sm:p-10">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            About This Book
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">{review}</p>
        </section>
      </div>
    </main>
  );
};

export default BookDetails;
