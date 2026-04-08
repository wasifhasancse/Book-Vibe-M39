import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router";
import { BookContext } from "../../../Context/BookContextProvider";

const ListedBook = () => {
  const { wishListData, readListData, setSortingType } =
    useContext(BookContext);
  const [activeTab, setActiveTab] = useState("wish");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Select Sort");
  const sortRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSortChange = (label, value) => {
    setSelectedSort(label);
    setSortingType(value);
    setIsSortOpen(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#fff9f2] via-[#fffefc] to-[#ecfdfa] px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#ffedd5]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#ccfbf1]/80 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <header className="rounded-4xl border border-[#f4d9c2] bg-[#fffdf9]/95 p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <p className="inline-flex rounded-full border border-[#fed7aa] bg-[#fff1de] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#c2410c]">
                Personal Bookshelf
              </p>
              <h1 className="text-3xl font-black tracking-tight text-[#172554] sm:text-4xl">
                Listed Books
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#475569] sm:text-base lg:mx-0">
                A redesigned, hard-coded shelf with two tabs and a decorated
                sorting control.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-semibold sm:text-sm lg:justify-start">
                <span className="rounded-full border border-[#fdba74] bg-[#fff7ed] px-3 py-1 text-[#9a3412]">
                  Total: {wishListData.length + readListData.length}
                </span>
                <span className="rounded-full border border-[#99f6e4] bg-[#f0fdfa] px-3 py-1 text-[#0f766e]">
                  Wish: {wishListData.length}
                </span>
                <span className="rounded-full border border-[#bae6fd] bg-[#eff6ff] px-3 py-1 text-[#1d4ed8]">
                  Read: {readListData.length}
                </span>
              </div>
            </div>

            <div
              className="mx-auto w-full max-w-xs lg:mx-0 lg:w-72"
              ref={sortRef}
            >
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Sort By
              </label>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSortOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-2xl border border-emerald-200 bg-linear-to-r from-white to-emerald-50/60 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50/50"
                >
                  <span>{selectedSort}</span>
                  <span
                    className={`h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-emerald-500 transition-transform duration-200 ${
                      isSortOpen ? "-translate-y-0.5 rotate-225" : ""
                    }`}
                  />
                </button>

                {isSortOpen && (
                  <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-lg shadow-emerald-100/60">
                    <button
                      type="button"
                      onClick={() => handleSortChange("Rating", "rating")}
                      className="block w-full px-4 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      Rating
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleSortChange("Number of Pages", "pages")
                      }
                      className="block w-full px-4 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      Number of Pages
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSortChange("Publisher Year", "year")}
                      className="block w-full px-4 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      Publisher Year
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-7 flex justify-center lg:justify-start">
            <div className="menu menu-horizontal rounded-full border border-slate-200 bg-white/80 px-2 py-1 gap-2">
              <Link
                to={"/listedBooks"}
                onClick={() => setActiveTab("wish")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeTab === "wish"
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                Wish List
              </Link>
              <Link
                to={"/listedBooks/readList"}
                onClick={() => setActiveTab("read")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeTab === "read"
                    ? "bg-emerald-50 text-emerald-600"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                Read Books
              </Link>
            </div>
          </div>
        </header>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-extrabold tracking-tight text-[#0f172a]">
            {activeTab === "wish" ? "Wish List Books" : "Read Books"}
          </h2>
        </div>

        <div className="mt-8">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default ListedBook;
