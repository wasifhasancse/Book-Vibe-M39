import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const BookCard = ({ book }) => {
  const { image, tags, bookName, author, category, rating, totalPages } = book;

  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-100/70">
      <div className="rounded-3xl bg-linear-to-br from-slate-50 via-emerald-50/60 to-cyan-50 p-7">
        <img
          src={image}
          alt={bookName}
          className="mx-auto h-52 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-56"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex-1">
        <h3 className="text-2xl font-black tracking-tight text-slate-900">
          {bookName}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-500">By : {author}</p>

        <div className="my-6 border-t border-dashed border-slate-200" />

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
            {category}
          </span>
          <span className="font-semibold text-slate-500">
            {totalPages} Pages
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3">

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Rating
          </p>
          <div className="mt-1 text-lg font-extrabold text-amber-500 flex items-center justify-between">
            <span>{rating}</span>

            <span className="flex">
              {[1, 2, 3, 4, 5].map((star ,index) => (
                <span key={index}>
                  {rating>=star?<IoIosStar />:rating >= star -0.5?<IoIosStarHalf />:<IoIosStarOutline />}
                </span>
              ))}
            </span>

        </div>
      </div>
    </article>
  );
};

export default BookCard;
