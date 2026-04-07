import HeroImage from "../../../assets/hero_img.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-cyan-50">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
        {/* ── Text ── */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Discover Your Next Favourite
          </span>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your{" "}
            <span className="bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Dream
            </span>{" "}
            Reading List
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
            Explore thousands of books, track your reading progress, and share
            your library with friends — all in one beautifully organised space.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <button className="rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-700 hover:shadow-lg active:scale-95">
              Browse Books
            </button>
            <button className="rounded-full border border-emerald-300 bg-white px-7 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-all duration-200 hover:bg-emerald-50 hover:shadow-md active:scale-95">
              My Reading List
            </button>
          </div>

          {/* stats row */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
            {[
              { value: "10K+", label: "Books" },
              { value: "5K+", label: "Readers" },
              { value: "4.9★", label: "Rating" },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-2xl font-extrabold text-slate-900">
                  {s.value}
                </p>
                <p className="text-xs font-medium text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Image ── */}
        <div className="relative flex flex-1 justify-center">
          {/* ring glow */}
          <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-linear-to-br from-emerald-300/40 to-cyan-300/40 blur-2xl sm:h-96 sm:w-96" />
          <div className="relative rounded-3xl border border-slate-200/70 shadow-2xl shadow-emerald-100 overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-full">
            <img
              src={HeroImage}
              alt="A collection of books"
              className="h-64 w-full object-cover sm:h-80 lg:h-105"
            />
            {/* floating badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-cyan-500 text-lg font-black text-white shadow">
                B
              </span>
              <div>
                <p className="text-sm font-bold text-slate-800">Book Vibe</p>
                <p className="text-xs text-slate-400">Your reading companion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
